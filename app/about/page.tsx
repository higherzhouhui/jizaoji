import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutMeProfile } from "@/components/about/AboutMeProfile";
import { ClosingBand } from "@/components/home/ClosingBand";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { Tx } from "@/components/i18n/Tx";

export const metadata: Metadata = buildPageMetadata({
  title: "关于我",
  description:
    "10 年前端独立开发者，吉隆坡，中英双语。专注 React、Next.js、Vue 和微信小程序开发。",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero />
        <AboutMeProfile />
        <ClosingBand />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          <Tx>关于我</Tx>
        </h1>
        <p className="mt-4 text-lg text-mute">
          <Tx>10 年前端独立开发者 · 吉隆坡 · 中英双语 · 2–4 周交付</Tx>
        </p>
      </div>
    </section>
  );
}
