"use client";

import { useState } from "react";
import { Tx } from "@/components/i18n/Tx";

const MATRIX = [
  {
    id: "digital",
    name: "数字阵地建设",
    tagline: "企业数字化入口",
    scene: "官网 / APP / 小程序开发",
    detail: "从官网到 APP、小程序，一站式建设企业数字阵地，统一品牌与用户体验。",
  },
  {
    id: "cross",
    name: "跨端开发引擎",
    tagline: "一次开发，多端运行",
    scene: "uni-app 跨平台项目",
    detail: "基于 Vue 语法，一套代码发布 iOS、Android、Web 及各家小程序，大幅降低多端维护成本。",
  },
  {
    id: "ai",
    name: "智能应用工场",
    tagline: "AI 驱动业务创新",
    scene: "AI 工具 / 智能应用开发",
    detail: "大模型接入、图像识别、NLP 等能力封装，快速落地 AI 客服、智能推荐、内容生成等场景。",
  },
];

export function ProductArchitecture() {
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden border-b border-line bg-canvas py-20 sm:py-28">
      <div className="studio-grid absolute inset-0 opacity-40" />
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>产品架构</Tx>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-mute [overflow-wrap:anywhere]">
            <Tx>三大产品矩阵，覆盖从数字阵地到智能应用的全链路能力</Tx>
          </p>
        </div>

        {/* 架构图：三块 + 连接线（科技蓝） */}
        <div className="grid gap-6 sm:grid-cols-3">
          {MATRIX.map((item) => {
            const isHover = hoverId === item.id;
            return (
              <div
                key={item.id}
                id={item.id}
                onMouseEnter={() => setHoverId(item.id)}
                onMouseLeave={() => setHoverId(null)}
                className={`group relative min-w-0 rounded-2xl border-2 bg-raised/80 p-6 backdrop-blur transition-all duration-300 ${
                  isHover ? "border-accent shadow-[0_0_40px_rgb(var(--accent)/0.18)]" : "border-line"
                }`}
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
                <h3 className="text-pretty text-lg font-bold leading-snug text-ink [overflow-wrap:anywhere]">
                  {<Tx>{item.name}</Tx>}
                </h3>
                <p className="mt-1 text-pretty text-sm text-accent [overflow-wrap:anywhere]">{<Tx>{item.tagline}</Tx>}</p>
                <p className="mt-3 text-pretty text-sm text-mute [overflow-wrap:anywhere]">{<Tx>{item.scene}</Tx>}</p>
                {isHover && (
                  <p className="mt-4 border-t border-line pt-4 text-pretty text-sm leading-relaxed text-mute [overflow-wrap:anywhere]">
                    {<Tx>{item.detail}</Tx>}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-mute">
          <Tx>悬停模块可查看详情</Tx>
        </p>
      </div>
    </section>
  );
}
