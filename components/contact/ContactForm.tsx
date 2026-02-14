"use client";

import { useState } from "react";

type Props = { initialPosition?: string };

export function ContactForm({ initialPosition }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 后续可对接 API 或邮件服务
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-cyan-50/50 p-8 text-center">
        <p className="text-lg font-semibold text-slate-900">提交成功</p>
        <p className="mt-2 text-slate-600">我们会尽快与您联系。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {initialPosition && (
        <p className="rounded-lg bg-cyan-50 px-4 py-2 text-sm text-cyan-800">
          意向职位：<span className="font-medium">{initialPosition}</span>
        </p>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          姓名 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          placeholder="您的姓名"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700">
          公司
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          placeholder="公司名称（选填）"
        />
      </div>
      <div>
        <label htmlFor="need" className="block text-sm font-medium text-slate-700">
          需求 <span className="text-red-500">*</span>
        </label>
        <select
          id="need"
          name="need"
          required
          className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
        >
          <option value="">请选择</option>
          <option value="website">网站搭建</option>
          <option value="app">APP 开发</option>
          <option value="miniprogram">微信小程序</option>
          <option value="uniapp">uni-app 跨端开发</option>
          <option value="ai">AI 工具开发</option>
          <option value="solution">行业解决方案咨询</option>
          <option value="other">其他</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          简要说明
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          defaultValue={initialPosition ? `意向职位：${initialPosition}\n\n` : undefined}
          className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          placeholder="请简要描述您的需求（选填）"
        />
      </div>
      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-slate-700">
          联系方式 <span className="text-red-500">*</span>
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          placeholder="手机号或邮箱"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-cyan-500 px-4 py-3 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
      >
        提交
      </button>
    </form>
  );
}
