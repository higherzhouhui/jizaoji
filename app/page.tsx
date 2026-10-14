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
  title: "极造极信息科技有限公司",
  description:
    "极造极，重庆。官网、微信小程序、手机应用、AI 工具。范围先写下来，做到哪给你看哪，做完找得到人。",
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
