const ITEMS = [
  {
    title: "库存通",
    subtitle: "线上线下库存实时共享",
    scene: "线上旗舰店下单，就近门店发货或门店自提",
    value: "解决「线上爆款缺货、线下门店积压」的两盘货问题",
    case: "某服饰品牌通过门店发货，双 11 当天处理近 2.2 万订单",
  },
  {
    title: "订单通",
    subtitle: "多渠道订单统一处理",
    points: [
      "对接淘宝/天猫、京东、抖音小店、快手小店",
      "自动拆单、合并订单、退换货流程管理",
      "智能分仓：匹配最近仓库发货，降低物流成本",
    ],
  },
  {
    title: "会员通",
    subtitle: "全域会员统一运营",
    value: "构建全域会员画像，积分、优惠券等组合营销精准触达",
    metric: "客户复购率平均提升 25%",
  },
];

export function ModuleMiddle() {
  return (
    <section id="module-middle" className="scroll-mt-20 py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <span className="text-sm font-semibold text-cyan-600">连接层</span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            全渠道融合中台
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            云原生 + 微服务架构，支持高并发；队列调度分散订单压力，支持万人同时抢购；敏感信息加密，符合 PCI DSS 等规范。
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-sm text-cyan-600">{item.subtitle}</p>
              {"scene" in item && (
                <p className="mt-4 text-sm text-slate-600">
                  <span className="font-medium text-slate-700">场景：</span> {item.scene}
                </p>
              )}
              {"value" in item && (
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-medium text-slate-700">价值：</span> {item.value}
                </p>
              )}
              {"points" in item && (
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {item.points!.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-cyan-500">•</span> {p}
                    </li>
                  ))}
                </ul>
              )}
              {"case" in item && item.case && (
                <p className="mt-4 text-sm text-slate-500 border-t border-slate-100 pt-4">
                  案例：{item.case}
                </p>
              )}
              {"metric" in item && item.metric && (
                <p className="mt-4 text-sm font-medium text-cyan-600">{item.metric}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
