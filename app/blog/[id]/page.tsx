import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { BLOG_POSTS } from "@/components/blog/blogData";
import { BLOG_CATEGORIES } from "@/components/blog/blogData";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Tx } from "@/components/i18n/Tx";

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
  if (!post)
    return buildPageMetadata({ title: "资源中心", description: "极造极资源中心", path: "/blog" });
  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${id}`,
    image: null,
  });
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
          <h1 className="text-2xl font-bold text-ink"><Tx>文章不存在</Tx></h1>
          <Link href="/blog" className="mt-4 text-accent hover:text-accent">
            <Tx>返回资源中心</Tx>
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
            <div className="flex flex-wrap items-center gap-2 text-sm text-mute">
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-medium text-accent">
                {<Tx>{categoryLabel}</Tx>}
              </span>
              <time dateTime={post.date}>{post.date}</time>
              {sourceLabel && (
                <span className="rounded-full bg-raised px-2.5 py-0.5 font-medium text-mute">
                  {<Tx>{sourceLabel}</Tx>}
                </span>
              )}
            </div>
            <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{<Tx>{post.title}</Tx>}</h1>
            <p className="mt-6 text-lg text-mute leading-relaxed">{<Tx>{post.excerpt}</Tx>}</p>
            <p className="mt-6 text-sm text-mute">
              <Tx>本文来自</Tx> {<Tx>{sourceLabel ?? "外部平台"}</Tx>}
              <Tx>，点击下方按钮前往阅读完整内容。</Tx>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-ink transition hover:opacity-90"
              >
                <Tx>阅读原文</Tx>{sourceLabel ? <> ({<Tx>{sourceLabel}</Tx>})</> : null}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg border border-line px-6 py-3 text-base font-semibold text-ink transition hover:bg-raised"
              >
                <Tx>返回资源中心</Tx>
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
          <div className="flex flex-wrap items-center gap-2 text-sm text-mute">
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-medium text-accent">
              {<Tx>{categoryLabel}</Tx>}
            </span>
            <time dateTime={post.date}>{post.date}</time>
            {post.author && <span>· {<Tx>{post.author}</Tx>}</span>}
          </div>
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{<Tx>{post.title}</Tx>}</h1>
          <p className="mt-6 text-lg text-mute leading-relaxed">{<Tx>{post.excerpt}</Tx>}</p>
          <div className="mt-10 max-w-none">
            <p className="text-mute">
              <Tx>完整正文可在此处接入 Markdown 或 CMS 渲染；当前仅展示摘要，更多内容敬请期待。</Tx>
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:bg-raised"
            >
              <Tx>返回资源中心</Tx>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition hover:opacity-90"
            >
              <Tx>联系我们</Tx>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
