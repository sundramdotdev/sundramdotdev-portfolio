import { NextResponse } from "next/server";
import { google } from "googleapis";

// Format date to IST (Indian Standard Time)
function getISTTimestamp() {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }) + " IST";
}

export async function POST(request: Request) {
  try {
    // Basic spam protection: Reject excessively large payloads
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 5000) {
      return NextResponse.json(
        { error: "Payload too large." },
        { status: 413 }
      );
    }

    const body = await request.json();
    let { name, email, company, phone, projectType, message } = body;

    // Server-side validation and sanitization
    name = name?.trim() || "";
    email = email?.trim() || "";
    company = company?.trim() || "";
    phone = phone?.trim() || "";
    projectType = projectType?.trim() || "";
    message = message?.trim() || "";

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Capture source and environment details
    const referer = request.headers.get("referer") || "Direct";
    const userAgent = request.headers.get("user-agent") || "Unknown";
    const source = "Portfolio Contact"; // Identify where the lead originated

    // Set up Google Sheets authentication
    if (
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_SHEET_ID
    ) {
      console.error("Google Sheets API credentials are not fully configured.");
      throw new Error("Missing Google Sheets credentials.");
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        // Replace escaped newlines if they exist in the env string
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    
    // Default sheet name is usually "Sheet1" unless specified
    const sheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1";

    const timestamp = getISTTimestamp();

    // The order of columns: Timestamp, Name, Email, Company, Project Type, Description, Phone, Source, Page, User Agent
    const rowData = [
      timestamp,
      name,
      email,
      company,
      projectType,
      message,
      phone,
      source,
      referer,
      userAgent,
    ];

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${sheetName}!A:J`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json(
      { message: "Message received successfully." },
      { status: 200 }
    );
  } catch (error) {
    // Log the actual error server-side securely
    console.error("Contact form processing error:", error);
    
    // Return a generic error to the client to avoid leaking internals
    return NextResponse.json(
      { error: "Something went wrong while sending your message. Please try again." },
      { status: 500 }
    );
  }
}
