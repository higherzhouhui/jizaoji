const ITEMS = [
  { label: "全栈开发", short: "前后端一体交付" },
  { label: "跨平台能力", short: "一套代码多端发布" },
  { label: "AI 驱动", short: "大模型与智能应用" },
  { label: "规范流程", short: "需求到上线可追溯" },
];

export function TechAdvantages() {
  return (
    <section className="py-16 sm:py-20 bg-raised border-y border-line">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-mute mb-10">
          技术优势
        </p>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <p className="mt-3 font-semibold text-ink">{item.label}</p>
              <p className="mt-1 text-sm text-mute">{item.short}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
