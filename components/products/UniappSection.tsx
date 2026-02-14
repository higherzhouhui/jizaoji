import Image from "next/image";

const ADVANTAGES = [
  { title: "技术栈", desc: "Vue 语法，一套代码发布到 iOS、Android、Web、各家小程序" },
  { title: "性能优化", desc: "首屏加载、分包加载、原生渲染，接近原生体验" },
  { title: "典型案例", desc: "同一项目多端运行效果一致，维护成本大幅降低" },
];

export function UniappSection() {
  return (
    <section id="uniapp" className="scroll-mt-20 py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold text-cyan-600">跨端开发引擎</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              uni-app：一次开发，多端运行
            </h2>
            <p className="mt-4 text-slate-600">
              在跨端开发上深耕多年，用一套代码覆盖多端，兼顾效率与体验。
            </p>
            <ul className="mt-8 space-y-4">
              {ADVANTAGES.map((a) => (
                <li key={a.title} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium text-slate-900">{a.title}</span>
                    <span className="text-slate-600"> — {a.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { platform: "iOS", seed: "product-ios" },
              { platform: "Android", seed: "product-android" },
              { platform: "Web", seed: "product-web" },
              { platform: "小程序", seed: "product-mini" },
            ].map(({ platform, seed }) => (
              <div
                key={platform}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <Image
                  src={`/images/product/${seed}.jpg`}
                  alt={`${platform} 运行效果示意`}
                  fill
                  className="object-cover transition group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent py-3 px-3">
                  <span className="text-sm font-medium text-white">{platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
