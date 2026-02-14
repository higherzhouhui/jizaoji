const STATS = [
  { value: "100万+", label: "服务开发者" },
  { value: "99.99%", label: "平台可用性" },
  { value: "50+", label: "行业客户" },
  { value: "7×24", label: "技术保障" },
];

export function DataDashboard() {
  return (
    <section className="py-20 sm:py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            可信数据，持续交付
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            用数据说话，用稳定与规模赢得信任
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-700/80 bg-slate-800/50 p-8 text-center backdrop-blur"
            >
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400">{stat.value}</div>
              <div className="mt-2 text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
