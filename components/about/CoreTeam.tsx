const TEAM = [
  {
    name: "张明",
    role: "创始人 & CEO",
    bio: "前大厂数据平台负责人，十余年数据与AI方向经验，主导过亿级用户数据体系建设。",
    initial: "张",
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    name: "李思",
    role: "联合创始人 & CTO",
    bio: "分布式系统与数据架构专家，多次参与开源项目，在实时计算与存储领域有深厚积累。",
    initial: "李",
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    name: "王芳",
    role: "技术 VP",
    bio: "AI 与算法负责人，博士学历，在推荐与风控场景有丰富落地经验，发表多篇顶会论文。",
    initial: "王",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    name: "陈浩",
    role: "产品与解决方案负责人",
    bio: "多年 ToB 产品经验，深入金融、零售等行业，擅长将技术能力转化为可落地的业务方案。",
    initial: "陈",
    gradient: "from-cyan-600 to-blue-600",
  },
];

export function CoreTeam() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            核心团队
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            来自一线大厂与顶尖院校，用经验与专业为产品与客户负责
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient} text-2xl font-bold text-white shadow-lg`}
              >
                {member.initial}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-600">{member.role}</p>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
