import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

export function FoodHero() {
  return (
    <section className="relative border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          <Tx>解决方案</Tx>
        </p>
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <Tx>餐饮与生活服务数字化，</Tx>
          <span className="mt-2 block bg-gradient-to-r from-accent to-brass bg-clip-text text-transparent">
            <Tx>从到店到到家</Tx>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-mute [overflow-wrap:anywhere]">
          <Tx>小程序点餐、外卖对接、排队取号、会员营销、多门店管理 — 一站式提升坪效与复购</Tx>
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-center text-base font-semibold text-accent-ink transition hover:opacity-90 whitespace-normal text-pretty"
          >
            <Tx>免费咨询</Tx>
          </Link>
          <Link
            href="/products#miniprogram"
            className="inline-flex items-center justify-center rounded-lg border border-line bg-surface/70 px-6 py-3 text-center text-base font-semibold text-ink transition hover:border-ink/30 hover:bg-raised whitespace-normal text-pretty"
          >
            <Tx>了解小程序能力</Tx>
          </Link>
        </div>
      </div>
    </section>
  );
}
