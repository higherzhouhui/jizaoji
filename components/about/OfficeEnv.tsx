import Link from "next/link";
import Image from "next/image";

const ABOUT_IMAGES = [
  {
    src: "/images/about/1.jpg",
    title: "技术氛围",
    desc: "大屏、书墙与技术分享文化",
  },
  {
    src: "/images/about/2.jpg",
    title: "休闲区",
    desc: "茶水间与休息区，劳逸结合",
  },
  {
    src: "/images/about/work.jpg",
    title: "开放工区",
    desc: "灵活工位与讨论区，鼓励协作与创新",
  },
];

export function OfficeEnv() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            办公环境
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            科技感十足的办公空间，期待优秀的你加入
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {ABOUT_IMAGES.map((item) => (
            <div
              key={item.src}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50"
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none focus:underline"
          >
            加入我们
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </p>
      </div>
    </section>
  );
}
