import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

export function EducationHero() {
  return (
    <section className="relative border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          <Tx>解决方案</Tx>
        </p>
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <Tx>教育/培训数字化，</Tx>
          <span className="mt-2 block bg-gradient-to-r from-accent to-brass bg-clip-text text-transparent">
            <Tx>从招生到交付</Tx>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-mute [overflow-wrap:anywhere]">
          <Tx>官网与小程序获客、直播录播授课、教务与学员管理、数据驱动续费与转化 — 一站式支撑教培机构增长</Tx>
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-center text-base font-semibold text-accent-ink transition hover:opacity-90 whitespace-normal text-pretty"
          >
            <Tx>免费咨询</Tx>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-lg border border-line bg-surface/70 px-6 py-3 text-center text-base font-semibold text-ink transition hover:border-ink/30 hover:bg-raised whitespace-normal text-pretty"
          >
            <Tx>了解产品能力</Tx>
          </Link>
        </div>
      </div>
    </section>
  );
}
