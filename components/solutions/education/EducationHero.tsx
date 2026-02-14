import Link from "next/link";

export function EducationHero() {
  return (
    <section className="relative border-b border-slate-800 bg-slate-950 px-6 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          解决方案
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          教育/培训数字化，
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
            从招生到交付
          </span>
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          官网与小程序获客、直播录播授课、教务与学员管理、数据驱动续费与转化 — 一站式支撑教培机构增长
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
          >
            免费咨询
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-800/50 px-6 py-3 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
          >
            了解产品能力
          </Link>
        </div>
      </div>
    </section>
  );
}
