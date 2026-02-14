const MODULES = [
  {
    id: "collab",
    name: "协同办公",
    sub: "沟通与协作",
    desc: "IM、文档、日历、会议、项目协作，信息同频",
  },
  {
    id: "workflow",
    name: "流程与组织",
    sub: "管控层",
    desc: "审批、考勤、人事、公告，制度落地可追溯",
  },
  {
    id: "business",
    name: "业务应用",
    sub: "业务层",
    desc: "CRM、销售/项目协作、客户与商机管理",
  },
  {
    id: "security",
    name: "安全与集成",
    sub: "底座",
    desc: "SSO、权限、审计、与现有系统对接",
  },
];

export function EnterpriseArch() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            解决方案架构
          </h2>
          <p className="mt-4 text-slate-600">
            四大模块覆盖「沟通协作 → 流程管控 → 业务支撑 → 安全集成」
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <a
              key={m.id}
              href={`#module-${m.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-lg font-bold text-violet-600">
                {i + 1}
              </span>
              <p className="mt-4 text-sm font-medium text-slate-500">{m.sub}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{m.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{m.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
