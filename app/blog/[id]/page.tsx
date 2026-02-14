import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { BLOG_POSTS } from "@/components/blog/blogData";
import { BLOG_CATEGORIES } from "@/components/blog/blogData";
import type { Metadata } from "next";

const SOURCE_LABEL: Record<string, string> = {
  juejin: "掘金",
  csdn: "CSDN",
};

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_POSTS.find((x) => x.id === id);
  if (!post) return { title: "资源中心" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = BLOG_POSTS.find((x) => x.id === id);
  const categoryLabel = post ? BLOG_CATEGORIES.find((c) => c.value === post.category)?.label : null;
  const sourceLabel = post?.source ? SOURCE_LABEL[post.source] : null;

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20">
          <h1 className="text-2xl font-bold text-slate-900">文章不存在</h1>
          <Link href="/blog" className="mt-4 text-cyan-600 hover:text-cyan-700">
            返回资源中心
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  // 外部文章（掘金/CSDN）：展示摘要与「阅读原文」跳转
  if (post.externalUrl) {
    return (
      <>
        <Header />
        <main className="pb-20">
          <article className="mx-auto max-w-3xl px-6 py-12">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 font-medium text-cyan-700">
                {categoryLabel}
              </span>
              <time dateTime={post.date}>{post.date}</time>
              {sourceLabel && (
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-slate-600">
                  {sourceLabel}
                </span>
              )}
            </div>
            <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{post.title}</h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>
            <p className="mt-6 text-slate-500 text-sm">
              本文来自 {sourceLabel ?? "外部平台"}，点击下方按钮前往阅读完整内容。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                阅读原文（{sourceLabel}）
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                返回资源中心
              </Link>
            </div>
          </article>
        </main>
        <Footer />
      </>
    );
  }

  // 本站文章：展示正文占位
  return (
    <>
      <Header />
      <main className="pb-20">
        <article className="mx-auto max-w-3xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 font-medium text-cyan-700">
              {categoryLabel}
            </span>
            <time dateTime={post.date}>{post.date}</time>
            {post.author && <span>· {post.author}</span>}
          </div>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{post.title}</h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>
          <div className="mt-10 prose prose-slate max-w-none">
            <p className="text-slate-600">
              正文内容可在此处扩展，或接入 CMS / Markdown 渲染。当前为占位，后续可替换为真实文章内容。
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              返回资源中心
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              联系我们
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
