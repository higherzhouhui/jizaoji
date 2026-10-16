import type { Messages } from "@/lib/i18n/messages";

export const jaMarketing = {
  a11y: {
    menu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    theme: "テーマを変更",
    language: "言語を変更",
    main: "メインコンテンツ",
  },
  themes: {
    label: "テーマ",
    night: "ナイト",
    day: "デイ",
    gold: "ゴールド",
    amber: "アンバー",
  },
  footer: {
    blurb: "ひとつの仕事を、使える形で。Webサイト、ミニプログラム、モバイルアプリ、AI ツール。",
    rights: "無断複写・転載を禁じます",
    icp: "渝ICP备2023007595号-2",
  },
  products: {
    website: "Webサイト / ストア",
    app: "モバイルアプリ",
    mini: "WeChat ミニプログラム",
    uni: "1 コードで複数端末",
    ai: "AI ツール",
  },
  solutions: {
    ecom: "EC / 小売",
    edu: "教育 / 研修",
    food: "店舗 / ローカルサービス",
    enterprise: "社内向け",
  },
} satisfies Partial<Messages>;
