import { Tx } from "@/components/i18n/Tx";
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
    <section className="py-20 sm:py-24 bg-raised border-b border-line">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>解决方案架构</Tx>
          </h2>
          <p className="mt-4 text-mute">
            <Tx>四大模块覆盖「沟通协作 → 流程管控 → 业务支撑 → 安全集成」</Tx>
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <a
              key={m.id}
              href={`#module-${m.id}`}
              className="group rounded-2xl border border-line bg-surface p-6 shadow-sm transition hover:border-accent/40 hover:shadow-lg"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-lg font-bold text-accent">
                {i + 1}
              </span>
              <p className="mt-4 text-sm font-medium text-mute">{<Tx>{m.sub}</Tx>}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{<Tx>{m.name}</Tx>}</h3>
              <p className="mt-2 text-sm text-mute">{<Tx>{m.desc}</Tx>}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
