import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VisionMission } from "@/components/about/VisionMission";
import { Timeline } from "@/components/about/Timeline";
import { CoreTeam } from "@/components/about/CoreTeam";
import { Honors } from "@/components/about/Honors";
import { OfficeEnv } from "@/components/about/OfficeEnv";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { Tx } from "@/components/i18n/Tx";

export const metadata: Metadata = buildPageMetadata({
  title: "关于我们",
  description:
    "极造极信息科技有限公司 — 愿景与使命、发展历程、核心团队、荣誉资质与办公环境，用技术创造价值、用数据赋能未来。",
  path: "/about",
});

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
    <section className="relative border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          <Tx>关于我们</Tx>
        </h1>
        <p className="mt-4 text-lg text-mute">
          <Tx>用技术创造价值，用数据赋能未来 — 讲述我们的故事与实力</Tx>
        </p>
      </div>
    </section>
  );
}
