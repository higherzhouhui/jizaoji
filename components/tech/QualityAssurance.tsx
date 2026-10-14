import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

const ITEMS = [
  {
    title: "代码审查",
    desc: "PR 评审、规范检查与安全扫描，保证代码质量与可维护性",
  },
  {
    title: "自动化测试",
    desc: "单元测试、接口测试与关键路径 E2E，回归快速、发布放心",
  },
  {
    title: "性能与安全",
    desc: "性能压测与优化、依赖与敏感信息审计，满足高并发与合规要求",
  },
];

export function QualityAssurance() {
  return (
    <section className="py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>质量保障</Tx>
          </h2>
          <p className="mt-4 text-mute">
            <Tx>代码审查、自动化测试与性能安全，贯穿开发与上线全流程</Tx>
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-raised/60 p-8"
            >
              <h3 className="text-xl font-semibold text-ink">{<Tx>{item.title}</Tx>}</h3>
              <p className="mt-4 text-mute">{<Tx>{item.desc}</Tx>}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/contact" className="text-accent font-semibold hover:text-accent">
            <Tx>沟通您的质量与交付要求</Tx>
          </Link>
        </p>
      </div>
    </section>
  );
}
