import Link from "next/link";

const POSITIONS = [
  {
    id: "fe",
    title: "前端工程师",
    dept: "研发",
    type: "全职",
    location: "重庆 / 远程",
    desc: "负责 Web / 小程序 / 跨端项目开发，Vue / React / uni-app 至少熟练其一，有组件化与工程化经验优先。",
    tags: ["Vue", "React", "TypeScript", "uni-app", "小程序"],
  },
  {
    id: "be",
    title: "后端工程师",
    dept: "研发",
    type: "全职",
    location: "重庆 / 远程",
    desc: "负责业务接口与数据层开发，Java / Node.js 至少其一，有微服务或高并发经验优先。",
    tags: ["Java", "Spring Boot", "Node.js", "MySQL", "Redis"],
  },
  {
    id: "miniprogram",
    title: "小程序 / 跨端开发工程师",
    dept: "研发",
    type: "全职",
    location: "重庆 / 远程",
    desc: "负责微信小程序及 uni-app 跨端项目，有电商/教育/企业类项目经验优先。",
    tags: ["微信小程序", "uni-app", "Vue", "多端适配"],
  },
  {
    id: "ai",
    title: "AI 应用开发工程师",
    dept: "研发",
    type: "全职",
    location: "重庆 / 远程",
    desc: "负责大模型接入、智能推荐与 AI 工具类功能开发，有 NLP / 推荐 / 端侧模型经验优先。",
    tags: ["大模型", "NLP", "推荐", "Python", "前端集成"],
  },
  {
    id: "product",
    title: "产品经理",
    dept: "产品",
    type: "全职",
    location: "重庆",
    desc: "负责 B 端 / 解决方案类产品规划与需求，有电商/教育/企业软件经验优先。",
    tags: ["B 端", "需求分析", "原型", "协作"],
  },
];

export function JobsPositions() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            热招职位
          </h2>
          <p className="mt-4 text-slate-600">
            前端、后端、小程序、AI、产品 — 欢迎投递或咨询
          </p>
        </div>
        <ul className="space-y-4">
          {POSITIONS.map((job) => (
            <li key={job.id}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-md">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                      <span>{job.dept}</span>
                      <span>·</span>
                      <span>{job.type}</span>
                      <span>·</span>
                      <span>{job.location}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">{job.title}</h3>
                    <p className="mt-2 text-slate-600">{job.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/contact?position=${encodeURIComponent(job.title)}`}
                    className="shrink-0 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    投递简历
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-slate-600">
          暂无合适岗位？欢迎
          <Link href="/contact" className="mx-1 text-cyan-600 font-semibold hover:text-cyan-700">
            联系我们
          </Link>
          说明你的方向，我们持续在招人。
        </p>
      </div>
    </section>
  );
}
