import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustHero } from "@/components/home/TrustHero";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { HomeStories } from "@/components/home/HomeStories";
import { ProcessSection } from "@/components/home/ProcessSection";
import { EngagementSection } from "@/components/home/EngagementSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ClosingBand } from "@/components/home/ClosingBand";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "独立开发者 Zhou Hui - 吉隆坡 10 年前端",
  description:
    "吉隆坡独立开发者，10 年前端经验。官网、小程序、应用、AI 工具，2-4 周交付。中英双语，透明报价。WhatsApp/微信联系。",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <TrustHero />
        <ServiceGrid />
        <HomeStories />
        <ProcessSection />
        <EngagementSection />
        <FaqSection />
        <ClosingBand />
      </main>
      <Footer />
    </>
  );
}
