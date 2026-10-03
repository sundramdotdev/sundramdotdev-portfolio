"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.projectType.trim() || !formData.message.trim()) {
      return;
    }

    setFormState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", company: "", phone: "", projectType: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (formState === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center p-12 rounded-[18px] border border-[#C9C7BE]/20 bg-[#C9C7BE]/5 text-center"
      >
        <CheckCircle size={48} className="text-[#C9C7BE] mb-6" />
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
          Message received.
        </h3>
        <p className="text-caption text-text-secondary leading-relaxed max-w-sm">
          Thanks for reaching out, Sundram will get back to you soon.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-8 text-sm font-semibold text-[#C9C7BE] hover:text-[#C9C7BE]/80 transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.1em] text-text-primary mb-2.5">
            Full Name <span className="text-[#C9C7BE]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-5 py-4 text-sm rounded-[14px] bg-bg-surface border border-border-subtle text-text-primary placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-[#C9C7BE] focus:border-[#C9C7BE] transition-all min-h-[44px]"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.1em] text-text-primary mb-2.5">
            Email Address <span className="text-[#C9C7BE]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 text-sm rounded-[14px] bg-bg-surface border border-border-subtle text-text-primary placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-[#C9C7BE] focus:border-[#C9C7BE] transition-all min-h-[44px]"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-[0.1em] text-text-primary mb-2.5">
            Company / Organization <span className="text-text-faint normal-case tracking-normal ml-1">(Optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-5 py-4 text-sm rounded-[14px] bg-bg-surface border border-border-subtle text-text-primary placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-[#C9C7BE] focus:border-[#C9C7BE] transition-all min-h-[44px]"
            placeholder="Acme Corp"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-[0.1em] text-text-primary mb-2.5">
            Phone / WhatsApp <span className="text-text-faint normal-case tracking-normal ml-1">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-5 py-4 text-sm rounded-[14px] bg-bg-surface border border-border-subtle text-text-primary placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-[#C9C7BE] focus:border-[#C9C7BE] transition-all min-h-[44px]"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-[0.1em] text-text-primary mb-2.5">
          Project Type <span className="text-[#C9C7BE]">*</span>
        </label>
        <div className="relative">
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-5 py-4 text-sm rounded-[14px] bg-bg-surface border border-border-subtle text-text-primary focus:outline-none focus:ring-1 focus:ring-[#C9C7BE] focus:border-[#C9C7BE] transition-all appearance-none min-h-[44px]"
          >
            <option value="">Select type</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Business Software">Business Software</option>
            <option value="SaaS / MVP">SaaS / MVP</option>
            <option value="Website / Web Application">Website / Web Application</option>
            <option value="UI/UX Development">UI/UX Development</option>
            <option value="Consultation">Consultation</option>
            <option value="Other">Other</option>
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-faint"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.1em] text-text-primary mb-2.5">
          Project Description <span className="text-[#C9C7BE]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-5 py-4 text-sm rounded-[14px] bg-bg-surface border border-border-subtle text-text-primary placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-[#C9C7BE] focus:border-[#C9C7BE] transition-all resize-none min-h-[44px]"
          placeholder="Tell me what you're building, what problem you're trying to solve, and what you'd like help with."
        />
      </div>

      {formState === "error" && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 rounded-[12px] bg-danger/10 text-danger text-sm"
        >
          <AlertCircle size={18} />
          Something went wrong while sending your message. Please try again.
        </motion.div>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className={cn(
          "w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 text-sm font-semibold rounded-[16px] transition-all duration-300 min-h-[44px]",
          formState === "submitting"
            ? "bg-[#C9C7BE]/50 text-bg-primary cursor-not-allowed"
            : "bg-[#C9C7BE] text-bg-primary hover:bg-[#C9C7BE]/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9C7BE]/10"
        )}
      >
        {formState === "submitting" ? (
          <>
            Sending...
            <Loader2 size={16} className="animate-spin" />
          </>
        ) : (
          <>
            Submit Inquiry
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
