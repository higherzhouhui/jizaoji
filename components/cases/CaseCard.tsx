import Link from "next/link";
import Image from "next/image";
import type { CaseItem } from "./casesData";
import { CASE_TYPES, CASE_INDUSTRIES } from "./casesData";

function getTypeLabel(type: CaseItem["type"]) {
  return CASE_TYPES.find((t) => t.value === type)?.label ?? type;
}
function getIndustryLabel(industry: CaseItem["industry"]) {
  return CASE_INDUSTRIES.find((i) => i.value === industry)?.label ?? industry;
}

const PLACEHOLDER_IMAGE = (id: string) =>
  `https://picsum.photos/seed/case${id}/800/450`;

export function CaseCard({ case: c }: { case: CaseItem }) {
  const typeLabel = getTypeLabel(c.type);
  const industryLabel = getIndustryLabel(c.industry);
  const imageSrc = c.image ?? PLACEHOLDER_IMAGE(c.id);

  return (
    <Link
      href={`/cases/${c.id}`}
      className="group block rounded-2xl border border-line overflow-hidden bg-surface shadow-sm transition hover:border-accent/40 hover:shadow-lg"
    >
      <div className="aspect-video relative bg-raised">
        <Image
          src={imageSrc}
          alt={c.title}
          fill
          className="object-cover transition group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-surface/90 px-2.5 py-0.5 text-xs font-medium text-ink backdrop-blur">
            {typeLabel}
          </span>
          <span className="rounded-full bg-surface/90 px-2.5 py-0.5 text-xs font-medium text-mute backdrop-blur">
            {industryLabel}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink group-hover:text-accent">{c.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-mute">{c.solutionBrief}</p>
        <ul className="mt-3 space-y-1 text-xs text-accent">
          {c.metrics.slice(0, 2).map((m) => (
            <li key={m}>• {m}</li>
          ))}
        </ul>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-accent group-hover:text-accent">
          了解更多
          <svg className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
