"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { studioCertificates } from "../data";
import { StudioCertificateItem } from "../types";
import { CertificateLightbox } from "./certificate-lightbox";

export function CertificatesOverlay() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] =
    useState<StudioCertificateItem | null>(null);
  const dragStartX = useRef<number | null>(null);

  const total = studioCertificates.length;
  const activeCert = studioCertificates[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= total - 1 ? 0 : prev + 1));
  };

  // Touch and drag swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - dragStartX.current;
    if (diff > 40) handlePrev();
    if (diff < -40) handleNext();
    dragStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (diff > 40) handlePrev();
    if (diff < -40) handleNext();
    dragStartX.current = null;
  };

  return (
    <div className="min-h-screen flex items-center py-20 max-w-[var(--content-max-width)] mx-auto px-6 md:px-10 lg:px-16 w-full pointer-events-none">
      <div className="w-full pointer-events-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-bronze/10 border border-accent-bronze/20 text-accent-bronze text-xs font-mono uppercase tracking-wider mb-4">
              <span>05 / CERTIFICATES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight">
              Certifications &amp; Learning
            </h2>
            <p className="mt-2 text-text-secondary text-sm md:text-base leading-relaxed">
              Proof of continuous learning, architecture standards, and product craft.
            </p>
          </div>

          {/* Desktop Carousel Navigation */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="font-mono text-xs text-text-faint mr-2">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-bg-surface/80 hover:bg-bg-elevated border border-border-subtle text-text-secondary hover:text-text-primary transition-all cursor-pointer"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-bg-surface/80 hover:bg-bg-elevated border border-border-subtle text-text-secondary hover:text-text-primary transition-all cursor-pointer"
              aria-label="Next certificate"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Visual Stage */}
        <div
          className="relative w-full max-w-4xl mx-auto cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div className="group relative rounded-2xl bg-bg-surface/85 backdrop-blur-xl border border-border-subtle overflow-hidden p-6 md:p-8 hover:border-accent-bronze/40 transition-all duration-300 shadow-xl">
            {/* Certificate Preview Frame */}
            <div
              onClick={() => setSelectedCert(activeCert)}
              className="relative w-full aspect-[16/10] max-h-[460px] rounded-xl overflow-hidden border border-border-subtle bg-bg-primary cursor-pointer"
            >
              <Image
                src={activeCert.image}
                alt={`${activeCert.title} certification credential earned by Sundram Gupta from ${activeCert.issuer}`}
                fill
                sizes="(max-width: 1024px) 95vw, 860px"
                className="object-contain p-2 group-hover:scale-[1.01] transition-transform duration-500"
                priority
              />

              {/* View Overlay Tag */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-primary/80 backdrop-blur-md border border-border-subtle text-xs font-mono text-text-secondary group-hover:text-text-primary transition-colors">
                <Maximize2 size={13} />
                <span>Enlarge</span>
              </div>
            </div>

            {/* Certificate Meta */}
            <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-text-faint mb-1.5">
                  <span className="text-accent-bronze font-semibold">
                    {activeCert.issuer}
                  </span>
                  <span>•</span>
                  <span>{activeCert.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary">
                  {activeCert.title}
                </h3>

                <p className="mt-2 text-xs md:text-sm text-text-secondary leading-relaxed max-w-2xl">
                  {activeCert.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(activeCert)}
                className="self-start md:self-end px-4 py-2 rounded-xl bg-bg-elevated hover:bg-border-subtle border border-border-subtle text-xs font-mono text-text-primary transition-colors cursor-pointer"
              >
                View Credential
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Indicator Dots & Controls */}
        <div className="flex sm:hidden items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            {studioCertificates.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === activeIndex
                    ? "w-6 bg-accent-bronze"
                    : "w-1.5 bg-border-subtle"
                }`}
                aria-label={`Go to certificate ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-bg-surface border border-border-subtle text-text-secondary cursor-pointer"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-bg-surface border border-border-subtle text-text-secondary cursor-pointer"
              aria-label="Next certificate"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox
        certificate={selectedCert}
        certificates={studioCertificates}
        onClose={() => setSelectedCert(null)}
        onSelect={setSelectedCert}
      />
    </div>
  );
}
