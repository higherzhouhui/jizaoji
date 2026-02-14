import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductArchitecture } from "@/components/products/ProductArchitecture";
import { WebsiteSection } from "@/components/products/WebsiteSection";
import { AppSection } from "@/components/products/AppSection";
import { MiniprogramSection } from "@/components/products/MiniprogramSection";
import { UniappSection } from "@/components/products/UniappSection";
import { AiToolsSection } from "@/components/products/AiToolsSection";
import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "产品与服务",
  description:
    "数字阵地建设、跨端开发引擎、智能应用工场 — 网站搭建、APP 开发、微信小程序、uni-app、AI 工具开发，按场景与能力一站式交付。",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsHero />
        <ProductArchitecture />
        <WebsiteSection />
        <AppSection />
        <MiniprogramSection />
        <UniappSection />
        <AiToolsSection />
        <ProductsCTA />
      </main>
      <Footer />
    </>
  );
}

function ProductsHero() {
  return (
    <section className="relative border-b border-slate-800 bg-slate-950 px-6 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          产品与服务
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          按场景与能力封装，从网站到 APP、小程序到 AI，一站式数字产品交付
        </p>
      </div>
    </section>
  );
}

function ProductsCTA() {
  return (
    <section className="py-20 sm:py-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          需要定制方案？
        </h2>
        <p className="mt-4 text-slate-400">
          告诉我们你的场景，我们提供从需求到上线的全流程方案
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
        >
          免费咨询
        </Link>
      </div>
    </section>
  );
}
