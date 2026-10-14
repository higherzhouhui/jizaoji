import { Tx } from "@/components/i18n/Tx";
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
    <section className="py-20 sm:py-24 bg-raised border-y border-line">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>荣誉资质</Tx>
          </h2>
          <p className="mt-4 text-lg text-mute">
            <Tx>专利、软著、ISO 与高新认证，用实力与合规赢得信任</Tx>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.short}
              className="flex min-w-0 flex-col items-center rounded-2xl border border-line bg-surface px-8 py-6 shadow-sm transition hover:border-accent/40 hover:shadow-md sm:flex-1 sm:max-w-[200px]"
            >
              <span className="text-3xl" aria-hidden>
                {cert.icon}
              </span>
              <p className="mt-3 text-center text-sm font-semibold text-ink">{<Tx>{cert.short}</Tx>}</p>
              <p className="mt-1 text-center text-xs text-mute">{<Tx>{cert.name}</Tx>}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
