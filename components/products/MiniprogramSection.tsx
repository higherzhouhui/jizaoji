import Link from "next/link";
import Image from "next/image";

const SCENES = ["租房", "餐饮", "教育", "旅游", "零售", "政务", "医疗", "出行"];

const WECHAT_FEATURES = [
  "微信支付",
  "微信登录",
  "模板消息",
  "附近的小程序",
];

export function MiniprogramSection() {
  return (
    <section id="miniprogram" className="scroll-mt-20 py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-sm font-semibold text-cyan-600">数字阵地建设 · 重点业务</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              微信小程序：微信生态深度整合
            </h2>
            <p className="mt-4 text-slate-600">
              全场景覆盖、支付登录消息一体化，支持 uniapp 一次开发多端发布。
            </p>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-900">全场景覆盖</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {SCENES.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-900">微信生态集成</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {WECHAT_FEATURES.map((f) => (
                  <span
                    key={f}
                    className="rounded-lg bg-green-500/10 px-3 py-1.5 text-sm font-medium text-green-800"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              支持 uniapp 开发，可同时发布微信 / 支付宝 / 百度小程序。
            </p>
            <Link
              href="/cases?type=miniprogram"
              className="mt-6 inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700"
            >
              查看小程序案例（如智慧旅游）
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-medium text-slate-500">案例参考</p>
            <p className="mt-2 font-semibold text-slate-900">智慧旅游小程序</p>
            <p className="mt-1 text-sm text-slate-600">吃住行游购娱全链条覆盖，扫码即可体验</p>
            <div className="mt-6 aspect-square max-w-[200px] relative overflow-hidden rounded-xl border border-slate-200">
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
