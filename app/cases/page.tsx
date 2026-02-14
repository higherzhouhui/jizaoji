import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CasesHero } from "@/components/cases/CasesHero";
import { CaseGrid } from "@/components/cases/CaseGrid";
import { FeaturedCases } from "@/components/cases/FeaturedCases";
import { CasesCTA } from "@/components/cases/CasesCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "案例展示",
  description:
    "极造极 — 网站搭建、APP 开发、微信小程序、AI 工具等精选案例，客户背景、解决方案、实施效果，用事实与数据说话。",
};

export default function CasesPage() {
  return (
    <>
      <Header />
      <main>
        <CasesHero />
        <CaseGrid />
        <FeaturedCases />
        <CasesCTA />
      </main>
      <Footer />
    </>
  );
}
