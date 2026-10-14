import Link from "next/link";
import Image from "next/image";
import { Tx } from "@/components/i18n/Tx";

const SCENES = ["租房", "餐饮", "教育", "旅游", "零售", "政务", "医疗", "出行"];

const WECHAT_FEATURES = [
  "微信支付",
  "微信登录",
  "模板消息",
  "附近的小程序",
];

export function MiniprogramSection() {
  return (
    <section id="miniprogram" className="scroll-mt-20 py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-sm font-semibold text-accent"><Tx>数字阵地建设 · 重点业务</Tx></span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              <Tx>微信小程序：微信生态深度整合</Tx>
            </h2>
            <p className="mt-4 text-mute">
              <Tx>全场景覆盖、支付登录消息一体化，支持 uniapp 一次开发多端发布。</Tx>
            </p>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-ink"><Tx>全场景覆盖</Tx></h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {SCENES.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-line bg-raised px-3 py-1.5 text-sm text-ink"
                  >
                    {<Tx>{s}</Tx>}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-ink"><Tx>微信生态集成</Tx></h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {WECHAT_FEATURES.map((f) => (
                  <span
                    key={f}
                    className="rounded-lg bg-green-500/10 px-3 py-1.5 text-sm font-medium text-green-800"
                  >
                    {<Tx>{f}</Tx>}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-mute">
              <Tx>支持 uniapp 开发，可同时发布微信 / 支付宝 / 百度小程序。</Tx>
            </p>
            <Link
              href="/cases?type=miniprogram"
              className="mt-6 inline-flex items-center text-accent font-semibold hover:text-accent"
            >
              <Tx>查看小程序案例（如智慧旅游）</Tx>
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="rounded-2xl border border-line bg-raised p-8">
            <p className="text-sm font-medium text-mute"><Tx>案例参考</Tx></p>
            <p className="mt-2 font-semibold text-ink"><Tx>智慧旅游小程序</Tx></p>
            <p className="mt-1 text-sm text-mute"><Tx>吃住行游购娱全链条覆盖，扫码即可体验</Tx></p>
            <div className="mt-6 aspect-square max-w-[200px] relative overflow-hidden rounded-xl border border-line">
              <Image
                src="/images/product/2.jpg"
                alt="智慧旅游小程序示意"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
