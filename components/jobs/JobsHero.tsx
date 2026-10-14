import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

export function JobsHero() {
  return (
    <section className="relative border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          <Tx>加入我们</Tx>
        </h1>
        <p className="mt-6 text-lg text-mute max-w-2xl mx-auto">
          <Tx>与我们一起从 0 到 1 打造数字产品，用技术创造价值</Tx>
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-ink transition hover:opacity-90"
        >
          <Tx>投递简历 / 咨询职位</Tx>
        </Link>
      </div>
    </section>
  );
}
