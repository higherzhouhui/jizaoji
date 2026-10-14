import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStories } from "@/components/cases/CaseStories";
import { ClosingBand } from "@/components/home/ClosingBand";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "做成什么样",
  description:
    "极造极的案例：当时卡在哪，做完手里有什么，一个记得住的结果。看完可以直接咨询类似的事。",
  path: "/cases",
});

export default function CasesPage() {
  return (
    <>
      <Header />
      <main>
        <CaseStories />
        <ClosingBand />
      </main>
      <Footer />
    </>
  );
}
