"use client";

import { usePreferences } from "@/lib/preferences";

export function PricingMaintenance() {
  const { t } = usePreferences();
  const m = t.pricing.maintenance;

  return (
    <section className="border-b border-line bg-canvas py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-ink">{m.title}</h3>
          <p className="mt-2 text-sm text-mute">{m.desc}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-mute">
                {t.pricing.currency.rmb}
              </p>
              <p className="mt-1 text-xl font-bold text-ink">{m.priceRmb}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-mute">
                {t.pricing.currency.myr}
              </p>
              <p className="mt-1 text-xl font-bold text-accent">{m.priceMyr}</p>
            </div>
            <div className="sm:ml-auto">
              <p className="text-sm text-mute">{m.billing}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
