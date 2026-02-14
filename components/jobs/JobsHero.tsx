import Link from "next/link";

export function JobsHero() {
  return (
    <section className="relative border-b border-slate-800 bg-slate-950 px-6 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          加入我们
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          与我们一起从 0 到 1 打造数字产品，用技术创造价值
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
        >
          投递简历 / 咨询职位
        </Link>
      </div>
    </section>
  );
}
