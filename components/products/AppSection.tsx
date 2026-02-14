const STEPS = [
  { phase: "需求分析", tags: ["用户画像", "竞品分析"] },
  { phase: "UI/UX 设计", tags: ["交互原型", "视觉设计"] },
  { phase: "技术开发", tags: ["原生", "iOS/Android", "跨平台"] },
  { phase: "测试上架", tags: ["兼容测试", "应用商店审核"] },
  { phase: "运营迭代", tags: ["数据埋点", "版本更新"] },
];

export function AppSection() {
  return (
    <section id="app" className="scroll-mt-20 py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-cyan-600">数字阵地建设</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            APP 开发：从 0 到 1 的全流程能力
          </h2>
          <p className="mt-4 text-slate-600">
            需求分析 → 设计 → 开发 → 测试上架 → 运营迭代，全链路交付
          </p>
        </div>

        {/* 时间轴 + 能力标签 */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 sm:left-1/2 sm:-translate-x-px" />
          {STEPS.map((step, i) => (
            <div
              key={step.phase}
              className={`relative flex flex-col gap-4 pb-12 last:pb-0 sm:flex-row sm:items-center ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-cyan-500 bg-white text-sm font-bold text-cyan-600">
                {i + 1}
              </div>
              <div className={`sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"}`}>
                <h3 className="font-semibold text-slate-900">{step.phase}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 技术架构示意 */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-slate-900">技术架构</h3>
          <p className="mt-2 text-sm text-slate-600">
            后端 Java/SpringBoot 三层架构，前端 Vue/React 或跨端方案，保障高并发与可维护性。
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700">展示层</span>
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700">业务层</span>
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700">数据层</span>
          </div>
        </div>
      </div>
    </section>
  );
}
