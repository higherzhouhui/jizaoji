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
  // For code projects without live URL
  isCodeProject?: boolean;
  repoUrl?: string;
  stack?: string[];
}

const c = (zh: string, en: string): Copy => ({ zh, en });

/**
 * Real cases from actual projects
 */
export const CASES_LIST: CaseItem[] = [
  // Live AI Tool
  {
    id: "ai-xiaohongshu",
    title: "AI 小红书文案生成",
    titleEn: "AI Xiaohongshu Copy Generator",
    type: "ai",
    industry: "ecommerce",
    clientBrief: "电商/内容运营需要快速产出小红书风格的产品文案",
    solutionBrief: "Next.js Web 应用：输入产品描述，一键生成 3 条文案",
    metrics: ["已上线运行（Vercel）"],
    featured: true,
    image: "/images/cases/ai-xiaohongshu.png",
    situation: c(
      "电商和内容团队需要快速产出符合小红书风格的产品文案，手动写作耗时且风格难以统一。",
      "Sellers and content teams need Xiaohongshu-style product copy quickly, but manual writing is time-consuming and hard to keep consistent."
    ),
    delivered: c(
      "开发 Next.js Web 应用：输入产品描述，一键生成 3 条带 emoji 与话题标签的文案；含生成记录、SEO 优化、PWA 支持、Neon Postgres 数据库。",
      "Built a Next.js app: enter a product description and generate 3 posts with emoji and hashtags; includes history, SEO optimization, PWA support and a Neon Postgres database."
    ),
    story: c(
      "应用已上线运行于 Vercel，用户可以直接访问使用。技术栈包含 Next.js、React、TypeScript、Tailwind CSS、Radix UI 和 OpenAI API。",
      "The app is live on Vercel and available for direct use. Built with Next.js, React, TypeScript, Tailwind CSS, Radix UI and the OpenAI API."
    ),
    solutionEn: "A Next.js web app generating Xiaohongshu-style copy in one click",
    backgroundEn: "E-commerce and content teams need product copy quickly",
    metricsEn: ["Live and running on Vercel"],
    stat: { 
      value: c("在线可用", "Live"), 
      label: c("已部署于 Vercel，可直接访问", "Deployed on Vercel, publicly accessible") 
    },
    likeYou: c(
      "如果你需要内容生成工具或 AI 应用开发，可以联系讨论。",
      "If you need content generation tools or AI app development, let's talk."
    ),
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "OpenAI API", "Neon Postgres", "PWA"],
    repoUrl: "https://github.com/higherzhouhui/AI-xiaohongshu",
  },
  
  // Code Project: Company Website
  {
    id: "jizaoji-company",
    title: "科技公司官网（代码作品）",
    titleEn: "Tech Company Website (Code Project)",
    type: "website",
    industry: "enterprise",
    clientBrief: "公司需要展示业务方向、产品案例与报价的官网",
    solutionBrief: "Vue 2 + Element UI 企业官网",
    metrics: ["代码已完成并开源于 GitHub"],
    featured: false,
    image: undefined,
    isCodeProject: true,
    situation: c(
      "公司需要一个展示业务方向、产品案例与报价的官网。",
      "The company needed a website presenting its business areas, product cases and pricing."
    ),
    delivered: c(
      "使用 Vue 2 + Element UI 开发企业官网，包含业务介绍、产品案例与报价展示页面。",
      "Built a corporate website with Vue 2 + Element UI covering business intro, case showcase and pricing pages."
    ),
    story: c(
      "项目代码已完成并开源于 GitHub，包含完整的官网页面结构和内容展示功能。",
      "Code is complete and published on GitHub with full website structure and content display features."
    ),
    solutionEn: "Vue 2 + Element UI corporate website",
    backgroundEn: "Company website showcasing business and pricing",
    metricsEn: ["Code complete and published on GitHub"],
    stat: { 
      value: c("开源", "Open Source"), 
      label: c("代码已开源于 GitHub", "Code published on GitHub") 
    },
    likeYou: c(
      "如果你需要企业官网开发，可以联系讨论类似的方案。",
      "If you need a corporate website, let's discuss a similar approach."
    ),
    repoUrl: "https://github.com/higherzhouhui/jizaojiCompany",
    stack: ["Vue 2", "Element UI", "Vue Router", "Less", "animate.css"],
  },
  
  // Code Project: Health Survey H5
  {
    id: "wedoctor-h5",
    title: "健康问卷 H5（代码作品）",
    titleEn: "Health Survey H5 (Code Project)",
    type: "miniprogram",
    industry: "education",
    clientBrief: "需要移动端问卷应用，收集健康相关数据",
    solutionBrief: "uni-app 跨端 H5 问卷应用",
    metrics: ["可编译为 H5 / App"],
    featured: false,
    image: undefined,
    isCodeProject: true,
    situation: c(
      "需要一个移动端问卷应用，用于消化疾病相关数据收集。",
      "A mobile survey app was needed to collect digestive-disease related data."
    ),
    delivered: c(
      "基于 uni-app（Vue 2）开发跨端 H5，包含问卷收集页、用户协议与隐私协议页，及 API 封装与状态管理。",
      "Built a cross-platform H5 with uni-app (Vue 2): survey pages, user agreement & privacy pages, API layer and store."
    ),
    story: c(
      "项目代码完整，可编译为 H5 或 App，包含完整的问卷流程和数据收集功能。",
      "Code is complete and buildable to H5 or App, with full survey workflow and data collection."
    ),
    solutionEn: "uni-app cross-platform H5 survey app",
    backgroundEn: "Mobile survey for health data collection",
    metricsEn: ["Buildable to H5 / App"],
    stat: { 
      value: c("跨端", "Cross-platform"), 
      label: c("一套代码，H5 和 App 都能用", "One codebase for H5 and App") 
    },
    likeYou: c(
      "如果你需要问卷、预约或数据收集类的移动应用，可以联系讨论。",
      "If you need survey, booking or data collection mobile apps, let's talk."
    ),
    repoUrl: "https://github.com/higherzhouhui/wedoctorH5",
    stack: ["uni-app", "Vue 2", "HBuilderX"],
  },
  
  // Code Project: Admin Dashboard
  {
    id: "wedoctor-admin",
    title: "医疗问卷管理后台（代码作品）",
    titleEn: "Healthcare Survey Admin (Code Project)",
    type: "app",
    industry: "enterprise",
    clientBrief: "配套问卷 H5，需要后台管理用户、问卷数据与统计",
    solutionBrief: "Ant Design Pro 管理后台",
    metrics: ["完整的管理功能模块"],
    featured: false,
    image: undefined,
    isCodeProject: true,
    situation: c(
      "配套问卷 H5，需要后台管理用户、问卷数据与统计。",
      "The survey H5 needed a back office for users, survey data and statistics."
    ),
    delivered: c(
      "基于 Ant Design Pro 开发管理后台，包含用户、管理员、数据管理、财务、问题、统计、上传等模块，使用 AntV/BizCharts 做图表、wangEditor 做富文本。",
      "Built an admin on Ant Design Pro with modules for users, admins, data management, finance, questions, statistics and uploads; charts via AntV/BizCharts, rich text via wangEditor."
    ),
    story: c(
      "项目代码完整，包含完整的后台管理功能、数据可视化和富文本编辑能力。",
      "Code is complete with full admin features, data visualization and rich text editing capabilities."
    ),
    solutionEn: "Ant Design Pro admin dashboard",
    backgroundEn: "Admin panel for survey management and statistics",
    metricsEn: ["Complete management modules"],
    stat: { 
      value: c("React + TS", "React + TS"), 
      label: c("现代化技术栈，可维护性强", "Modern stack with strong maintainability") 
    },
    likeYou: c(
      "如果你需要管理后台或数据看板开发，可以联系讨论。",
      "If you need admin dashboards or data panels, let's discuss."
    ),
    repoUrl: "https://github.com/higherzhouhui/wedoctoradmin",
    stack: ["React", "TypeScript", "Ant Design Pro", "Umi", "AntV / BizCharts", "wangEditor"],
  },
  
  // Demo: Restaurant Landing Page
  {
    id: "demo-restaurant",
    title: "【演示项目】餐厅落地页",
    titleEn: "【Demo】Restaurant Landing Page",
    type: "website",
    industry: "food",
    clientBrief: "演示项目：吉隆坡餐厅落地页",
    solutionBrief: "双语响应式落地页，包含菜单、预约功能",
    metrics: ["可作为实际项目参考"],
    featured: true,
    image: "/images/cases/demo-restaurant.png",
    situation: c(
      "【演示项目】餐厅需要一个吸引顾客的在线展示页面，让客人能够查看菜单、了解餐厅并进行预约。",
      "【Demo Project】Restaurant needs an attractive online presence where customers can view the menu, learn about the venue and make bookings."
    ),
    delivered: c(
      "双语（中英文）响应式落地页，包含 Hero、菜单/服务展示、相册、位置信息和 WhatsApp 预约按钮。使用 CSS 渐变和 SVG 视觉元素，完全响应式设计。",
      "Bilingual (EN/ZH) responsive landing page with hero, menu/services, gallery, location and WhatsApp booking CTA. Uses CSS gradients and SVG visuals, fully responsive."
    ),
    story: c(
      "这是一个演示项目，展示如何为吉隆坡本地商家（餐厅或诊所）打造现代化落地页。可以作为实际项目的参考模板。",
      "This is a demo project showing how to build a modern landing page for KL local businesses (restaurant or clinic). Can serve as a reference for real projects."
    ),
    solutionEn: "Bilingual responsive landing page with booking flow",
    backgroundEn: "Demo project for KL restaurant/clinic landing page",
    metricsEn: ["Reference for real projects"],
    stat: { 
      value: c("演示", "Demo"), 
      label: c("可在线预览，代码可复用", "Live preview, code reusable") 
    },
    likeYou: c(
      "如果你需要餐厅或诊所的落地页，可以基于这个演示项目定制。",
      "If you need a restaurant or clinic landing page, we can customize based on this demo."
    ),
  },
  
  // Demo: Booking H5
  {
    id: "demo-booking",
    title: "【演示项目】预约 H5",
    titleEn: "【Demo】Booking H5",
    type: "miniprogram",
    industry: "food",
    clientBrief: "演示项目：移动端预约流程",
    solutionBrief: "移动优先的 H5 预约流程",
    metrics: ["完整的预约体验流程"],
    featured: true,
    image: "/images/cases/demo-booking.png",
    situation: c(
      "【演示项目】商家需要一个移动端预约系统，让顾客可以选择服务、日期时间并完成预约。",
      "【Demo Project】Business needs a mobile booking system where customers can choose services, date/time and complete appointments."
    ),
    delivered: c(
      "移动优先的 H5 预约流程：选择服务 → 选择日期/时间 → 填写信息 → 预约确认。纯前端实现，高质量视觉设计。",
      "Mobile-first H5 booking flow: choose service → pick date/time → fill form → confirmation. Client-side only, high visual quality."
    ),
    story: c(
      "这是一个演示项目，展示如何打造流畅的移动端预约体验。适用于餐厅、诊所、美容院等需要预约的场景。",
      "This is a demo project showing how to build a smooth mobile booking experience. Suitable for restaurants, clinics, salons and other appointment-based businesses."
    ),
    solutionEn: "Mobile-first H5 appointment booking flow",
    backgroundEn: "Demo project for mobile booking experience",
    metricsEn: ["Complete booking workflow"],
    stat: { 
      value: c("移动优先", "Mobile-first"), 
      label: c("专为手机优化的预约体验", "Booking experience optimized for phones") 
    },
    likeYou: c(
      "如果你需要预约系统或小程序，可以基于这个演示项目定制。",
      "If you need a booking system or mini program, we can customize based on this demo."
    ),
  },
];

import type { Locale } from "@/lib/i18n/locales";

// Helper to map locale to Copy key - exported for use in components
export function getCopyLang(locale: Locale): "zh" | "en" {
  return (locale === "zh" || locale === "zh-Hant") ? "zh" : "en";
}

export function caseTitle(item: CaseItem, locale: Locale) {
  return getCopyLang(locale) === "zh" ? item.title : item.titleEn;
}

export function caseById(id: string) {
  return CASES_LIST.find((item) => item.id === id);
}
