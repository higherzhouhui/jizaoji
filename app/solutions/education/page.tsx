import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EducationHero } from "@/components/solutions/education/EducationHero";
import { EducationArch } from "@/components/solutions/education/EducationArch";
import {
  EducationModules,
  EducationScenarios,
  EducationCaseStudy,
  EducationCTA,
} from "@/components/solutions/education/EducationModules";
import { EducationProductSync } from "@/components/solutions/education/EducationProductSync";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "教育/培训解决方案",
  description:
    "教育/培训数字化：官网与小程序招生、直播录播授课、教务与学员管理、数据驱动续费与转化，从招生到交付一站式支撑教培机构增长。",
};

export default function EducationSolutionPage() {
  return (
    <>
      <Header />
      <main>
        <EducationHero />
        <EducationArch />
        <EducationModules />
        <EducationScenarios />
        <EducationCaseStudy />
        <EducationProductSync />
        <EducationCTA />
      </main>
      <Footer />
    </>
  );
}
