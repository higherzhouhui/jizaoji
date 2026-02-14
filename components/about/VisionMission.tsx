const ITEMS = [
  {
    title: "愿景",
    content:
      "成为企业信赖的数据智能首选伙伴，让每一家企业都能用数据驱动决策、用AI释放增长潜力。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "使命",
    content:
      "通过智能数据平台与AI解决方案，帮助企业低成本、高效率地挖掘数据价值，实现业务创新与可持续发展。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "价值观",
    content:
      "专业、可信、开放、创新。我们以客户成功为导向，用技术说话，用数据证明，与伙伴共建数据智能生态。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export function VisionMission() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            我们为什么存在
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            愿景、使命与价值观，指引我们每一步选择
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl border border-slate-200 bg-slate-50/50 p-8 transition hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600">
                {item.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
