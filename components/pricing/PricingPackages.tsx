"use client";

import Link from "next/link";
import { usePreferences } from "@/lib/preferences";
import { btnPrimary } from "@/lib/ui";

export function PricingPackages() {
  const { t, locale } = usePreferences();
  const p = t.pricing;

  return (
    <section className="border-b border-line bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-page px-5 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {p.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl border ${
                pkg.recommended
                  ? "border-accent bg-canvas shadow-lg"
                  : "border-line bg-canvas"
              } p-6 sm:p-8`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-accent px-4 py-1 text-xs font-semibold text-canvas">
                    {t.work.recommend}
                  </span>
                </div>
              )}
              
              <div>
                <h3 className="text-xl font-semibold text-ink">{pkg.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{pkg.desc}</p>
              </div>

              <div className="mt-6 space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-mute">
                    {p.currency.rmb}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-ink">
                    {typeof pkg.priceRmb === "object" && "range" in pkg.priceRmb
                      ? pkg.priceRmb.range
                      : typeof pkg.priceRmb === "object" && "landing" in pkg.priceRmb
                      ? pkg.priceRmb.full
                      : typeof pkg.priceRmb === "object" && "daily" in pkg.priceRmb
                      ? pkg.priceRmb.project
                      : ""}
                  </p>
                  {typeof pkg.priceRmb === "object" && "landing" in pkg.priceRmb && (
                    <p className="text-sm text-mute">
                      {t.pricing.packages[0].priceRmb.landing} {p.currency.from}
                    </p>
                  )}
                  {typeof pkg.priceRmb === "object" && "daily" in pkg.priceRmb && (
                    <p className="text-sm text-mute">{pkg.priceRmb.daily}</p>
                  )}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-mute">
                    {p.currency.myr}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-accent">
                    {typeof pkg.priceMyr === "object" && "range" in pkg.priceMyr
                      ? pkg.priceMyr.range
                      : typeof pkg.priceMyr === "object" && "landing" in pkg.priceMyr
                      ? pkg.priceMyr.full
                      : typeof pkg.priceMyr === "object" && "daily" in pkg.priceMyr
                      ? pkg.priceMyr.project
                      : ""}
                  </p>
                  {typeof pkg.priceMyr === "object" && "landing" in pkg.priceMyr && (
                    <p className="text-sm text-mute">
                      {t.pricing.packages[0].priceMyr.landing} {p.currency.from}
                    </p>
                  )}
                  {typeof pkg.priceMyr === "object" && "daily" in pkg.priceMyr && (
                    <p className="text-sm text-mute">{pkg.priceMyr.daily}</p>
                  )}
                </div>
              </div>

              <div className="mt-6 border-t border-line pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-mute">
                  {t.work.items[0].fit.split("：")[0]}
                </p>
                <p className="mt-1 text-sm text-ink">{pkg.duration}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-mute">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-line">
                <Link href="/contact" className={`${btnPrimary} w-full`}>
                  {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
