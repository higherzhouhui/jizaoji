import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogList } from "@/components/blog/BlogList";
import { BlogCTA } from "@/components/blog/BlogCTA";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "资源中心",
  description:
    "极造极 — 技术博客、行业洞察与更新日志，持续输出专业内容与产品动态。",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <BlogList />
        <BlogCTA />
      </main>
      <Footer />
    </>
  );
}
