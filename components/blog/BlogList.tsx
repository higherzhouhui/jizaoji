"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogCategory } from "./blogData";

const SOURCE_LABEL: Record<string, string> = {
  juejin: "掘金",
  csdn: "CSDN",
};

export function BlogList() {
  const [category, setCategory] = useState<BlogCategory>("all");

  const filtered = useMemo(() => {
    if (category === "all") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.category === category);
  }, [category]);

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap gap-2 mb-10">
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => setCategory(c.value)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                category === c.value
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-cyan-200 hover:bg-cyan-50/50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <ul className="space-y-6">
          {filtered.map((post) => {
            const isExternal = !!post.externalUrl;
            const sourceLabel = post.source ? SOURCE_LABEL[post.source] : null;
            const Wrapper = isExternal ? "div" : Link;
            const wrapperProps = isExternal
              ? { className: "block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-md" }
              : { href: `/blog/${post.id}`, className: "block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-md" };

            return (
              <li key={post.id}>
                <Wrapper {...wrapperProps}>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 font-medium text-cyan-700">
                      {BLOG_CATEGORIES.find((x) => x.value === post.category)?.label ?? post.category}
                    </span>
                    <time dateTime={post.date}>{post.date}</time>
                    {post.author && <span>· {post.author}</span>}
                    {sourceLabel && (
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-slate-600">
                        {sourceLabel}
                      </span>
                    )}
                  </div>
                  {isExternal ? (
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <h2 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-cyan-700">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-slate-600 line-clamp-2">{post.excerpt}</p>
                      <span className="mt-3 inline-flex items-center text-sm font-medium text-cyan-600 group-hover:text-cyan-700">
                        阅读原文
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  ) : (
                    <>
                      <h2 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-cyan-700">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-slate-600 line-clamp-2">{post.excerpt}</p>
                      <span className="mt-3 inline-flex items-center text-sm font-medium text-cyan-600 group-hover:text-cyan-700">
                        查看详情
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </>
                  )}
                </Wrapper>
              </li>
            );
          })}
        </ul>
        {filtered.length === 0 && (
          <p className="py-12 text-center text-slate-500">暂无该分类下的内容</p>
        )}
      </div>
    </section>
  );
}
