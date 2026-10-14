import Link from "next/link";
import Image from "next/image";
import { Tx } from "@/components/i18n/Tx";

const POINTS = [
  { title: "响应式设计", desc: "PC + 手机 + 平板完美适配，一套设计多端一致体验" },
  { title: "SEO 友好", desc: "从代码层面优化结构、语义与性能，提升搜索引擎收录与排名" },
  { title: "转化率设计", desc: "每个页面都有明确的 CTA 布局，引导用户行动" },
];

const CASE_PLACEHOLDER = {
  title: "某企业官网改版",
  metric: "上线 3 个月访问量提升 150%",
};

export function WebsiteSection() {
  return (
    <section id="website" className="scroll-mt-20 py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold text-accent"><Tx>数字阵地建设</Tx></span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              <Tx>网站搭建：不只是页面，更是增长引擎</Tx>
            </h2>
            <p className="mt-4 text-lg text-mute">
              <Tx>我们不只做页面，更从响应式、SEO、转化率出发，让官网成为获客与留存的入口。</Tx>
            </p>
            <ul className="mt-8 space-y-4">
              {POINTS.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium text-ink">{<Tx>{p.title}</Tx>}</span>
                    <span className="text-mute"> — {<Tx>{p.desc}</Tx>}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/cases?type=website"
              className="mt-8 inline-flex items-center text-accent font-semibold hover:text-accent"
            >
              <Tx>查看网站案例</Tx>
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl border border-line bg-raised">
              <Image
                src="/images/product/1.jpg"
                alt={CASE_PLACEHOLDER.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-12">
                <p className="font-semibold text-white">{<Tx>{CASE_PLACEHOLDER.title}</Tx>}</p>
                <p className="mt-1 text-sm text-white/80">{<Tx>{CASE_PLACEHOLDER.metric}</Tx>}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
