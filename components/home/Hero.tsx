import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6">
      <div
        className="hero-bg-gradient absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.28),transparent),radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(99,102,241,0.18),transparent),radial-gradient(ellipse_60%_60%_at_20%_80%,rgba(34,211,238,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" aria-hidden />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-cyan-400/90 text-sm font-medium tracking-widest uppercase mb-4">
          极造极信息科技有限公司
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          从 0 到 1，
          <span className="block mt-1 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            打造你的数字产品
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          网站、APP、小程序、AI 工具 — 懂技术的产品专家，用场景化方案交付增长
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            免费咨询
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-800/50 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            获取方案
          </Link>
        </div>
      </div>
    </section>
  );
}
