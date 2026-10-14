import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

export function EcommerceHero() {
  return (
    <section className="relative border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          <Tx>解决方案</Tx>
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <Tx>全链路电商数字化，</Tx>
          <span className="block mt-2 bg-gradient-to-r from-accent to-brass bg-clip-text text-transparent">
            <Tx>从技术开发到商业增长</Tx>
          </span>
        </h1>
        <p className="mt-6 text-lg text-mute max-w-2xl mx-auto leading-relaxed">
          <Tx>帮助零售企业从 0 到 1 搭建数字化销售阵地，打通前中后台数据链路，实现全渠道增长</Tx>
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-ink transition hover:opacity-90"
          >
            <Tx>免费咨询</Tx>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-lg border border-line bg-surface/70 px-6 py-3 text-base font-semibold text-ink transition hover:border-ink/30 hover:bg-raised"
          >
            <Tx>了解产品能力</Tx>
          </Link>
        </div>
      </div>
    </section>
  );
}
