import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStory } from "@/components/cases/CaseStory";
import { CASES_LIST } from "@/components/cases/casesData";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return CASES_LIST.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = CASES_LIST.find((entry) => entry.id === id);
  if (!item) {
    return buildPageMetadata({ title: "案例", description: "极造极案例", path: "/cases" });
  }
  return buildPageMetadata({
    title: item.title,
    description: `${item.situation.zh} ${item.delivered.zh}`,
    path: `/cases/${id}`,
    image: item.image ?? undefined,
  });
}

export default async function CaseDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <>
      <Header />
      <main>
        <CaseStory id={id} />
      </main>
      <Footer />
    </>
  );
}
