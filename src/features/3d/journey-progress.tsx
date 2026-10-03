"use client";

import { CAMERA_WAYPOINTS } from "./waypoints";
import { cn } from "@/lib/utils";

interface JourneyProgressProps {
  activeSectionIndex?: number;
  activeSectionId?: string;
  onNavigate: (id: string) => void;
}

export function JourneyProgress({
  activeSectionIndex = 0,
  activeSectionId,
  onNavigate,
}: JourneyProgressProps) {
  return (
    <aside
      aria-label="Experience Journey Navigation"
      className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 pointer-events-auto"
    >
      <div className="flex flex-col items-end gap-2.5 bg-bg-primary/40 backdrop-blur-md px-3 py-4 rounded-2xl border border-border-subtle/50">
        {CAMERA_WAYPOINTS.map((wp, idx) => {
          const isActive = activeSectionId
            ? wp.id === activeSectionId ||
              (activeSectionId === "faq" && wp.id === "blog")
            : idx === activeSectionIndex;
          return (
            <button
              key={wp.id}
              onClick={() => onNavigate(wp.id)}
              className="group flex items-center gap-3 text-right cursor-pointer py-1 transition-all"
              aria-current={isActive ? "step" : undefined}
              aria-label={`Jump to section ${wp.number}: ${wp.name}`}
            >
              {/* Waypoint label, revealed more prominently on hover or active */}
              <span
                className={cn(
                  "text-[11px] font-mono tracking-wider transition-all duration-300",
                  isActive
                    ? "text-accent-bronze font-semibold translate-x-0 opacity-100"
                    : "text-text-faint opacity-40 group-hover:opacity-80 group-hover:text-text-secondary translate-x-1"
                )}
              >
                {wp.number} {wp.name.toUpperCase()}
              </span>

              {/* Step indicator pip */}
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  isActive
                    ? "w-2.5 h-2.5 bg-accent-bronze shadow-[0_0_8px_rgba(201,199,190,0.5)]"
                    : "w-1.5 h-1.5 bg-border-subtle group-hover:bg-text-faint"
                )}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
}
