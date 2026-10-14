import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

const AI_SCENES = [
  "AI 客服",
  "智能推荐",
  "内容生成",
];

const FLOW = ["模型训练 / 选型", "API 封装", "前端集成"];

export function AiToolsSection() {
  return (
    <section id="ai" className="scroll-mt-20 py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold text-accent"><Tx>智能应用工场</Tx></span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              <Tx>AI 工具开发：前沿能力的落地实践</Tx>
            </h2>
            <p className="mt-4 text-mute">
              <Tx>大模型接入、图像识别、自然语言处理等能力封装，快速落地智能应用。</Tx>
            </p>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-ink"><Tx>AI 能力集成</Tx></h4>
              <p className="mt-1 text-sm text-mute"><Tx>大模型接入、图像识别、NLP</Tx></p>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-ink"><Tx>智能应用场景</Tx></h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {AI_SCENES.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                  >
                    {<Tx>{s}</Tx>}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-ink"><Tx>技术流程</Tx></h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {FLOW.map((f, i) => (
                  <span key={f} className="flex items-center gap-2 text-sm text-mute">
                    {i > 0 && <span className="text-mute">→</span>}
                    <span className="rounded bg-raised px-2 py-1">{<Tx>{f}</Tx>}</span>
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center text-accent font-semibold hover:text-accent"
            >
              <Tx>获取 AI 方案</Tx>
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="rounded-2xl border border-line bg-raised p-8">
            <p className="text-sm font-medium text-mute"><Tx>架构示意</Tx></p>
            <p className="mt-4 text-mute text-sm">
              <Tx>从模型训练 / 选型到 API 封装，再到前端集成，全流程可交付。</Tx>
            </p>
            <div className="mt-6 space-y-3">
              {FLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="text-ink">{<Tx>{step}</Tx>}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
