import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

const SYNC = [
  { product: "网站搭建", role: "独立站 / 品牌官网", href: "/products#website" },
  { product: "APP 开发", role: "品牌 APP 商城", href: "/products#app" },
  { product: "微信小程序", role: "小程序商城 / 门店助手", href: "/products#miniprogram" },
  { product: "uni-app 跨端", role: "一套代码多端覆盖", href: "/products#uniapp" },
  { product: "AI 工具开发", role: "智能推荐、内容生成、销售预测", href: "/products#ai" },
];

export function EcommerceProductSync() {
  return (
    <section className="py-16 sm:py-20 bg-raised border-y border-line">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            <Tx>与产品能力协同</Tx>
          </h2>
          <p className="mt-3 text-mute">
            <Tx>电商解决方案由我们的全栈产品能力支撑，可按需组合交付</Tx>
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-surface overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-raised border-b border-line">
                <th className="px-6 py-4 text-left text-sm font-semibold text-ink">
                  <Tx>产品线</Tx>
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ink">
                  <Tx>在电商方案中的体现</Tx>
                </th>
              </tr>
            </thead>
            <tbody>
              {SYNC.map((row) => (
                <tr key={row.product} className="border-b border-line last:border-0">
                  <td className="px-6 py-4">
                    <Link
                      href={row.href}
                      className="font-medium text-accent hover:text-accent"
                    >
                      {<Tx>{row.product}</Tx>}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-mute">{<Tx>{row.role}</Tx>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
