import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JobsHero } from "@/components/jobs/JobsHero";
import { JobsCulture } from "@/components/jobs/JobsCulture";
import { JobsPositions } from "@/components/jobs/JobsPositions";
import { JobsBenefits } from "@/components/jobs/JobsBenefits";
import { JobsOffice } from "@/components/jobs/JobsOffice";
import { JobsCTA } from "@/components/jobs/JobsCTA";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "加入我们",
  description:
    "极造极 — 热招职位（前端/后端/小程序/AI/产品）、技术氛围、福利待遇与办公环境，期待与你一起打造数字产品。",
  path: "/jobs",
});

export default function JobsPage() {
  return (
    <>
      <Header />
      <main>
        <JobsHero />
        <JobsCulture />
        <JobsPositions />
        <JobsBenefits />
        <JobsOffice />
        <JobsCTA />
      </main>
      <Footer />
    </>
  );
}
