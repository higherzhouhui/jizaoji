import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingPackages } from "@/components/pricing/PricingPackages";
import { PricingMaintenance } from "@/components/pricing/PricingMaintenance";
import { PricingNotes } from "@/components/pricing/PricingNotes";
import { ClosingBand } from "@/components/home/ClosingBand";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "服务报价",
  description:
    "极造极的公开透明报价：落地页/官网、小程序/H5、管理后台。国内/马来西亚双币种，2-4周交付。",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <PricingPackages />
        <PricingMaintenance />
        <PricingNotes />
        <ClosingBand />
      </main>
      <Footer />
    </>
  );
}
