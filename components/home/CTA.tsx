import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          准备好打造你的数字产品了吗？
        </h2>
        <p className="mt-4 text-lg text-mute">
          免费咨询，获取定制方案与报价
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-ink transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            免费咨询
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-ink px-8 py-4 text-base font-semibold text-ink transition hover:bg-ink hover:text-canvas focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
          >
            获取方案
          </Link>
        </div>
      </div>
    </section>
  );
}
