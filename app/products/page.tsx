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
import { Tx } from "@/components/i18n/Tx";

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
    <section className="relative border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          <Tx>产品与服务</Tx>
        </h1>
        <p className="mt-4 text-lg text-mute">
          <Tx>按场景与能力封装，从网站到 APP、小程序到 AI，一站式数字产品交付</Tx>
        </p>
      </div>
    </section>
  );
}

function ProductsCTA() {
  return (
    <section className="py-20 sm:py-24 bg-raised">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          <Tx>需要定制方案？</Tx>
        </h2>
        <p className="mt-4 text-mute">
          <Tx>告诉我们你的场景，我们提供从需求到上线的全流程方案</Tx>
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-ink transition hover:opacity-90"
        >
          <Tx>免费咨询</Tx>
        </Link>
      </div>
    </section>
  );
}
