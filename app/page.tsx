import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ProductCards } from "@/components/home/ProductCards";
import { TechAdvantages } from "@/components/home/TechAdvantages";
import { CaseShowcase } from "@/components/home/CaseShowcase";
import { LogoWall } from "@/components/home/LogoWall";
import { LatestNews } from "@/components/home/LatestNews";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductCards />
        <TechAdvantages />
        <CaseShowcase />
        <LogoWall />
        <LatestNews />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
