import Link from "next/link";
import Image from "next/image";
import { CASES_LIST, CASE_TYPES } from "@/components/cases/casesData";
import type { CaseItem } from "@/components/cases/casesData";

function getTypeLabel(type: CaseItem["type"]) {
  return CASE_TYPES.find((t) => t.value === type)?.label ?? type;
}

const PLACEHOLDER_IMAGE = (id: string) =>
  `https://picsum.photos/seed/case${id}/800/450`;

/** 首页典型案例：取案例展示中的精选案例，最多 3 条 */
const HOME_CASES = CASES_LIST.filter((c) => c.featured).slice(0, 3);

export function CaseShowcase() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              典型案例
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              用事实与数据说话，每个案例都可扫码或在线预览
            </p>
          </div>
          <Link
            href="/cases"
            className="shrink-0 text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none focus:underline"
          >
            查看全部案例 →
          </Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {HOME_CASES.map((c) => (
            <Link
              key={c.id}
              href={`/cases/${c.id}`}
              className="group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm transition hover:border-cyan-200 hover:shadow-lg"
            >
              <div className="aspect-video relative bg-slate-100">
                <Image
                  src={c.image ?? PLACEHOLDER_IMAGE(c.id)}
                  alt={c.title}
                  fill
                  className="object-cover transition group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-cyan-600">
                  {getTypeLabel(c.type)}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-cyan-700">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {c.metrics[0] ?? c.solutionBrief}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
