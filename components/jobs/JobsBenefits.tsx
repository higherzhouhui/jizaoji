const BENEFITS = [
  {
    title: "五险一金",
    desc: "按规缴纳社会保险与住房公积金",
  },
  {
    title: "弹性工作",
    desc: "弹性上下班，部分岗位支持远程",
  },
  {
    title: "技术培训",
    desc: "书籍、课程与会议支持，持续学习",
  },
  {
    title: "年度体检",
    desc: "每年一次健康体检",
  },
  {
    title: "团建与假期",
    desc: "团建活动、带薪年假与节日福利",
  },
  {
    title: "成长空间",
    desc: "项目历练与晋升通道，结果导向",
  },
];

export function JobsBenefits() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            福利待遇
          </h2>
          <p className="mt-4 text-slate-600">
            我们重视每一位伙伴的工作体验与成长
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
