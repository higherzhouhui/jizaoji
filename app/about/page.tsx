import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutMeProfile } from "@/components/about/AboutMeProfile";
import { AboutPageHero } from "@/components/about/AboutPageHero";
import { ClosingBand } from "@/components/home/ClosingBand";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

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
        <AboutPageHero />
        <AboutMeProfile />
        <ClosingBand />
      </main>
      <Footer />
    </>
  );
}
