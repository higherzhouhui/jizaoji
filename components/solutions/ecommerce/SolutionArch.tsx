import { Tx } from "@/components/i18n/Tx";
const MODULES = [
  {
    id: "front",
    name: "电商前端阵地",
    sub: "开发层",
    desc: "独立站、小程序、APP、跨端 — 多形态销售触点",
  },
  {
    id: "middle",
    name: "全渠道融合中台",
    sub: "连接层",
    desc: "库存通、订单通、会员通 — 一盘货、一套数据",
  },
  {
    id: "store",
    name: "门店数字化升级",
    sub: "体验层",
    desc: "云货架、自提/发货、智慧收银、AI 试穿",
  },
  {
    id: "ai",
    name: "AI 智能应用",
    sub: "增值层",
    desc: "智能推荐、内容生成、销售预测、智能客服",
  },
];

export function SolutionArch() {
  return (
    <section className="py-20 sm:py-24 bg-raised border-b border-line">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>解决方案架构</Tx>
          </h2>
          <p className="mt-4 text-mute">
            <Tx>四大核心模块，形成从触达到履约的数字化零售闭环</Tx>
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <a
              key={m.id}
              href={`#module-${m.id}`}
              className="group rounded-2xl border border-line bg-surface p-6 shadow-sm transition hover:border-accent/40 hover:shadow-lg"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-lg font-bold text-accent">
                {i + 1}
              </span>
              <p className="mt-4 text-sm font-medium text-mute">{<Tx>{m.sub}</Tx>}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{<Tx>{m.name}</Tx>}</h3>
              <p className="mt-2 text-sm text-mute">{<Tx>{m.desc}</Tx>}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
