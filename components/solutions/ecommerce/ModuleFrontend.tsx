import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

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
    <section id="module-front" className="scroll-mt-20 py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold text-accent"><Tx>开发层</Tx></span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              <Tx>电商前端阵地</Tx>
            </h2>
            <p className="mt-4 text-mute max-w-2xl">
              <Tx>多形态销售触点，移动优先设计与转化率优化（购物车路径、一键下单等），支持美妆、服饰、生鲜、3C 等模板与扫码预览 Demo。</Tx>
            </p>
          </div>
          <Link
            href="/products"
            className="shrink-0 text-accent font-semibold hover:text-accent"
          >
            <Tx>查看产品能力 →</Tx>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse rounded-xl border border-line">
            <thead>
              <tr className="bg-raised">
                <th className="border-b border-line px-6 py-4 text-left text-sm font-semibold text-ink">
                  <Tx>产品形态</Tx>
                </th>
                <th className="border-b border-line px-6 py-4 text-left text-sm font-semibold text-ink">
                  <Tx>适用场景</Tx>
                </th>
                <th className="border-b border-line px-6 py-4 text-left text-sm font-semibold text-ink">
                  <Tx>核心功能</Tx>
                </th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((row) => (
                <tr key={row.type} className="border-b border-line last:border-0">
                  <td className="px-6 py-4 font-medium text-ink">{<Tx>{row.type}</Tx>}</td>
                  <td className="px-6 py-4 text-mute">{<Tx>{row.scene}</Tx>}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {row.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                        >
                          {<Tx>{f}</Tx>}
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
