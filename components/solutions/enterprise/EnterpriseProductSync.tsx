import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

const SYNC = [
  { product: "网站搭建", role: "企业官网、门户与展示", href: "/products#website" },
  { product: "APP 开发", role: "移动办公 APP、审批与协作", href: "/products#app" },
  { product: "微信小程序", role: "轻应用、审批/打卡/汇报", href: "/products#miniprogram" },
  { product: "uni-app 跨端", role: "一套代码多端（APP/小程序/H5）", href: "/products#uniapp" },
  { product: "AI 工具开发", role: "智能助手、知识检索、流程优化", href: "/products#ai" },
];

export function EnterpriseProductSync() {
  return (
    <section className="py-16 sm:py-20 bg-surface border-y border-line">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            <Tx>与产品能力协同</Tx>
          </h2>
          <p className="mt-3 text-mute">
            <Tx>企业办公方案由全栈产品能力支撑，可集成、可扩展</Tx>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {SYNC.map((row) => (
            <Link
              key={row.product}
              href={row.href}
              className="rounded-xl border border-line bg-raised px-5 py-3 text-sm transition hover:border-accent/40 hover:bg-accent/10"
            >
              <span className="font-medium text-ink">{<Tx>{row.product}</Tx>}</span>
              <span className="ml-2 text-mute">— {<Tx>{row.role}</Tx>}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
