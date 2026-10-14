import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

export function TechHero() {
  return (
    <section className="relative border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          <Tx>技术优势</Tx>
        </h1>
        <p className="mt-6 text-lg text-mute max-w-2xl mx-auto">
          <Tx>全栈开发、跨平台能力、规范流程与质量保障 — 用技术深度支撑产品交付</Tx>
        </p>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center text-accent font-semibold hover:text-accent"
        >
          <Tx>了解研发团队</Tx>
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
