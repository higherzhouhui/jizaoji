"use client";

import { CASE_TYPES, CASE_INDUSTRIES, type CaseType, type CaseIndustry } from "./casesData";

type Props = {
  typeFilter: CaseType;
  industryFilter: CaseIndustry;
  onTypeChange: (v: CaseType) => void;
  onIndustryChange: (v: CaseIndustry) => void;
};

export function CaseFilter({ typeFilter, industryFilter, onTypeChange, onIndustryChange }: Props) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:flex-wrap">
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium text-slate-500 shrink-0 self-center">类型：</span>
        {CASE_TYPES.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => onTypeChange(t.value)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              typeFilter === t.value
                ? "bg-cyan-500 text-slate-950"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium text-slate-500 shrink-0 self-center">行业：</span>
        {CASE_INDUSTRIES.map((i) => (
          <button
            key={i.value}
            type="button"
            onClick={() => onIndustryChange(i.value)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              industryFilter === i.value
                ? "bg-cyan-500 text-slate-950"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {i.label}
          </button>
        ))}
      </div>
    </div>
  );
}
