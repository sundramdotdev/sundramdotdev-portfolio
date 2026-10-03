"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { StudioCertificateItem } from "../types";

interface CertificateLightboxProps {
  certificate: StudioCertificateItem | null;
  certificates: StudioCertificateItem[];
  onClose: () => void;
  onSelect: (cert: StudioCertificateItem) => void;
}

export function CertificateLightbox({
  certificate,
  certificates,
  onClose,
  onSelect,
}: CertificateLightboxProps) {
  const currentIndex = certificate
    ? certificates.findIndex((c) => c.id === certificate.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex <= 0) {
      onSelect(certificates[certificates.length - 1]);
    } else {
      onSelect(certificates[currentIndex - 1]);
    }
  }, [currentIndex, certificates, onSelect]);

  const handleNext = useCallback(() => {
    if (currentIndex >= certificates.length - 1) {
      onSelect(certificates[0]);
    } else {
      onSelect(certificates[currentIndex + 1]);
    }
  }, [currentIndex, certificates, onSelect]);

  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [certificate, onClose, handlePrev, handleNext]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary/92 backdrop-blur-2xl p-4 md:p-8 animate-fade-in pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-bg-surface border border-border-subtle rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="w-full flex items-center justify-between pb-4 border-b border-border-subtle mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-text-faint">
            <span className="text-accent-bronze font-semibold">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(certificates.length).padStart(2, "0")}
            </span>
            <span>•</span>
            <span>{certificate.issuer}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors cursor-pointer"
            aria-label="Close certificate lightbox"
          >
            <X size={20} />
          </button>
        </div>

        {/* Certificate Image Frame */}
        <div className="relative w-full aspect-[3/2] max-h-[55vh] rounded-xl overflow-hidden border border-border-subtle bg-bg-primary">
          <Image
            src={certificate.image}
            alt={`${certificate.title} certification credential earned by Sundram Gupta from ${certificate.issuer}`}
            fill
            sizes="(max-width: 1024px) 90vw, 800px"
            className="object-contain p-2"
            priority
          />
        </div>

        {/* Info & Metadata */}
        <div className="w-full mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary">
              {certificate.title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary max-w-xl leading-relaxed">
              {certificate.description}
            </p>
          </div>

          <div className="flex items-center gap-3 self-center md:self-end">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-bg-elevated text-text-secondary hover:text-text-primary hover:bg-border-subtle transition-colors cursor-pointer"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-bg-elevated text-text-secondary hover:text-text-primary hover:bg-border-subtle transition-colors cursor-pointer"
              aria-label="Next certificate"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
