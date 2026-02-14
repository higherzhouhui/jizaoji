import Link from "next/link";

export function JobsCTA() {
  return (
    <section className="py-20 sm:py-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          期待与你一起打造数字产品
        </h2>
        <p className="mt-4 text-slate-400">
          投递简历或咨询职位，我们会尽快与你联系
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
          >
            投递简历 / 咨询职位
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-8 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
          >
            了解我们
          </Link>
        </div>
      </div>
    </section>
  );
}
