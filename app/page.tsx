import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ProductCards } from "@/components/home/ProductCards";
import { TechAdvantages } from "@/components/home/TechAdvantages";
import { CaseShowcase } from "@/components/home/CaseShowcase";
import { LogoWall } from "@/components/home/LogoWall";
import { LatestNews } from "@/components/home/LatestNews";
import { CTA } from "@/components/home/CTA";
import { AnimateIn } from "@/components/home/AnimateIn";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "极造极信息科技有限公司",
  description:
    "从 0 到 1 打造数字产品 — 网站搭建、APP 开发、微信小程序、AI 工具一站式交付，懂技术的产品专家，用场景化方案交付增长。",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnimateIn>
          <ProductCards />
        </AnimateIn>
        <AnimateIn>
          <TechAdvantages />
        </AnimateIn>
        <AnimateIn>
          <CaseShowcase />
        </AnimateIn>
        <AnimateIn>
          <LogoWall />
        </AnimateIn>
        <AnimateIn>
          <LatestNews />
        </AnimateIn>
        <AnimateIn>
          <CTA />
        </AnimateIn>
      </main>
      <Footer />
    </>
  );
}
