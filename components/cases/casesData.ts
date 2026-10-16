export type CaseType = "website" | "app" | "miniprogram" | "ai" | "all";
export type CaseIndustry = "ecommerce" | "education" | "enterprise" | "food" | "all";

export type Copy = { zh: string; en: string };

export const CASE_TYPES = [
  { value: "all" as CaseType, label: "全部" },
  { value: "website" as CaseType, label: "网站搭建" },
  { value: "app" as CaseType, label: "APP 开发" },
  { value: "miniprogram" as CaseType, label: "微信小程序" },
  { value: "ai" as CaseType, label: "AI 工具" },
];

export const CASE_INDUSTRIES = [
  { value: "all" as CaseIndustry, label: "全部行业" },
  { value: "ecommerce" as CaseIndustry, label: "电商/零售" },
  { value: "education" as CaseIndustry, label: "教育/培训" },
  { value: "enterprise" as CaseIndustry, label: "企业/办公" },
  { value: "food" as CaseIndustry, label: "餐饮/生活服务" },
];

export interface CaseItem {
  id: string;
  title: string;
  titleEn: string;
  type: CaseType;
  industry: CaseIndustry;
  clientBrief: string;
  solutionBrief: string;
  metrics: string[];
  image?: string;
  featured?: boolean;
  /** 外行也能懂的「当时卡在哪」 */
  situation: Copy;
  /** 做完之后手里有什么 */
  delivered: Copy;
  story: Copy;
  solutionEn: string;
  backgroundEn: string;
  metricsEn: string[];
  stat: { value: Copy; label: Copy };
  likeYou: Copy;
}

const c = (zh: string, en: string): Copy => ({ zh, en });

/**
 * TODO: Replace these placeholder cases with real project case studies
 * 
 * Each case needs:
 * - Real project screenshots (not picsum placeholders)
 * - Client authorization to share the case
 * - Actual metrics and results
 * 
 * Structure for each case:
 * - 问题 (Problem): What issue the client faced
 * - 做了什么 (What was done): Features and solutions implemented
 * - 结果 (Results): Measurable outcomes after launch
 * 
 * Required case types:
 * - At least one website/landing page project
 * - At least one mini-program/H5 project
 * - At least one admin dashboard/backend project
 */
