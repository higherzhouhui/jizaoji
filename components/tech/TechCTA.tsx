import Link from "next/link";

export function TechCTA() {
  return (
    <section className="py-20 sm:py-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          技术驱动交付，质量保障上线
        </h2>
        <p className="mt-4 text-slate-400">
          有技术栈或流程上的疑问？欢迎交流
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
