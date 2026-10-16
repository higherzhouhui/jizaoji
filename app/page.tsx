import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustHero } from "@/components/home/TrustHero";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { FullProcessSection } from "@/components/home/FullProcessSection";
import { HomeStories } from "@/components/home/HomeStories";
import { ProcessSection } from "@/components/home/ProcessSection";
import { EngagementSection } from "@/components/home/EngagementSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ClosingBand } from "@/components/home/ClosingBand";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "独立全栈开发者 - 吉隆坡 10 年 - 全流程一站式服务",
  description:
    "10 年全栈独立开发者 · 吉隆坡 · 可独立完成中小型项目：产品→设计→前后端开发→测试→部署上线→安全监控，全流程一站式服务。中英双语，透明报价，2-4 周交付。",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <TrustHero />
        <ServiceGrid />
        <FullProcessSection />
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
