import { Tx } from "@/components/i18n/Tx";
const MILESTONES = [
  {
    year: "2025",
    title: "智能数据平台 2.0 发布",
    desc: "全新架构上线，支持实时计算与AI增强分析，服务客户数突破新阶段。",
  },
  {
    year: "2024",
    title: "完成 A 轮融资",
    desc: "获得知名机构投资，用于产品研发与市场拓展，团队规模翻倍。",
  },
  {
    year: "2024",
    title: "获评国家高新技术企业",
    desc: "通过国家高新技术企业认定，研发与创新能力获官方认可。",
  },
  {
    year: "2023",
    title: "首款企业级数据平台上线",
    desc: "智能数据平台 1.0 正式商用，签约多家行业头部客户。",
  },
  {
    year: "2022",
    title: "公司正式成立",
    desc: "极造极信息科技有限公司注册成立，聚焦数据智能与AI落地。",
  },
];

export function Timeline() {
  return (
    <section className="py-20 sm:py-24 bg-raised border-y border-line">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>发展历程</Tx>
          </h2>
          <p className="mt-4 text-lg text-mute">
            <Tx>关键里程碑，记录我们的成长与突破</Tx>
          </p>
        </div>
        <div className="relative">
          {/* 时间轴竖线 */}
          <div
            className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/60 to-line"
            aria-hidden
          />
          <ul className="space-y-12">
            {MILESTONES.map((milestone, index) => (
              <li key={`${milestone.year}-${index}`} className="relative flex gap-8">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-surface text-sm font-bold text-accent shadow-sm">
                  {milestone.year.slice(2)}
                </div>
                <div className="min-w-0 flex-1 rounded-xl border border-line bg-surface p-6 shadow-sm">
                  <p className="text-sm font-semibold text-accent">{milestone.year}</p>
                  <h3 className="mt-1 text-lg font-semibold text-ink">{<Tx>{milestone.title}</Tx>}</h3>
                  <p className="mt-2 text-mute">{<Tx>{milestone.desc}</Tx>}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
