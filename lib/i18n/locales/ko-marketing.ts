import type { Messages } from "@/lib/i18n/messages";

export const koMarketing = {
  products: {
    website: "웹사이트 / 스토어",
    app: "모바일 앱",
    mini: "WeChat 미니 프로그램",
    uni: "한 코드베이스, 여러 플랫폼",
    ai: "AI 도구",
  },
  solutions: {
    ecom: "커머스 / 리테일",
    edu: "교육 / 훈련",
    food: "매장 / 로컬 서비스",
    enterprise: "기업 내부용",
  },
} satisfies Partial<Messages>;
