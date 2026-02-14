const STACK = [
  {
    category: "前端",
    items: ["Vue 3 / React", "Next.js", "TypeScript", "Tailwind CSS", "uni-app"],
  },
  {
    category: "后端",
    items: ["Java / Spring Boot", "Node.js", "Python", "微服务 / 云原生"],
  },
  {
    category: "跨端与小程序",
    items: ["uni-app", "微信 / 支付宝 / 百度小程序", "iOS / Android 发布"],
  },
  {
    category: "数据与 AI",
    items: ["PostgreSQL / MySQL", "Redis", "大模型接入", "向量与检索"],
  },
];

export function TechStack() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            技术栈
          </h2>
          <p className="mt-4 text-slate-600">
            前后端、跨端与数据层全覆盖，按项目选型，保障可维护与可扩展
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">{group.category}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
