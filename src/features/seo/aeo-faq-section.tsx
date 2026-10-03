"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqItems } from "./faq-data";

export function AeoFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions about Sundram Gupta"
      className="relative z-10 py-20 md:py-28 max-w-[var(--content-max-width)] mx-auto px-6 md:px-10 lg:px-16 w-full pointer-events-auto"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-bronze/10 border border-accent-bronze/20 text-accent-bronze text-xs font-mono uppercase tracking-wider mb-4">
            <HelpCircle size={13} />
            <span>KNOWLEDGE &amp; FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Direct answers on technical capabilities, engineering background, and product development services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-question-${index}`;
            const panelId = `faq-answer-${index}`;

            return (
              <div
                key={item.question}
                className="rounded-2xl border border-border-subtle bg-bg-surface/85 backdrop-blur-xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  id={headingId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-bg-elevated/40 transition-colors focus-visible:outline-accent-bronze focus-visible:outline-2"
                >
                  <span className="font-heading font-semibold text-text-primary text-base md:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-accent-bronze transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 pb-6 pt-1 text-sm md:text-base text-text-secondary leading-relaxed border-t border-border-subtle/40"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
