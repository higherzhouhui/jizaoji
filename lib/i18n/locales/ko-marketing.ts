import type { Messages } from "@/lib/i18n/messages";

export const koMarketing = {
  a11y: {
    menu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    theme: "테마 변경",
    language: "언어 변경",
    main: "본문",
  },
  themes: {
    label: "테마",
    night: "나이트",
    day: "데이",
    gold: "골드",
    amber: "앰버",
  },
  footer: {
    blurb: "한 가지 일을 쓸 수 있게 완성합니다. 웹사이트, 미니 프로그램, 모바일 앱, AI 도구.",
    rights: "모든 권리 보유",
    icp: "渝ICP备2023007595号-2",
  },
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
