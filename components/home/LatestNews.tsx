import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/components/blog/blogData";
import type { BlogCategory } from "@/components/blog/blogData";

/** 首页最新动态：从资源中心「更新日志」取前三条（按日期倒序） */
const LATEST_CHANGELOG = BLOG_POSTS.filter((p) => p.category === "changelog")
  .sort((a, b) => (b.date > a.date ? 1 : -1))
  .slice(0, 3);

function getCategoryLabel(category: BlogCategory) {
  return BLOG_CATEGORIES.find((c) => c.value === category)?.label ?? category;
}

export function LatestNews() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              最新动态
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              产品发布、技术分享与行业动态，第一时间了解我们
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none focus:underline"
          >
            查看全部 →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LATEST_CHANGELOG.map((post) => (
            <Link
              key={post.id}
              href={post.externalUrl ?? `/blog/${post.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-md"
              {...(post.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <div className="flex items-center gap-2 text-sm">
                <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 font-medium text-cyan-700">
                  {getCategoryLabel(post.category)}
                </span>
                <time className="text-slate-500" dateTime={post.date}>
                  {post.date}
                </time>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-cyan-700">
                {post.title}
              </h3>
              <p className="mt-2 text-slate-600 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
