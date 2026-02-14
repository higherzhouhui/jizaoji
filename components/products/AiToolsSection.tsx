import Link from "next/link";

const AI_SCENES = [
  "AI 客服",
  "智能推荐",
  "内容生成",
];

const FLOW = ["模型训练 / 选型", "API 封装", "前端集成"];

export function AiToolsSection() {
  return (
    <section id="ai" className="scroll-mt-20 py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold text-cyan-600">智能应用工场</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              AI 工具开发：前沿能力的落地实践
            </h2>
            <p className="mt-4 text-slate-600">
              大模型接入、图像识别、自然语言处理等能力封装，快速落地智能应用。
            </p>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-900">AI 能力集成</h4>
              <p className="mt-1 text-sm text-slate-600">大模型接入、图像识别、NLP</p>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-900">智能应用场景</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {AI_SCENES.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-indigo-500/10 px-3 py-1.5 text-sm font-medium text-indigo-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-900">技术流程</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {FLOW.map((f, i) => (
                  <span key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    {i > 0 && <span className="text-slate-400">→</span>}
                    <span className="rounded bg-slate-100 px-2 py-1">{f}</span>
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700"
            >
              获取 AI 方案
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-medium text-slate-500">架构示意</p>
            <p className="mt-4 text-slate-600 text-sm">
              从模型训练 / 选型到 API 封装，再到前端集成，全流程可交付。
            </p>
            <div className="mt-6 space-y-3">
              {FLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-bold text-cyan-700">
                    {i + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
