import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          准备好打造你的数字产品了吗？
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          免费咨询，获取定制方案与报价
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
          >
            免费咨询
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-slate-900 px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            获取方案
          </Link>
        </div>
      </div>
    </section>
  );
}
