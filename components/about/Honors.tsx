const CERTIFICATES = [
  {
    name: "国家高新技术企业",
    short: "高企认证",
    icon: "🏆",
  },
  {
    name: "ISO 27001 信息安全管理体系",
    short: "ISO 27001",
    icon: "🔒",
  },
  {
    name: "软件著作权（多项）",
    short: "软著",
    icon: "📜",
  },
  {
    name: "发明专利与实用新型",
    short: "专利",
    icon: "💡",
  },
  {
    name: "等保 2.0 相关认证",
    short: "等保",
    icon: "🛡️",
  },
];

export function Honors() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            荣誉资质
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            专利、软著、ISO 与高新认证，用实力与合规赢得信任
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.short}
              className="flex min-w-0 flex-col items-center rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm transition hover:border-cyan-200 hover:shadow-md sm:flex-1 sm:max-w-[200px]"
            >
              <span className="text-3xl" aria-hidden>
                {cert.icon}
              </span>
              <p className="mt-3 text-center text-sm font-semibold text-slate-900">{cert.short}</p>
              <p className="mt-1 text-center text-xs text-slate-500">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
