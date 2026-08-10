import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon" | "wordmark" | "monochrome";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: 28, text: 14 },
  md: { icon: 32, text: 16 },
  lg: { icon: 40, text: 20 },
};

export function Logo({ variant = "full", className, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 group", className)}
      aria-label="sundramdotdev — Home"
    >
      {variant === "icon" || variant === "monochrome" ? (
        <img
          src="/logo/logo-icon.png"
          alt="sundramdotdev Icon"
          className="flex-shrink-0"
          style={{ height: s.icon, width: "auto" }}
        />
      ) : (
        <img
          src="/logo/logo.svg"
          alt="sundramdotdev Logo"
          className="flex-shrink-0 object-contain"
          style={{ height: s.icon, width: "auto" }}
        />
      )}
    </Link>
  );
}
