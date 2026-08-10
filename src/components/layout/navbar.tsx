"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-2xl border-b border-border-subtle shadow-xs"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 max-w-[1400px]"
          style={{ height: "var(--nav-height)" }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Logo variant="full" size="md" />

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="menubar">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                ((item.href as string) !== "/" && pathname.startsWith(item.href));

              return (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    className={cn(
                      "relative px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-200",
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent-bronze rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[0.9375rem] font-semibold text-bg-primary bg-accent-bronze rounded-[18px] hover:bg-accent-bronze-hover transition-all duration-200 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-[14px] text-text-primary hover:bg-bg-elevated transition-colors"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-2xl lg:hidden"
            style={{ paddingTop: "var(--nav-height)" }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="flex flex-col px-6 py-8"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const isActive =
                    pathname === item.href ||
                    ((item.href as string) !== "/" && pathname.startsWith(item.href));

                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.05 * index,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={cn(
                          "block px-4 py-4 text-xl font-medium rounded-[14px] transition-colors",
                          isActive
                            ? "text-text-primary bg-bg-elevated"
                            : "text-text-secondary hover:text-text-primary hover:bg-bg-surface"
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-bronze ml-3 mb-0.5" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-border-subtle"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-bg-primary bg-accent-bronze rounded-[18px] hover:bg-accent-bronze-hover transition-colors"
                >
                  Work With Me
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
