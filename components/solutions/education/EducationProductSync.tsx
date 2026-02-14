import Link from "next/link";

const SYNC = [
  { product: "网站搭建", role: "品牌官网、课程展示、试听与报名", href: "/products#website" },
  { product: "APP 开发", role: "学习 APP、直播与课程、消息推送", href: "/products#app" },
  { product: "微信小程序", role: "招生、报名、学习与消息触达", href: "/products#miniprogram" },
  { product: "uni-app 跨端", role: "一套代码多端（APP/小程序/H5）", href: "/products#uniapp" },
  { product: "AI 工具开发", role: "智能答疑、推荐、学习分析与运营", href: "/products#ai" },
];

export function EducationProductSync() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            与产品能力协同
          </h2>
          <p className="mt-3 text-slate-600">
            教育/培训方案由全栈产品能力支撑，可按业态组合交付
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {SYNC.map((row) => (
            <Link
              key={row.product}
              href={row.href}
              className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm transition hover:border-cyan-200 hover:bg-cyan-50/50"
            >
              <span className="font-medium text-slate-900">{row.product}</span>
              <span className="ml-2 text-slate-600">— {row.role}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
