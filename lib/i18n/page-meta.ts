import type { Locale } from "@/lib/i18n/locales";

export type PageMetaKey =
  | "home"
  | "about"
  | "pricing"
  | "contact"
  | "cases"
  | "products"
  | "tech"
  | "blog"
  | "jobs"
  | "solutionsEcommerce"
  | "solutionsEducation"
  | "solutionsEnterprise"
  | "solutionsFood";

type MetaEntry = { title: string; description: string };

const zh: Record<PageMetaKey, MetaEntry> = {
  home: {
    title: "独立全栈开发者 - 吉隆坡 10 年 - 全流程一站式服务",
    description:
      "10 年全栈独立开发者 · 吉隆坡 · 可独立完成中小型项目全流程。中英双语，透明报价，2-4 周交付。",
  },
  about: {
    title: "关于我",
    description: "10 年前端独立开发者，吉隆坡，中英双语。React、Next.js、Vue 与微信小程序。",
  },
  pricing: {
    title: "服务报价",
    description: "公开透明报价：落地页/官网、小程序/H5、管理后台。双币种，2-4 周交付。",
  },
  contact: {
    title: "说说你的事",
    description: "留下现状与目标。回复能不能做、建议怎么做。WhatsApp/微信，吉隆坡。",
  },
  cases: {
    title: "做成什么样",
    description: "案例：当时卡在哪，做完有什么，一个记得住的数字。",
  },
  products: {
    title: "产品与服务",
    description: "网站、APP、小程序、uni-app、AI 工具 — 按场景一站式交付。",
  },
  tech: {
    title: "怎么交付",
    description: "技术栈、开发流程、质量保障 — 支撑项目交付。",
  },
  blog: {
    title: "资源中心",
    description: "技术博客、行业洞察与更新。",
  },
  jobs: {
    title: "加入我们",
    description: "极造极招聘与团队文化（演示页）。",
  },
  solutionsEcommerce: {
    title: "电商/零售解决方案",
    description: "电商前端、中台、门店与 AI 应用。",
  },
  solutionsEducation: {
    title: "教育/培训解决方案",
    description: "招生、授课、教务与数据驱动续费。",
  },
  solutionsEnterprise: {
    title: "企业/办公解决方案",
    description: "协同、审批、CRM 与安全集成。",
  },
  solutionsFood: {
    title: "餐饮/生活服务解决方案",
    description: "点餐、外卖、排队、会员与多门店。",
  },
};

const en: Record<PageMetaKey, MetaEntry> = {
  home: {
    title: "Independent full-stack developer · Kuala Lumpur · 10 years",
    description:
      "End-to-end small and medium projects: product, design, development, testing, deployment, monitoring. Bilingual, transparent pricing, 2–4 weeks.",
  },
  about: {
    title: "About me",
    description: "10-year independent developer in Kuala Lumpur. React, Next.js, Vue, WeChat mini programs.",
  },
  pricing: {
    title: "Pricing",
    description: "Transparent pricing for websites, mini programs/H5, and admin panels. Dual currency.",
  },
  contact: {
    title: "Contact",
    description: "Tell me your project. I reply with whether it fits and suggested next steps.",
  },
  cases: {
    title: "Work",
    description: "Case stories: what was stuck, what changed, one number to remember.",
  },
  products: {
    title: "Services",
    description: "Websites, apps, mini programs, uni-app, and AI tools — delivered by scenario.",
  },
  tech: {
    title: "How it’s built",
    description: "Stack, process, and quality practices behind delivery.",
  },
  blog: {
    title: "Notes",
    description: "Blog posts, insights, and updates.",
  },
  jobs: {
    title: "Jobs",
    description: "Roles and culture (demo page).",
  },
  solutionsEcommerce: {
    title: "E-commerce / retail",
    description: "Storefront, omnichannel middle office, stores, and AI.",
  },
  solutionsEducation: {
    title: "Education / training",
    description: "Enrollment, teaching, school ops, and retention data.",
  },
  solutionsEnterprise: {
    title: "Enterprise / workplace",
    description: "Collaboration, approvals, CRM, and security.",
  },
  solutionsFood: {
    title: "Food / local services",
    description: "Ordering, delivery hooks, queues, membership, multi-store.",
  },
};

const th: Record<PageMetaKey, MetaEntry> = {
  home: {
    title: "นักพัฒนา full-stack อิสระ · กัวลาลัมเปอร์ · 10 ปี",
    description:
      "โปรเจกต์ขนาดกลาง–เล็กครบวงจร สองภาษา ราคาโปร่งใส ส่งมอบ 2–4 สัปดาห์",
  },
  about: {
    title: "เกี่ยวกับฉัน",
    description: "นักพัฒนาอิสระ 10 ปี กัวลาลัมเปอร์ React Next.js Vue มินิโปรแกรม WeChat",
  },
  pricing: {
    title: "ราคา",
    description: "ราคาโปร่งใสสำหรับเว็บ มินิโปรแกรม/H5 และแอดมิน สองสกุลเงิน",
  },
  contact: {
    title: "ติดต่อ",
    description: "บอกโปรเจกต์ของคุณ ผมตอบว่าทำได้ไหมและแนะนำขั้นถัดไป",
  },
  cases: {
    title: "กรณีศึกษา",
    description: "เรื่องจริง: ติดตรงไหน เปลี่ยนเป็นอะไร ตัวเลขที่จำ",
  },
  products: {
    title: "บริการ",
    description: "เว็บ แอป มินิโปรแกรม uni-app เครื่องมือ AI — ตามสถานการณ์",
  },
  tech: {
    title: "วิธีส่งมอบ",
    description: "สแต็ก กระบวนการ และคุณภาพงาน",
  },
  blog: {
    title: "บล็อก",
    description: "บทความ มุมมอง และอัปเดต",
  },
  jobs: {
    title: "ร่วมงาน",
    description: "ตำแหน่งและวัฒนธรรม (หน้าเดโม)",
  },
  solutionsEcommerce: {
    title: "โซลูชันอีคอมเมิร์ซ / รีเทล",
    description: "หน้าร้าน แบ็กออฟฟิศ omnichannel ร้านค้า และ AI",
  },
  solutionsEducation: {
    title: "โซลูชันการศึกษา / อบรม",
    description: "รับสมัคร สอน บริหารสถาบัน และข้อมูลต่ออายุ",
  },
  solutionsEnterprise: {
    title: "โซลูชันองค์กร / ออฟฟิศ",
    description: "ทำงานร่วมกัน อนุมัติ CRM และความปลอดภัย",
  },
  solutionsFood: {
    title: "โซลูชันอาหาร / บริการท้องถิ่น",
    description: "สั่งอาหาร คิว สมาชิก และหลายสาขา",
  },
};

