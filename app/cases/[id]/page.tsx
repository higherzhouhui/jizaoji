import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { CASES_LIST } from "@/components/cases/casesData";
import { CASE_TYPES, CASE_INDUSTRIES } from "@/components/cases/casesData";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

function getTypeLabel(type: string) {
  return CASE_TYPES.find((t) => t.value === type)?.label ?? type;
}
function getIndustryLabel(industry: string) {
  return CASE_INDUSTRIES.find((i) => i.value === industry)?.label ?? industry;
}
const PLACEHOLDER_IMAGE = (id: string) =>
  `https://picsum.photos/seed/case${id}/800/450`;

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return CASES_LIST.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const c = CASES_LIST.find((x) => x.id === id);
  if (!c)
    return buildPageMetadata({ title: "案例展示", description: "极造极案例展示", path: "/cases" });
  const description = `${c.clientBrief} — ${c.solutionBrief}`;
  return buildPageMetadata({
    title: c.title,
    description,
    path: `/cases/${id}`,
    image: c.image ?? undefined,
  });
}

export default async function CaseDetailPage({ params }: Props) {
  const { id } = await params;
  const c = CASES_LIST.find((x) => x.id === id);
  if (!c) {
    return (
      <>
        <Header />
        <main className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20">
          <h1 className="text-2xl font-bold text-slate-900">案例不存在</h1>
          <Link href="/cases" className="mt-4 text-cyan-600 hover:text-cyan-700">
            返回案例列表
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pb-20">
        <div className="border-b border-slate-800 bg-slate-950 px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-xs font-medium text-cyan-400">
                {getTypeLabel(c.type)}
              </span>
              <span className="rounded-full bg-slate-600 px-2.5 py-0.5 text-xs font-medium text-slate-300">
                {getIndustryLabel(c.industry)}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{c.title}</h1>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="aspect-video relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 mb-10">
            <Image
              src={c.image ?? PLACEHOLDER_IMAGE(c.id)}
              alt={c.title}
              fill
              className="object-cover"
              sizes="800px"
            />
          </div>
          <div className="space-y-8 text-slate-700">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">客户背景</h2>
              <p className="mt-2">{c.clientBrief}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">解决方案</h2>
              <p className="mt-2">{c.solutionBrief}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">实施效果</h2>
              <ul className="mt-2 list-disc list-inside space-y-1 text-slate-600">
                {c.metrics.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/cases"
              className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              返回案例列表
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              获取类似方案
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
