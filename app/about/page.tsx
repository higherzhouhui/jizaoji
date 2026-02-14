import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VisionMission } from "@/components/about/VisionMission";
import { Timeline } from "@/components/about/Timeline";
import { CoreTeam } from "@/components/about/CoreTeam";
import { Honors } from "@/components/about/Honors";
import { OfficeEnv } from "@/components/about/OfficeEnv";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "极造极信息科技有限公司 — 公司愿景与使命、发展历程、核心团队、荣誉资质与办公环境",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero />
        <VisionMission />
        <Timeline />
        <CoreTeam />
        <Honors />
        <OfficeEnv />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative border-b border-slate-800 bg-slate-950 px-6 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          关于我们
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          用技术创造价值，用数据赋能未来 — 讲述我们的故事与实力
        </p>
      </div>
    </section>
  );
}
