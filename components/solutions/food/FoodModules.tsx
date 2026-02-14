import Link from "next/link";

const ONLINE_ITEMS = [
  {
    title: "小程序/APP 点餐",
    desc: "顾客到店扫码点餐、预点餐到店即上，减少等位与人工差错；支持加菜、催单、结账一体化。",
  },
  {
    title: "外卖与第三方对接",
    desc: "对接美团、饿了么等平台订单，统一接单与出餐管理；支持自建外卖、自有配送与平台配送并行。",
  },
  {
    title: "预订与排队取号",
    desc: "线上取号、到号提醒；包厢/桌台预订、定金锁位，提升翻台率与客户体验。",
  },
  {
    title: "到店核销与验券",
    desc: "团购/优惠券/次卡到店核销，与收银、会员系统打通，防止套利与漏单。",
  },
];

const STORE_ITEMS = [
  { title: "智能排队叫号", desc: "大屏/语音叫号、过号重排、多队列（堂食/外卖/自提），降低前台压力。" },
  { title: "自助点餐与 Kiosk", desc: "自助点餐机、桌面码点餐，支持多语言与多规格，减少人工成本。" },
  { title: "聚合收银与分账", desc: "微信/支付宝/银联/会员余额聚合；支持分账、对账、发票一体化。" },
  { title: "会员到店识别", desc: "扫码或手机号识别会员，自动推送专属优惠与积分，提升客单价与复购。" },
];

const MEMBER_ITEMS = [
  { title: "私域与企微/公众号", desc: "企微加好友、公众号触达，将公域流量沉淀为可运营的私域会员。" },
  { title: "积分、优惠券、储值", desc: "积分兑换、满减/折扣券、储值卡与次卡，组合营销提升复购与锁客。" },
  { title: "裂变与拉新", desc: "拼团、老带新、分享有礼等玩法，低成本拉新并激活沉默用户。" },
  { title: "复购唤醒", desc: "基于消费频次与偏好，智能推送优惠与上新，提高到店频次。" },
];

const MULTI_ITEMS = [
  { title: "多门店统一管理", desc: "总部看板、门店权限、标准化 SOP；营业数据、品控、排班集中管控。" },
  { title: "进销存与采购", desc: "原料/耗材入库、领用、盘点；采购建议与供应商对账，避免断货与浪费。" },
  { title: "数据看板与经营分析", desc: "营业额、客流量、畅销品、时段分析；同比环比、单店/区域对比，辅助决策。" },
  { title: "连锁与加盟管控", desc: "加盟商订货、结算、督导；品牌标准落地与合规管控。" },
];

function SectionBlock({
  id,
  accent,
  title,
  subtitle,
  items,
}: {
  id: string;
  accent: string;
  title: string;
  subtitle: string;
  items: { title: string; desc: string }[];
}) {
  return (
    <section id={`module-${id}`} className="scroll-mt-20 py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <span className={`text-sm font-semibold ${accent}`}>解决方案</span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl">{subtitle}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FoodModules() {
  return (
    <>
      <SectionBlock
        id="online"
        accent="text-cyan-600"
        title="线上触点"
        subtitle="小程序、APP、外卖与预订，把「到店」和「到家」都握在手里"
        items={ONLINE_ITEMS}
      />
      <section id="module-store" className="scroll-mt-20 py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold text-emerald-600">运营层</span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              到店体验
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl">
              排队、点餐、收银、会员识别一体化，提升效率与体验
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {STORE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionBlock
        id="member"
        accent="text-cyan-600"
        title="会员与营销"
        subtitle="私域运营、积分优惠券、裂变拉新与复购唤醒，提升 LTV"
        items={MEMBER_ITEMS}
      />
      <section id="module-multi" className="scroll-mt-20 py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold text-emerald-600">管理中台</span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              多门店与供应链
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl">
              连锁与多门店统一管控、进销存与数据看板，支撑规模化复制
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {MULTI_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function FoodScenarios() {
  const SCENARIOS = [
    {
      title: "连锁餐饮",
      tagline: "多门店 + 供应链",
      profile: "区域或全国连锁，需统一品牌、供应链与运营标准",
      solution: "多门店管理中台 + 小程序点餐/外卖 + 会员通 + 数据看板",
      value: "人效与坪效双提升，加盟复制可管可控",
    },
    {
      title: "单体/区域餐饮",
      tagline: "到店 + 到家",
      profile: "单店或少量门店，希望拉新、提复购、降本增效",
      solution: "小程序点餐/外卖 + 排队取号 + 聚合收银 + 会员营销",
      value: "等位时间缩短、复购率提升，运营更轻松",
    },
    {
      title: "生活服务（美业/家政/休闲）",
      tagline: "预约 + 会员",
      profile: "美发、美容、家政、健身等，强预约与会员制",
      solution: "预约/排班系统 + 会员次卡/储值 + 小程序展示与核销",
      value: "预约到店率提升、会员留存与升单更清晰",
    },
  ];
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            典型应用场景
          </h2>
          <p className="mt-4 text-slate-600">按业态与规模匹配方案</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {SCENARIOS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/30 p-6 transition hover:border-cyan-200 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
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
            根据我的业态获取方案
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </p>
      </div>
    </section>
  );
}

export function FoodCaseStudy() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            成功案例
          </h2>
          <p className="mt-4 text-slate-600">用数据与效果说话</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                客户背景
              </h3>
              <p className="mt-2">某区域连锁茶饮品牌，20+ 门店，以到店为主</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                核心痛点
              </h3>
              <p className="mt-2">高峰排队久、人工点单易错、会员难沉淀、各店数据分散</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                解决方案
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-slate-600">
                <li>上线小程序预点餐与到店取餐，缓解排队</li>
                <li>聚合收银 + 会员积分/优惠券，统一会员体系</li>
                <li>多门店数据看板，总部实时掌握各店经营</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                实施效果
              </h3>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>• 高峰等位时长平均缩短约 40%</li>
                <li>• 会员复购率提升，私域贡献订单占比超 35%</li>
                <li>• 总部可随时查看各店营业与畅销品，决策有据可依</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              获取定制方案
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FoodCTA() {
  return (
    <section className="py-20 sm:py-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          餐饮与生活服务数字化，从到店到到家
        </h2>
        <p className="mt-4 text-slate-400">小程序、收银、会员、多门店 — 一站式交付</p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
        >
          免费咨询 · 获取方案
        </Link>
      </div>
    </section>
  );
}
