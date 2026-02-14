import Link from "next/link";
import Image from "next/image";
const ENV_ITEMS = [
  { title: "开放工区", desc: "灵活工位与讨论区，鼓励协作与创新" },
  { title: "技术氛围", desc: "大屏、书墙与技术分享文化" },
  { title: "休闲区", desc: "茶水间与休息区，劳逸结合" },
];

export function JobsOffice() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            办公环境
          </h2>
          <p className="mt-4 text-slate-600">
            科技感十足的办公空间，期待与你见面
          </p>
        </div>
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-cyan-100" />
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">
            <Image src="/images/about/3.jpg" fill className="object-cover" sizes="100vw" alt="workspace" />
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {ENV_ITEMS.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link href="/about" className="text-cyan-600 font-semibold hover:text-cyan-700">
            更多办公环境与团队风采 → 关于我们
          </Link>
        </p>
      </div>
    </section>
  );
}
