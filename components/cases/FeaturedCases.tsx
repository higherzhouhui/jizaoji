import Link from "next/link";
import Image from "next/image";
import { CASES_LIST } from "./casesData";
import { CASE_TYPES, CASE_INDUSTRIES } from "./casesData";

const featured = CASES_LIST.filter((c) => c.featured);
const PLACEHOLDER_IMAGE = (id: string) =>
  `https://picsum.photos/seed/case${id}/800/450`;

function getTypeLabel(type: string) {
  return CASE_TYPES.find((t) => t.value === type)?.label ?? type;
}
function getIndustryLabel(industry: string) {
  return CASE_INDUSTRIES.find((i) => i.value === industry)?.label ?? industry;
}

export function FeaturedCases() {
  return (
    <section className="py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            精选案例
          </h2>
          <p className="mt-4 text-mute">
            客户背景、解决方案、实施效果 — 左右交错呈现，参考行业优秀案例页版式
          </p>
        </div>
        <div className="space-y-20">
          {featured.map((c, index) => (
            <div
              key={c.id}
              className="grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-video relative overflow-hidden rounded-2xl border border-line bg-raised">
                  <Image
                    src={c.image ?? PLACEHOLDER_IMAGE(c.id)}
                    alt={c.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {getTypeLabel(c.type)}
                  </span>
                  <span className="rounded-full bg-raised px-2.5 py-0.5 text-xs font-medium text-mute">
                    {getIndustryLabel(c.industry)}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-ink">{c.title}</h3>
                <div className="mt-6 space-y-4 text-mute">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-mute">
                      客户背景
                    </h4>
                    <p className="mt-2">{c.clientBrief}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-mute">
                      解决方案
                    </h4>
                    <p className="mt-2">{c.solutionBrief}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-mute">
                      实施效果
                    </h4>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-mute">
                      {c.metrics.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href={`/cases/${c.id}`}
                  className="mt-6 inline-flex items-center text-accent font-semibold hover:text-accent"
                >
                  查看更多
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
