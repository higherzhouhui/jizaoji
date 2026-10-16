"use client";

import { usePreferences } from "@/lib/preferences";

export function PricingNotes() {
  const { t } = usePreferences();
  const notes = t.pricing.notes;

  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <div className="space-y-3">
          {notes.map((note, index) => (
            <div key={index} className="flex gap-3 text-sm text-mute">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-brass"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
