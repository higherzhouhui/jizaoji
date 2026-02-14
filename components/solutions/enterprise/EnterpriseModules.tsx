import Link from "next/link";

const COLLAB_ITEMS = [
  {
    title: "即时沟通与群组",
    desc: "单聊、群聊、@ 提醒、已读回执；支持文件、图片、语音；可按部门/项目建群，信息透明可追溯。",
  },
  {
    title: "在线文档与知识库",
    desc: "协作文档、表格、知识库；多人实时编辑、评论与@；权限与版本管理，沉淀组织知识。",
  },
  {
    title: "日历与会议",
    desc: "个人/团队日历、会议预约、会议室管理；与视频会议打通，会前提醒、会中协作、会后纪要。",
  },
  {
    title: "项目与任务协作",
    desc: "看板/甘特、任务分配、进度跟踪、里程碑；与沟通、文档联动，项目信息集中可见。",
  },
];

const WORKFLOW_ITEMS = [
  {
    title: "审批流程",
    desc: "请假、报销、用印、采购等审批；自定义流程与多级审批；移动端审批、催办与委托，审批进度可查。",
  },
  {
    title: "考勤与排班",
    desc: "打卡（GPS/Wi-Fi/蓝牙）、外勤、补卡；排班与调班、假期规则；与人事、薪酬数据联动。",
  },
  {
    title: "人事与组织",
    desc: "组织架构、花名册、入职离职；人事档案与合同管理；与审批、考勤、权限联动，人岗一致。",
  },
  {
    title: "公告与制度",
    desc: "公司/部门公告、制度发布、必读确认；重要通知触达与阅读统计，制度落地可追溯。",
  },
];

const BUSINESS_ITEMS = [
  {
    title: "CRM 与客户管理",
    desc: "客户档案、联系人、商机阶段；销售漏斗与预测；跟进记录与协作，防止客户流失与撞单。",
  },
  {
    title: "销售与项目协作",
    desc: "商机/合同/回款管理；项目立项、阶段、资源与交付；与审批、沟通打通，销售与交付可管可控。",
  },
  {
    title: "低代码与流程引擎",
    desc: "简单业务表单与流程自定义；与现有 ERP/财务等系统对接，减少重复录入与断点。",
  },
];

const SECURITY_ITEMS = [
  {
    title: "统一身份与 SSO",
    desc: "单点登录、与 AD/钉钉/企业微信等对接；统一账号与权限，降低多系统账号分散风险。",
  },
  {
    title: "权限与审计",
    desc: "角色与数据权限、敏感操作审批；操作日志与审计留痕，满足等保与合规要求。",
  },
  {
    title: "集成与开放",
    desc: "API、Webhook、与 ERP/CRM/邮箱等集成；支持私有化部署与数据本地化。",
  },
];

function Block({
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

export function EnterpriseModules() {
  return (
    <>
      <Block
        id="collab"
        accent="text-cyan-600"
        title="协同办公"
        subtitle="IM、文档、日历、会议与项目协作，让信息同频、协作高效"
        items={COLLAB_ITEMS}
      />
      <section id="module-workflow" className="scroll-mt-20 py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold text-violet-600">管控层</span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              流程与组织
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl">
              审批、考勤、人事、公告一体化，制度落地可追溯
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {WORKFLOW_ITEMS.map((item) => (
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
      <Block
        id="business"
        accent="text-cyan-600"
        title="业务应用"
        subtitle="CRM、销售与项目协作，支撑业务闭环与数据可管"
        items={BUSINESS_ITEMS}
      />
      <section id="module-security" className="scroll-mt-20 py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold text-violet-600">底座</span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              安全与集成
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl">
              SSO、权限、审计与现有系统对接，保障合规与可扩展
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {SECURITY_ITEMS.map((item) => (
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

export function EnterpriseScenarios() {
  const SCENARIOS = [
    {
      title: "中小企业",
      tagline: "一站式办公",
      profile: "几十人到百人，希望沟通、审批、考勤一体化，降低多系统成本",
      solution: "协同（IM/文档/会议）+ 审批考勤 + 可选 CRM，统一入口",
      value: "一个平台解决日常办公与基础管控，实施快、易上手",
    },
    {
      title: "成长型企业",
      tagline: "流程与业务并重",
      profile: "业务扩张中，需规范审批、人事与销售/项目协作",
      solution: "协同 + 流程与组织 + CRM/项目协作 + 与现有 ERP 等集成",
      value: "流程可追溯、业务数据可管，支撑规模化复制",
    },
    {
      title: "集团与多分支",
      tagline: "统一与分级",
      profile: "多法人、多地域、多业态，需统一管控又保留分支灵活性",
      solution: "统一身份与权限 + 分级组织与数据 + 审计与合规",
      value: "集团一盘棋，分支可运营，满足等保与审计要求",
    },
  ];
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            典型应用场景
          </h2>
          <p className="mt-4 text-slate-600">按规模与管控需求匹配方案</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {SCENARIOS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/30 p-6 transition hover:border-cyan-200 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-700">
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
            根据企业规模获取方案
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </p>
      </div>
    </section>
  );
}

export function EnterpriseCaseStudy() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            成功案例
          </h2>
          <p className="mt-4 text-slate-600">用效率与合规效果说话</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                客户背景
              </h3>
              <p className="mt-2">某科技公司，约 200 人，多地办公，原有 OA 与沟通工具分散</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                核心痛点
              </h3>
              <p className="mt-2">审批慢、考勤与人事脱节、销售与项目信息分散、权限与审计难满足</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                解决方案
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-slate-600">
                <li>统一协同平台（IM + 文档 + 会议）+ 审批考勤人事</li>
                <li>CRM 与项目协作模块，销售与交付数据集中</li>
                <li>SSO 与权限、操作审计，满足等保与内控要求</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                实施效果
              </h3>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>• 审批平均处理时长缩短，移动审批占比超 80%</li>
                <li>• 考勤与人事、薪酬数据打通，人岗一致可追溯</li>
                <li>• 销售漏斗与项目进度可视，管理层决策有据可依</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
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

export function EnterpriseCTA() {
  return (
    <section className="py-20 sm:py-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          企业协同与数字化办公，从协作到管控
        </h2>
        <p className="mt-4 text-slate-400">一体化平台，可集成、可扩展、可审计</p>
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
