import type { Messages } from "@/lib/i18n/messages";

export const jaMarketing = {
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
