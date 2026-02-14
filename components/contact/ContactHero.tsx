export function ContactHero() {
  return (
    <section className="relative border-b border-slate-800 bg-slate-950 px-6 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(34,211,238,0.1),transparent)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          联系我们
        </h1>
        <p className="mt-4 text-slate-400">
          免费咨询、获取方案 — 填写表单或直接致电，我们会尽快与您联系
        </p>
      </div>
    </section>
  );
}
