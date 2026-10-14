import { Tx } from "@/components/i18n/Tx";
const ITEMS = [
  {
    title: "云货架",
    desc: "门店缺色断码时，店员通过 App 展示线上商品，顾客扫码下单。突破门店面积限制，不增库存大幅增加可售范围。",
    case: "卡西欧全渠道智慧门店，销售额高出普通门店 50% 以上",
  },
  {
    title: "门店自提 / 门店发货",
    desc: "线上下单、门店自提带来二次销售机会；线上下单、门店发货盘活库存，实现同城配送当日达。",
  },
  {
    title: "数字化收银 / 自助结账",
    desc: "结合 IoT 设备，收银称重一体化；AI 防盗、区域报警、7×24 小时云值守。",
  },
  {
    title: "虚拟试穿 / 试用（AI 能力）",
    desc: "时尚品类 AI 虚拟试穿降低退货率；家居品类 AR 场景还原提升购买信心。",
  },
];

export function ModuleStore() {
  return (
    <section id="module-store" className="scroll-mt-20 py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <span className="text-sm font-semibold text-accent"><Tx>体验层</Tx></span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>门店数字化升级</Tx>
          </h2>
          <p className="mt-4 text-mute max-w-2xl">
            <Tx>针对有实体门店的零售客户，提供 O2O 融合能力，用技术赋能实体零售</Tx>
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-raised/60 p-6"
            >
              <h3 className="text-lg font-semibold text-ink">{<Tx>{item.title}</Tx>}</h3>
              <p className="mt-3 text-mute">{<Tx>{item.desc}</Tx>}</p>
              {"case" in item && item.case && (
                <p className="mt-4 text-sm text-mute"><Tx>案例：</Tx>{<Tx>{item.case}</Tx>}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
