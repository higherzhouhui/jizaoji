export function BlogHero() {
  return (
    <section className="relative border-b border-slate-800 bg-slate-950 px-6 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(34,211,238,0.1),transparent)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          资源中心
        </h1>
        <p className="mt-4 text-slate-400">
          技术博客、行业洞察与更新日志，持续输出专业内容
        </p>
      </div>
    </section>
  );
}
