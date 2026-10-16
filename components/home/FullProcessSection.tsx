"use client";

import { usePreferences } from "@/lib/preferences";

export function FullProcessSection() {
  const { locale } = usePreferences();
  
  const steps = [
    {
      number: "01",
      titleZh: "产品规划",
      titleEn: "Product",
      descZh: "理解需求，规划功能范围和优先级",
      descEn: "Understand requirements, plan features and priorities",
    },
    {
      number: "02",
      titleZh: "设计",
      titleEn: "Design",
      descZh: "界面设计、用户体验优化",
      descEn: "UI design and UX optimization",
    },
    {
      number: "03",
      titleZh: "开发",
      titleEn: "Development",
      descZh: "前后端全栈开发，代码质量保证",
      descEn: "Full-stack development with code quality assurance",
    },
    {
      number: "04",
      titleZh: "测试",
      titleEn: "Testing",
      descZh: "功能测试、兼容性测试、性能优化",
      descEn: "Functional, compatibility and performance testing",
    },
    {
      number: "05",
      titleZh: "上线",
      titleEn: "Deployment",
      descZh: "部署配置、域名解析、SSL 证书",
      descEn: "Deploy configuration, DNS setup, SSL certificate",
    },
    {
      number: "06",
      titleZh: "监控",
      titleEn: "Monitoring",
      descZh: "安全监控、性能监控、持续维护",
      descEn: "Security monitoring, performance tracking, ongoing maintenance",
    },
  ];

  return (
    <section className="border-t border-line py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brass">
            {locale === "en" ? "Full-Stack Service" : "全流程服务"}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {locale === "en" 
              ? "One Developer, Complete Process" 
              : "一人完成，全程负责"}
          </h2>
          <p className="mt-4 text-lg text-mute">
            {locale === "en"
              ? "From initial planning to production monitoring — no need to coordinate multiple vendors"
              : "从最初规划到生产监控 — 无需协调多个供应商"}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-line bg-surface p-6 transition hover:border-accent hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-display text-xl font-bold text-accent">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-ink">
                {locale === "en" ? step.titleEn : step.titleZh}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                {locale === "en" ? step.descEn : step.descZh}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
