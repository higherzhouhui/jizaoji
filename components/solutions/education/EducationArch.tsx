const MODULES = [
  {
    id: "teaching",
    name: "线上教学与课程",
    sub: "交付层",
    desc: "直播、录播、互动、作业与考试，多形态课程交付",
  },
  {
    id: "enrollment",
    name: "招生与营销",
    sub: "获客层",
    desc: "官网/小程序、线索、裂变、试听与转化",
  },
  {
    id: "academic",
    name: "教务与学员管理",
    sub: "运营层",
    desc: "排课、班级、学员档案、考勤与证书",
  },
  {
    id: "data",
    name: "数据与运营",
    sub: "决策层",
    desc: "学习数据、完课率、续费预测、经营看板",
  },
];

export function EducationArch() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            解决方案架构
          </h2>
          <p className="mt-4 text-slate-600">
            四大模块覆盖「获客 → 交付 → 教务 → 数据」全链路
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <a
              key={m.id}
              href={`#module-${m.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-lg font-bold text-amber-600">
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
