import Link from "next/link";

const PRODUCTS = [
  {
    type: "独立站 / 品牌官网",
    scene: "品牌 DTC（直接面向消费者）",
    features: ["品牌形象展示", "SEO 优化", "会员体系", "数据分析"],
  },
  {
    type: "小程序商城",
    scene: "微信生态获客",
    features: ["拼团 / 秒杀 / 分销", "社交裂变", "微信支付", "模板消息"],
  },
  {
    type: "APP 商城",
    scene: "重度用户运营",
    features: ["个性化推荐", "Push 推送", "离线购物", "LBS 定位"],
  },
  {
    type: "跨端应用（uniapp）",
    scene: "多平台覆盖",
    features: ["一套代码", "iOS / Android / 各家小程序", "统一运营"],
  },
];

export function ModuleFrontend() {
  return (
    <section id="module-front" className="scroll-mt-20 py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold text-cyan-600">开发层</span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              电商前端阵地
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl">
              多形态销售触点，移动优先设计与转化率优化（购物车路径、一键下单等），支持美妆、服饰、生鲜、3C 等模板与扫码预览 Demo。
            </p>
          </div>
          <Link
            href="/products"
            className="shrink-0 text-cyan-600 font-semibold hover:text-cyan-700"
          >
            查看产品能力 →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse rounded-xl border border-slate-200">
            <thead>
              <tr className="bg-slate-50">
                <th className="border-b border-slate-200 px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  产品形态
                </th>
                <th className="border-b border-slate-200 px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  适用场景
                </th>
                <th className="border-b border-slate-200 px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  核心功能
                </th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((row) => (
                <tr key={row.type} className="border-b border-slate-100 last:border-0">
                  <td className="px-6 py-4 font-medium text-slate-900">{row.type}</td>
                  <td className="px-6 py-4 text-slate-600">{row.scene}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {row.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-700"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
