import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EcommerceHero } from "@/components/solutions/ecommerce/EcommerceHero";
import { SolutionArch } from "@/components/solutions/ecommerce/SolutionArch";
import { ModuleFrontend } from "@/components/solutions/ecommerce/ModuleFrontend";
import { ModuleMiddle } from "@/components/solutions/ecommerce/ModuleMiddle";
import { ModuleStore } from "@/components/solutions/ecommerce/ModuleStore";
import { ModuleAI } from "@/components/solutions/ecommerce/ModuleAI";
import { Scenarios } from "@/components/solutions/ecommerce/Scenarios";
import { CaseStudy } from "@/components/solutions/ecommerce/CaseStudy";
import { EcommerceProductSync } from "@/components/solutions/ecommerce/EcommerceProductSync";
import { EcommerceCTA } from "@/components/solutions/ecommerce/EcommerceCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "电商/零售解决方案",
  description:
    "全链路电商数字化服务商：电商前端阵地、全渠道融合中台、门店数字化升级、AI智能应用，从技术开发到商业增长。",
};

export default function EcommerceSolutionPage() {
  return (
    <>
      <Header />
      <main>
        <EcommerceHero />
        <SolutionArch />
        <ModuleFrontend />
        <ModuleMiddle />
        <ModuleStore />
        <ModuleAI />
        <Scenarios />
        <CaseStudy />
        <EcommerceProductSync />
        <EcommerceCTA />
      </main>
      <Footer />
    </>
  );
}
