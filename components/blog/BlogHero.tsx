import { Tx } from "@/components/i18n/Tx";
export function BlogHero() {
  return (
    <section className="relative border-b border-line bg-canvas px-6 py-16 sm:py-20">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          <Tx>资源中心</Tx>
        </h1>
        <p className="mt-4 text-mute">
          <Tx>技术博客、行业洞察与更新日志，持续输出专业内容</Tx>
        </p>
      </div>
    </section>
  );
}
