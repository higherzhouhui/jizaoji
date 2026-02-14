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
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            解决方案架构
          </h2>
          <p className="mt-4 text-slate-600">
            四大核心模块，形成从触达到履约的数字化零售闭环
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <a
              key={m.id}
              href={`#module-${m.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-lg font-bold text-cyan-600">
                {i + 1}
              </span>
              <p className="mt-4 text-sm font-medium text-slate-500">{m.sub}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{m.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{m.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
