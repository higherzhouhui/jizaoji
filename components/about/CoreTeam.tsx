import { Tx } from "@/components/i18n/Tx";
const TEAM = [
  {
    name: "张明",
    role: "创始人 & CEO",
    bio: "前大厂数据平台负责人，十余年数据与AI方向经验，主导过亿级用户数据体系建设。",
    initial: "张",
    gradient: "from-accent to-brass",
  },
  {
    name: "李思",
    role: "联合创始人 & CTO",
    bio: "分布式系统与数据架构专家，多次参与开源项目，在实时计算与存储领域有深厚积累。",
    initial: "李",
    gradient: "from-brass to-accent",
  },
  {
    name: "王芳",
    role: "技术 VP",
    bio: "AI 与算法负责人，博士学历，在推荐与风控场景有丰富落地经验，发表多篇顶会论文。",
    initial: "王",
    gradient: "from-accent to-brass",
  },
  {
    name: "陈浩",
    role: "产品与解决方案负责人",
    bio: "多年 ToB 产品经验，深入金融、零售等行业，擅长将技术能力转化为可落地的业务方案。",
    initial: "陈",
    gradient: "from-brass to-accent",
  },
];

export function CoreTeam() {
  return (
    <section className="py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>核心团队</Tx>
          </h2>
          <p className="mt-4 text-lg text-mute">
            <Tx>来自一线大厂与顶尖院校，用经验与专业为产品与客户负责</Tx>
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-line bg-surface p-6 shadow-sm transition hover:border-accent/40 hover:shadow-lg"
            >
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient} text-2xl font-bold text-accent-ink shadow-lg`}
              >
                {<Tx>{member.initial}</Tx>}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{<Tx>{member.name}</Tx>}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{<Tx>{member.role}</Tx>}</p>
              <p className="mt-4 text-sm text-mute leading-relaxed">{<Tx>{member.bio}</Tx>}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
