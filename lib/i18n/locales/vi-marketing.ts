import type { Messages } from "@/lib/i18n/messages";

export const viMarketing = {
  a11y: {
    menu: "Mở menu",
    closeMenu: "Đóng menu",
    theme: "Đổi giao diện",
    language: "Đổi ngôn ngữ",
    main: "Nội dung chính",
  },
  themes: {
    label: "Giao diện",
    night: "Đêm",
    day: "Ngày",
    gold: "Vàng",
    amber: "Hổ phách",
  },
  footer: {
    blurb: "Một việc, làm xong để người dùng dùng được. Website, mini program, app di động, công cụ AI.",
    rights: "Bảo lưu mọi quyền",
    icp: "渝ICP备2023007595号-2",
  },
  products: {
    website: "Website / cửa hàng",
    app: "Ứng dụng di động",
    mini: "Mini program WeChat",
    uni: "Một codebase, nhiều nền tảng",
    ai: "Công cụ AI",
  },
  solutions: {
    ecom: "Bán hàng online",
    edu: "Giáo dục / đào tạo",
    food: "Cửa hàng / dịch vụ",
    enterprise: "Nội bộ doanh nghiệp",
  },
} satisfies Partial<Messages>;
