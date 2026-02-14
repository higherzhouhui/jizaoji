import Link from "next/link";

const TEACHING_ITEMS = [
  {
    title: "直播与互动",
    desc: "实时直播、连麦、弹幕、答题互动；支持多师同屏、白板与课件共享，还原线下课堂体验。",
  },
  {
    title: "录播与点播",
    desc: "课程视频上传、转码与分发；防拖拽/防下载、水印与防盗链；支持倍速、笔记与章节跳转。",
  },
  {
    title: "作业与练习",
    desc: "在线布置作业、提交与批改；题库、组卷与自动阅卷；学习报告与错题本，助力个性化巩固。",
  },
  {
    title: "考试与测评",
    desc: "正式考试、模拟考、随堂测；防作弊、限时交卷、成绩与证书；与教务、学员档案打通。",
  },
];

const ENROLLMENT_ITEMS = [
  {
    title: "官网与小程序",
    desc: "品牌官网、课程展示、试听/试学入口；小程序报名、支付与消息触达，沉淀私域学员。",
  },
  {
    title: "线索与转化",
    desc: "留资表单、试听预约、顾问跟进；线索分配、跟进记录与转化漏斗，提升从咨询到付费的转化率。",
  },
  {
    title: "裂变与拉新",
    desc: "拼团、老带新、分享有礼、限时优惠；邀请码与分销机制，低成本获客与口碑传播。",
  },
  {
    title: "试听与体验课",
    desc: "免费试听、体验课包、低价引流课；试听数据与行为分析，精准识别高意向学员。",
  },
];

const ACADEMIC_ITEMS = [
  {
    title: "排课与班级",
    desc: "课程表、教室/师资排课、调课与冲突检测；班级管理、学员分班与升班，支持多校区。",
  },
  {
    title: "学员档案",
    desc: "学员信息、报名记录、学习进度、考勤与成绩；家长端/学员端查看，与教学、营销数据联动。",
  },
  {
    title: "考勤与签到",
    desc: "到课签到、请假与补课；线上课学习时长与完课率；考勤报表与异常预警。",
  },
  {
    title: "证书与结业",
    desc: "结业证书、学时证明、电子证书与验真；与课程、考试数据关联，合规可查。",
  },
];

const DATA_ITEMS = [
  {
    title: "学习数据与完课率",
    desc: "每节课/每章节学习时长、完成度、互动与答题数据；完课率、流失节点分析，优化课程与运营。",
  },
  {
    title: "续费与转化分析",
    desc: "续费率、转介绍率、客单价与 LTV；续费预警与触达策略，提升留存与复购。",
  },
  {
    title: "经营看板",
    desc: "招生、营收、耗课、退费；多维度报表与同比环比，支撑校区与总部决策。",
  },
  {
    title: "AI 辅助",
    desc: "学习行为预测、智能推荐课程、智能客服与答疑；内容与运营的智能化升级。",
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

export function EducationModules() {
  return (
    <>
      <Block
        id="teaching"
        accent="text-cyan-600"
        title="线上教学与课程"
        subtitle="直播、录播、互动、作业与考试，多形态课程交付，保障学习效果与完课率"
        items={TEACHING_ITEMS}
      />
      <Block
        id="enrollment"
        accent="text-amber-600"
        title="招生与营销"
        subtitle="官网、小程序、线索、裂变与试听，从公域到私域，提升获客与转化"
        items={ENROLLMENT_ITEMS}
      />
      <section id="module-academic" className="scroll-mt-20 py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold text-amber-600">运营层</span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              教务与学员管理
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl">
              排课、班级、学员档案、考勤与证书，教务标准化、学员可追溯
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {ACADEMIC_ITEMS.map((item) => (
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
        id="data"
        accent="text-cyan-600"
        title="数据与运营"
        subtitle="学习数据、完课率、续费预测与经营看板，数据驱动教学与运营优化"
        items={DATA_ITEMS}
      />
    </>
  );
}

export function EducationScenarios() {
  const SCENARIOS = [
    {
      title: "K12 / 素质教育",
      tagline: "校内校外结合",
      profile: "学科辅导、素质类（编程/艺术/体育等），需排课、学员档案、家长端与续费",
      solution: "官网/小程序招生 + 直播录播 + 教务排课 + 学员/家长端 + 数据看板",
      value: "招生转化与续费可管可控，家长满意度与口碑提升",
    },
    {
      title: "职业培训 / 技能培训",
      tagline: "考证与就业导向",
      profile: "IT、财会、建造、语言等，重课程体系、考试与证书、就业服务",
      solution: "课程平台 + 直播/录播 + 题库与考试 + 证书与就业对接 + 学员运营",
      value: "完课率与通过率可追踪，品牌与复购双提升",
    },
    {
      title: "企业培训 / 内训",
      tagline: "组织学习与合规",
      profile: "企业内训、合规学习、新员工培训，需与组织架构、权限、考核挂钩",
      solution: "学习平台 + 课程与考试 + 组织与权限 + 学习报表与合规证明",
      value: "培训覆盖与完成率可视，合规留痕可审计",
    },
    {
      title: "知识付费 / 在线教育",
      tagline: "轻交付与高复购",
      profile: "轻课、专栏、训练营，以内容与社群为主，需裂变与续费",
      solution: "小程序/APP 获客 + 录播/直播 + 社群与打卡 + 分销与续费运营",
      value: "获客成本降低、完课与复购率提升",
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
        <div className="grid gap-8 sm:grid-cols-2">
          {SCENARIOS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/30 p-6 transition hover:border-cyan-200 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700">
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

export function EducationCaseStudy() {
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
              <p className="mt-2">某职业资格培训机构，年招生约 5000 人，以线下为主、线上为辅</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                核心痛点
              </h3>
              <p className="mt-2">招生依赖电销、线索转化低；线下排课与学员档案分散；完课率与续费难量化</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                解决方案
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-slate-600">
                <li>搭建官网与小程序，试听与留资统一入口，线索自动分配与跟进</li>
                <li>直播 + 录播课程、题库与模拟考，学习进度与完课率可视</li>
                <li>教务排课、学员档案与考勤一体化，数据看板支撑续费与运营决策</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                实施效果
              </h3>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>• 线索到付费转化率提升，获客成本下降</li>
                <li>• 完课率与考试通过率可追踪，教学效果可量化</li>
                <li>• 续费与转介绍数据清晰，续费触达更精准</li>
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

export function EducationCTA() {
  return (
    <section className="py-20 sm:py-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          教育/培训数字化，从招生到交付
        </h2>
        <p className="mt-4 text-slate-400">获客、授课、教务、数据 — 一站式支撑教培增长</p>
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
