import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TechHero } from "@/components/tech/TechHero";
import { TechStack } from "@/components/tech/TechStack";
import { DevProcess } from "@/components/tech/DevProcess";
import { QualityAssurance } from "@/components/tech/QualityAssurance";
import { TechCTA } from "@/components/tech/TechCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "技术优势",
  description:
    "极造极 — 技术栈（前端/后端/跨端/AI）、开发流程、质量保障与研发团队，用技术深度支撑产品交付。",
};

export default function TechPage() {
  return (
    <>
      <Header />
      <main>
        <TechHero />
        <TechStack />
        <DevProcess />
        <QualityAssurance />
        <TechCTA />
      </main>
      <Footer />
    </>
  );
}
