"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogCategory } from "./blogData";
import { Tx } from "@/components/i18n/Tx";

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
    <section className="py-12 sm:py-16 bg-raised border-b border-line">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap gap-2 mb-10">
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => setCategory(c.value)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                category === c.value
                  ? "bg-accent text-accent-ink"
                  : "bg-surface border border-line text-mute hover:border-accent/40 hover:bg-accent/10"
              }`}
            >
              {<Tx>{c.label}</Tx>}
            </button>
          ))}
        </div>
        <ul className="space-y-6">
          {filtered.map((post) => {
            const isExternal = !!post.externalUrl;
            const sourceLabel = post.source ? SOURCE_LABEL[post.source] : null;
            const cardClass =
              "block rounded-2xl border border-line bg-surface p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md";

            return (
              <li key={post.id}>
                {isExternal ? (
                  <div className={cardClass}>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-mute">
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-medium text-accent">
                        {<Tx>{BLOG_CATEGORIES.find((x) => x.value === post.category)?.label ?? post.category}</Tx>}
                      </span>
                      <time dateTime={post.date}>{post.date}</time>
                      {post.author && <span>· {<Tx>{post.author}</Tx>}</span>}
                      {sourceLabel && (
                        <span className="rounded-full bg-raised px-2.5 py-0.5 font-medium text-mute">
                          {<Tx>{sourceLabel}</Tx>}
                        </span>
                      )}
                    </div>
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <h2 className="mt-3 text-xl font-semibold text-ink group-hover:text-accent">
                        {<Tx>{post.title}</Tx>}
                      </h2>
                      <p className="mt-2 text-mute line-clamp-2">{<Tx>{post.excerpt}</Tx>}</p>
                      <span className="mt-3 inline-flex items-center text-sm font-medium text-accent group-hover:text-accent">
                        <Tx>阅读原文</Tx>
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  </div>
                ) : (
                  <Link href={`/blog/${post.id}`} className={cardClass}>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-mute">
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-medium text-accent">
                        {<Tx>{BLOG_CATEGORIES.find((x) => x.value === post.category)?.label ?? post.category}</Tx>}
                      </span>
                      <time dateTime={post.date}>{post.date}</time>
                      {post.author && <span>· {<Tx>{post.author}</Tx>}</span>}
                      {sourceLabel && (
                        <span className="rounded-full bg-raised px-2.5 py-0.5 font-medium text-mute">
                          {<Tx>{sourceLabel}</Tx>}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-3 text-xl font-semibold text-ink group-hover:text-accent">
                      {<Tx>{post.title}</Tx>}
                    </h2>
                    <p className="mt-2 text-mute line-clamp-2">{<Tx>{post.excerpt}</Tx>}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-accent group-hover:text-accent">
                      <Tx>查看详情</Tx>
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        {filtered.length === 0 && (
          <p className="py-12 text-center text-mute"><Tx>暂无该分类下的内容</Tx></p>
        )}
      </div>
    </section>
  );
}
