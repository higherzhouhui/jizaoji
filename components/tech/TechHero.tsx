import Link from "next/link";

export function TechHero() {
  return (
    <section className="relative border-b border-slate-800 bg-slate-950 px-6 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          技术优势
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          全栈开发、跨平台能力、规范流程与质量保障 — 用技术深度支撑产品交付
        </p>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300"
        >
          了解研发团队
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
