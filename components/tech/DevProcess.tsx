import { Tx } from "@/components/i18n/Tx";
const STEPS = [
  { phase: "需求分析", desc: "用户画像、竞品与场景梳理，输出需求文档与验收标准" },
  { phase: "设计与原型", desc: "交互原型、视觉设计、技术方案与接口约定" },
  { phase: "开发与联调", desc: "迭代开发、代码审查、前后端联调与接口测试" },
  { phase: "测试与上线", desc: "功能/性能/安全测试，灰度发布与监控" },
  { phase: "运营与迭代", desc: "数据监控、问题响应与版本迭代" },
];

export function DevProcess() {
  return (
    <section className="py-20 sm:py-24 bg-raised border-y border-line">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>开发流程</Tx>
          </h2>
          <p className="mt-4 text-mute">
            <Tx>从需求到上线，规范化、可追溯，保障交付质量与周期</Tx>
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-line sm:left-1/2 sm:-translate-x-px" />
          {STEPS.map((step, i) => (
            <div
              key={step.phase}
              className="relative flex gap-6 pb-12 last:pb-0 sm:flex-row sm:items-center"
            >
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-surface text-sm font-bold text-accent">
                {i + 1}
              </div>
              <div className="min-w-0 flex-1 rounded-xl border border-line bg-surface p-5 shadow-sm sm:max-w-[calc(50%-2rem)] sm:[margin-inline-start:auto]">
                <h3 className="font-semibold text-ink">{<Tx>{step.phase}</Tx>}</h3>
                <p className="mt-2 text-sm text-mute">{<Tx>{step.desc}</Tx>}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