const ms: Record<PageMetaKey, MetaEntry> = {
  home: {
    title: "Pembangun full-stack bebas · Kuala Lumpur · 10 tahun",
    description: "Projek sederhana hujung ke hujung. Dwibahasa, harga telus, 2–4 minggu.",
  },
  about: {
    title: "Tentang saya",
    description: "Pembangun bebas 10 tahun di Kuala Lumpur. React, Next.js, Vue, WeChat.",
  },
  pricing: {
    title: "Harga",
    description: "Harga telus untuk laman web, program mini/H5, dan panel admin.",
  },
  contact: {
    title: "Hubungi",
    description: "Ceritakan projek anda. Saya balas sama ada sesuai dan langkah seterusnya.",
  },
  cases: {
    title: "Kes",
    description: "Kisah: masalah, hasil, satu nombor untuk diingat.",
  },
  products: {
    title: "Perkhidmatan",
    description: "Laman web, aplikasi, program mini, uni-app, alat AI.",
  },
  tech: {
    title: "Cara penghantaran",
    description: "Stack, proses, dan kualiti.",
  },
  blog: {
    title: "Blog",
    description: "Catatan dan kemas kini.",
  },
  jobs: {
    title: "Kerjaya",
    description: "Jawatan dan budaya (demo).",
  },
  solutionsEcommerce: {
    title: "E-dagang / runcit",
    description: "Kedai dalam talian, omnichannel, kedai fizikal, AI.",
  },
  solutionsEducation: {
    title: "Pendidikan / latihan",
    description: "Pengambilan, pengajaran, operasi, pengekalan.",
  },
  solutionsEnterprise: {
    title: "Enterprise / pejabat",
    description: "Kolaborasi, kelulusan, CRM, keselamatan.",
  },
  solutionsFood: {
    title: "Makanan / perkhidmatan tempatan",
    description: "Pesanan, barisan, ahli, berbilang cawangan.",
  },
};

const ja: Record<PageMetaKey, MetaEntry> = {
  home: {
    title: "独立フルスタック開発者 · クアラルンプール · 10年",
    description: "中小規模プロジェクトを一気通貫。二言語、透明な見積、2〜4週間。",
  },
  about: {
    title: "自己紹介",
    description: "クアラルンプールの独立開発者10年。React、Next.js、Vue、WeChatミニプログラム。",
  },
  pricing: {
    title: "料金",
    description: "Web、ミニプログラム/H5、管理画面の透明な料金。",
  },
  contact: {
    title: "お問い合わせ",
    description: "プロジェクト内容を教えてください。可否と次のステップを返信します。",
  },
  cases: {
    title: "事例",
    description: "課題、成果、覚えておく数字。",
  },
  products: {
    title: "サービス",
    description: "Web、アプリ、ミニプログラム、uni-app、AIツール。",
  },
  tech: {
    title: "進め方",
    description: "スタック、プロセス、品質。",
  },
  blog: {
    title: "ブログ",
    description: "記事と更新。",
  },
  jobs: {
    title: "採用",
    description: "ポジション（デモページ）。",
  },
  solutionsEcommerce: {
    title: "EC / 小売",
    description: "店頭、オムニチャネル、店舗、AI。",
  },
  solutionsEducation: {
    title: "教育 / 研修",
    description: "集客、授業、運営、継続率。",
  },
  solutionsEnterprise: {
    title: "企業 / オフィス",
    description: "協業、承認、CRM、セキュリティ。",
  },
  solutionsFood: {
    title: "飲食 / ローカルサービス",
    description: "注文、行列、会員、多店舗。",
  },
};

/** Locales without a dedicated table fall back to English. */
const byLocale: Partial<Record<Locale, Record<PageMetaKey, MetaEntry>>> = {
  zh,
  "zh-Hant": zh,
  en,
  th,
  ms,
  ja,
};

export function pageMetaFor(locale: Locale, key: PageMetaKey): MetaEntry {
  const table = byLocale[locale] ?? en;
  return table[key] ?? en[key];
}

export function pathnameToMetaKey(pathname: string): PageMetaKey | null {
  if (pathname === "/" || pathname === "") return "home";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/pricing")) return "pricing";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/cases")) return "cases";
  if (pathname.startsWith("/products")) return "products";
  if (pathname.startsWith("/tech")) return "tech";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/jobs")) return "jobs";
  if (pathname.startsWith("/solutions/ecommerce")) return "solutionsEcommerce";
  if (pathname.startsWith("/solutions/education")) return "solutionsEducation";
  if (pathname.startsWith("/solutions/enterprise")) return "solutionsEnterprise";
  if (pathname.startsWith("/solutions/food")) return "solutionsFood";
  return null;
}
