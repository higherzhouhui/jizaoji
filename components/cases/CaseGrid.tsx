"use client";

import { useMemo, useState } from "react";
import { CaseFilter } from "./CaseFilter";
import { CaseCard } from "./CaseCard";
import { CASES_LIST, type CaseType, type CaseIndustry } from "./casesData";

export function CaseGrid() {
  const [typeFilter, setTypeFilter] = useState<CaseType>("all");
  const [industryFilter, setIndustryFilter] = useState<CaseIndustry>("all");

  const filtered = useMemo(() => {
    return CASES_LIST.filter((c) => {
      if (typeFilter !== "all" && c.type !== typeFilter) return false;
      if (industryFilter !== "all" && c.industry !== industryFilter) return false;
      return true;
    });
  }, [typeFilter, industryFilter]);

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <CaseFilter
          typeFilter={typeFilter}
          industryFilter={industryFilter}
          onTypeChange={setTypeFilter}
          onIndustryChange={setIndustryFilter}
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CaseCard key={c.id} case={c} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-12 text-center text-slate-500">暂无该筛选条件下的案例</p>
        )}
      </div>
    </section>
  );
}
