import Link from "next/link";

const SYNC = [
  { product: "网站搭建", role: "品牌官网、预订与展示", href: "/products#website" },
  { product: "APP 开发", role: "品牌 APP、会员与订单", href: "/products#app" },
  { product: "微信小程序", role: "点餐、外卖、排队、会员、核销", href: "/products#miniprogram" },
  { product: "uni-app 跨端", role: "一套代码多端（小程序/APP/H5）", href: "/products#uniapp" },
  { product: "AI 工具开发", role: "智能推荐、营销触达、经营分析", href: "/products#ai" },
];

export function FoodProductSync() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            与产品能力协同
          </h2>
          <p className="mt-3 text-slate-600">
            餐饮与生活服务方案由全栈产品能力支撑，可按业态组合交付
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
