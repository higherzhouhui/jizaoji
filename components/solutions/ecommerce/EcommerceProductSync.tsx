import Link from "next/link";

const SYNC = [
  { product: "网站搭建", role: "独立站 / 品牌官网", href: "/products#website" },
  { product: "APP 开发", role: "品牌 APP 商城", href: "/products#app" },
  { product: "微信小程序", role: "小程序商城 / 门店助手", href: "/products#miniprogram" },
  { product: "uni-app 跨端", role: "一套代码多端覆盖", href: "/products#uniapp" },
  { product: "AI 工具开发", role: "智能推荐、内容生成、销售预测", href: "/products#ai" },
];

export function EcommerceProductSync() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            与产品能力协同
          </h2>
          <p className="mt-3 text-slate-600">
            电商解决方案由我们的全栈产品能力支撑，可按需组合交付
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  产品线
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  在电商方案中的体现
                </th>
              </tr>
            </thead>
            <tbody>
              {SYNC.map((row) => (
                <tr key={row.product} className="border-b border-slate-100 last:border-0">
                  <td className="px-6 py-4">
                    <Link
                      href={row.href}
                      className="font-medium text-cyan-600 hover:text-cyan-700"
                    >
                      {row.product}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
