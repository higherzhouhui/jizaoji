"use client";

import { useState } from "react";

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
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            产品架构
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            三大产品矩阵，覆盖从数字阵地到智能应用的全链路能力
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
                className="group relative rounded-2xl border-2 bg-slate-900/80 p-6 backdrop-blur transition-all duration-300"
                style={{
                  borderColor: isHover ? "rgb(34, 211, 238)" : "rgba(51, 65, 85, 0.8)",
                  boxShadow: isHover ? "0 0 40px rgba(34, 211, 238, 0.15)" : "none",
                }}
              >
                <div className="h-1 w-12 rounded-full bg-cyan-500 mb-4" />
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-cyan-400">{item.tagline}</p>
                <p className="mt-3 text-sm text-slate-400">{item.scene}</p>
                {isHover && (
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-slate-700 pt-4">
                    {item.detail}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          悬停模块可查看详情
        </p>
      </div>
    </section>
  );
}