export const CASES_LIST: CaseItem[] = [
  {
    id: "placeholder-website",
    title: "[案例 TODO] 企业官网项目",
    titleEn: "[Case TODO] Corporate Website Project",
    type: "website",
    industry: "enterprise",
    clientBrief: "TODO: 添加真实客户背景",
    solutionBrief: "TODO: 添加解决方案描述",
    metrics: ["TODO: 添加实际数据指标"],
    featured: true,
    image: undefined, // TODO: Add real project screenshot to /public/images/cases/
    situation: c(
      "【问题】TODO: 当时客户遇到的具体问题，例如：老网站加载慢、不支持手机访问、没有英文版等。",
      "【Problem】TODO: Specific issues client faced, e.g. slow loading, no mobile support, no English version."
    ),
    delivered: c(
      "【做了什么】TODO: 具体实现的功能，例如：响应式设计、中英双语、SEO 优化、联系表单、3 秒内加载完成。",
      "【What was done】TODO: Features delivered, e.g. responsive design, bilingual, SEO optimization, contact form, loads in 3 seconds."
    ),
    story: c(
      "【结果】TODO: 上线后的实际效果，例如：访问量提升 X%、询盘数量增加、Google 搜索排名进入前 X 位。",
      "【Results】TODO: Actual outcomes after launch, e.g. X% traffic increase, more inquiries, top X ranking on Google."
    ),
    solutionEn: "TODO: Add solution description",
    backgroundEn: "TODO: Add client background",
    metricsEn: ["TODO: Add actual metrics"],
    stat: { 
      value: c("TODO", "TODO"), 
      label: c("TODO: 添加一个记得住的数字", "TODO: Add a memorable number") 
    },
    likeYou: c(
      "如果你的情况和这差不多，可以联系讨论类似的方案。",
      "If your situation is similar, contact to discuss a similar approach."
    ),
  },
  {
    id: "placeholder-miniprogram",
    title: "[案例 TODO] 小程序 / H5 项目",
    titleEn: "[Case TODO] Mini Program / H5 Project",
    type: "miniprogram",
    industry: "food",
    clientBrief: "TODO: 添加真实客户背景",
    solutionBrief: "TODO: 添加解决方案描述",
    metrics: ["TODO: 添加实际数据指标"],
    featured: false,
    image: undefined, // TODO: Add real project screenshot to /public/images/cases/
    situation: c(
      "【问题】TODO: 当时客户遇到的具体问题，例如：排队时间长、会员管理混乱、依赖外卖平台等。",
      "【Problem】TODO: Specific issues, e.g. long queues, messy membership, reliance on delivery platforms."
    ),
    delivered: c(
      "【做了什么】TODO: 具体实现的功能，例如：微信小程序预点单、会员系统、积分/优惠券、多门店管理后台。",
      "【What was done】TODO: Features, e.g. WeChat pre-order, membership, points/coupons, multi-store admin."
    ),
    story: c(
      "【结果】TODO: 上线后的实际效果，例如：排队时间减少 X%、自有订单占比达到 X%、会员复购率提升。",
      "【Results】TODO: Outcomes, e.g. queue time reduced X%, own-platform orders reached X%, member retention improved."
    ),
    solutionEn: "TODO: Add solution description",
    backgroundEn: "TODO: Add client background",
    metricsEn: ["TODO: Add actual metrics"],
    stat: { 
      value: c("TODO", "TODO"), 
      label: c("TODO: 添加一个记得住的数字", "TODO: Add a memorable number") 
    },
    likeYou: c(
      "如果你的情况和这差不多，可以联系讨论类似的方案。",
      "If your situation is similar, contact to discuss a similar approach."
    ),
  },
  {
    id: "placeholder-admin",
    title: "[案例 TODO] 管理后台项目",
    titleEn: "[Case TODO] Admin Dashboard Project",
    type: "app",
    industry: "enterprise",
    clientBrief: "TODO: 添加真实客户背景",
    solutionBrief: "TODO: 添加解决方案描述",
    metrics: ["TODO: 添加实际数据指标"],
    featured: false,
    image: undefined, // TODO: Add real project screenshot to /public/images/cases/
    situation: c(
      "【问题】TODO: 当时客户遇到的具体问题，例如：数据分散、权限混乱、报表效率低、无法移动办公等。",
      "【Problem】TODO: Specific issues, e.g. scattered data, messy permissions, slow reporting, no mobile access."
    ),
    delivered: c(
      "【做了什么】TODO: 具体实现的功能，例如：React/Vue 管理后台、权限系统、数据看板、导出功能、API 对接。",
      "【What was done】TODO: Features, e.g. React/Vue admin, permissions, data dashboard, export, API integration."
    ),
    story: c(
      "【结果】TODO: 上线后的实际效果，例如：工作效率提升 X%、数据查询时间从 X 分钟降至 X 秒、减少人工操作。",
      "【Results】TODO: Outcomes, e.g. efficiency up X%, query time from X minutes to X seconds, reduced manual work."
    ),
    solutionEn: "TODO: Add solution description",
    backgroundEn: "TODO: Add client background",
    metricsEn: ["TODO: Add actual metrics"],
    stat: { 
      value: c("TODO", "TODO"), 
      label: c("TODO: 添加一个记得住的数字", "TODO: Add a memorable number") 
    },
    likeYou: c(
      "如果你的情况和这差不多，可以联系讨论类似的方案。",
      "If your situation is similar, contact to discuss a similar approach."
    ),
  },
];

export function caseTitle(item: CaseItem, locale: "zh" | "en") {
  return locale === "en" ? item.titleEn : item.title;
}

export function caseById(id: string) {
  return CASES_LIST.find((item) => item.id === id);
}
