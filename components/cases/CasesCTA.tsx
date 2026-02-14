import Link from "next/link";

export function CasesCTA() {
  return (
    <section className="py-20 sm:py-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          有类似需求？获取定制方案
        </h2>
        <p className="mt-4 text-slate-400">
          告诉我们你的行业与场景，我们提供从需求到上线的全流程方案
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
        >
          免费咨询
        </Link>
      </div>
    </section>
  );
}
