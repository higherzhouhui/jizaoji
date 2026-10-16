"use client";

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
            <div className="aspect-square overflow-hidden rounded-2xl border border-line bg-surface">
              {/* TODO: Replace with actual developer photo */}
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent/20 to-brass/20">
                <div className="text-center">
                  <svg
                    className="mx-auto h-24 w-24 text-mute"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="mt-4 text-xs text-mute">
                    {locale === "en" ? "TODO: Add photo" : "TODO: 添加照片"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              {locale === "en" ? "About me" : "关于我"}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-mute">
              <p>
                {locale === "en"
                  ? `I'm a freelance front-end developer with ${dev.experienceYears} years of experience, based in ${dev.locationEn}. I've been building web and mobile applications since ${dev.experienceSince}, working with clients across Southeast Asia and China.`
                  : `我是一名独立前端开发者，拥有 ${dev.experienceYears} 年经验，现居${dev.locationZh}。自 ${dev.experienceSince} 年起从事 Web 和移动应用开发，服务过东南亚和中国的多个客户。`}
              </p>

              <p>
                {locale === "en"
                  ? `I specialize in building responsive websites, WeChat mini programs, mobile apps, and admin dashboards using modern technologies like ${dev.stack.slice(0, -1).join(", ")} and ${dev.stack[dev.stack.length - 1]}.`
                  : `我专注于使用现代技术栈（${dev.stack.join("、")}）构建响应式网站、微信小程序、手机应用和管理后台。`}
              </p>

              <p>
                {locale === "en"
                  ? `What sets me apart is my ability to communicate in both English and Chinese, allowing me to bridge the gap between international and Chinese markets. I deliver clean, maintainable code and provide ongoing support after launch.`
                  : `我的优势在于中英双语能力，能够在国际市场和中国市场之间架起桥梁。我注重代码质量和可维护性，并在项目上线后提供持续支持。`}
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
