const MODULES = [
  {
    id: "online",
    name: "线上触点",
    sub: "获客与履约",
    desc: "小程序/APP 点餐、外卖对接、预订排号、到店核销",
  },
  {
    id: "store",
    name: "到店体验",
    sub: "运营层",
    desc: "智能排队、自助点餐、聚合收银、会员识别",
  },
  {
    id: "member",
    name: "会员与营销",
    sub: "增长层",
    desc: "私域运营、积分优惠券、裂变拉新、复购唤醒",
  },
  {
    id: "multi",
    name: "多门店与供应链",
    sub: "管理中台",
    desc: "多门店统一、进销存、数据看板、连锁管控",
  },
];

export function FoodArch() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            解决方案架构
          </h2>
          <p className="mt-4 text-slate-600">
            四大模块覆盖「线上获客 → 到店体验 → 会员留存 → 连锁管理」全链路
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <a
              key={m.id}
              href={`#module-${m.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-lg font-bold text-emerald-600">
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
