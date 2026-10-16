"use client";

import Image from "next/image";
import { usePreferences } from "@/lib/preferences";
import { CONTACT_CONFIG } from "@/lib/contact-config";

export function AboutMeProfile() {
  const { locale } = usePreferences();
  const dev = CONTACT_CONFIG.developer;

  return (
    <section className="border-b border-line bg-canvas py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src="/images/developer-photo.jpg"
                alt={locale === "en" ? "Developer portrait" : "开发者照片"}
                fill
                className="object-cover"
                sizes="300px"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              {locale === "en" ? "About me" : "关于我"}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-mute">
              <p>
                {locale === "en"
                  ? `I'm an independent full-stack developer with ${dev.experienceYears} years of experience, based in ${dev.locationEn}. Since ${dev.experienceSince}, I've been completing small to medium-sized projects end-to-end: from product planning to design, development, testing, deployment, and monitoring.`
                  : `我是一名独立全栈开发者，拥有 ${dev.experienceYears} 年经验，现居${dev.locationZh}。自 ${dev.experienceSince} 年起，我可以独立完成中小型项目的全流程：从产品规划到设计、开发、测试、部署上线和安全监控。`}
              </p>

              <p>
                {locale === "en"
                  ? `I provide end-to-end service for websites, WeChat mini programs, mobile apps, and admin dashboards using modern technologies like ${dev.stack.slice(0, -1).join(", ")} and ${dev.stack[dev.stack.length - 1]}. You get a complete solution without coordinating multiple vendors.`
                  : `我为网站、微信小程序、手机应用和管理后台提供一站式服务，使用现代技术栈（${dev.stack.join("、")}）。你不需要协调多个供应商，就能得到完整的解决方案。`}
              </p>

              <p>
                {locale === "en"
                  ? `Bilingual service (English and Chinese) allows me to bridge international and Chinese markets. I handle everything from requirements to production deployment, deliver clean maintainable code, and provide ongoing support after launch.`
                  : `中英双语能力让我能够服务国际市场和中国市场。我负责从需求到生产部署的所有环节，交付简洁可维护的代码，并在项目上线后提供持续支持。`}
              </p>

              <p>
                {locale === "en"
                  ? "Most projects are delivered within 2-4 weeks, with clear milestones and regular updates throughout the development process."
                  : "大多数项目在 2-4 周内交付，过程中有明确的里程碑和定期进度更新。"}
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brass">
                  {locale === "en" ? "Experience" : "经验"}
                </p>
                <p className="mt-2 text-lg text-ink">
                  {dev.experienceYears} {locale === "en" ? "years" : "年"} ({dev.experienceSince}
                  –
                  {locale === "en" ? "present" : "至今"})
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brass">
                  {locale === "en" ? "Location" : "所在地"}
                </p>
                <p className="mt-2 text-lg text-ink">
                  {locale === "en" ? dev.locationEn : dev.locationZh}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brass">
                  {locale === "en" ? "Languages" : "语言"}
                </p>
                <p className="mt-2 text-lg text-ink">{dev.languages.join(", ")}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brass">
                  {locale === "en" ? "Tech Stack" : "技术栈"}
                </p>
                <p className="mt-2 text-lg text-ink">{dev.stack.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
