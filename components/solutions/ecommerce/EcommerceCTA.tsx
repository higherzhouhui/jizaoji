import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

const SLOGANS = [
  { label: "品牌 DTC", text: "打造你的专属品牌商城" },
  { label: "全渠道融合", text: "让每一件商品都能被看见、被买到" },
  { label: "门店数字化", text: "用技术赋能实体零售" },
  { label: "AI 电商", text: "让生意更智能" },
];

export function EcommerceCTA() {
  return (
    <section className="py-20 sm:py-24 bg-raised">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          <Tx>全链路电商数字化，从技术开发到商业增长</Tx>
        </h2>
        <p className="mt-4 text-mute">
          <Tx>根据场景选择你的起点</Tx>
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {SLOGANS.map((s) => (
            <span
              key={s.label}
              className="rounded-lg border border-line bg-surface/70 px-4 py-2 text-sm text-mute"
            >
              <span className="font-medium text-ink">{<Tx>{s.label}</Tx>}</span>
              <span className="ml-2 text-mute">— {<Tx>{s.text}</Tx>}</span>
            </span>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-ink transition hover:opacity-90"
          >
            <Tx>免费咨询 · 获取方案</Tx>
          </Link>
        </div>
      </div>
    </section>
  );
}
