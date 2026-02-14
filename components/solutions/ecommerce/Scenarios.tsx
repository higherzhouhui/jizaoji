import Link from "next/link";

const SCENARIOS = [
  {
    title: "品牌 DTC 转型",
    tagline: "独立站 + 小程序",
    profile: "传统品牌商，希望摆脱平台依赖，建立私域流量",
    solution: "品牌官网商城 + 微信小程序 + 会员积分体系",
    value: "单客年消费额增长 15%",
  },
  {
    title: "线上线下融合",
    tagline: "全渠道中台",
    profile: "拥有实体门店的连锁品牌，线上线下两盘货、数据不通",
    solution: "全渠道中台（库存通 + 订单通 + 会员通）+ 门店数字化改造",
    value: "缺货率降低 20%，库存周转率提升 30%",
  },
  {
    title: "跨境电商 / 独立站卖家",
    tagline: "独立站 + 多平台订单",
    profile: "亚马逊等平台卖家，希望拓展独立站渠道",
    solution: "独立站搭建 + 多平台订单统一管理 + AI 商品内容生成",
    value: "错发率从 15% 降至接近零，履约成本降低",
  },
  {
    title: "生鲜 / 即时零售",
    tagline: "小程序 + 即时履约",
    profile: "社区生鲜店、前置仓模式零售商",
    solution: "小程序商城 + 门店拣货系统 + 即时配送对接",
    value: "订单履约率从 75% 提升至 92%",
  },
];

export function Scenarios() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            典型应用场景
          </h2>
          <p className="mt-4 text-slate-600">
            按行业与规模封装，快速匹配你的需求
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {SCENARIOS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/30 p-6 transition hover:border-cyan-200 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-700">
                  {s.tagline}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                <span className="font-medium text-slate-700">客户画像：</span>
                {s.profile}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">解决方案：</span>
                {s.solution}
              </p>
              <p className="mt-4 text-sm font-semibold text-cyan-600">交付价值：{s.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700"
          >
            根据我的场景获取方案
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </p>
      </div>
    </section>
  );
}
