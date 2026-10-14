import { Tx } from "@/components/i18n/Tx";
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
    <section className="py-20 sm:py-24 bg-raised border-b border-line">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>解决方案架构</Tx>
          </h2>
          <p className="mt-4 text-mute">
            <Tx>四大模块覆盖「线上获客 → 到店体验 → 会员留存 → 连锁管理」全链路</Tx>
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
