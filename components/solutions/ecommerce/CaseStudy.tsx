import Link from "next/link";

export function CaseStudy() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            成功案例
          </h2>
          <p className="mt-4 text-slate-600">
            用数据与效果说话，每个案例可配系统截图、数据看板与门店应用照片
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                客户背景
              </h3>
              <p className="mt-2">
                某家居品牌，线下 50+ 门店，线上有天猫店
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                核心痛点
              </h3>
              <p className="mt-2">
                线上线下库存不共享，爆款断货、积压并存
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                解决方案
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-slate-600">
                <li>搭建品牌小程序商城，对接天猫订单系统</li>
                <li>部署全渠道中台，实现库存实时同步</li>
                <li>门店开通「线上下单 - 门店自提」功能</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                实施效果
              </h3>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>• 库存周转天数从 45 天降至 28 天</li>
                <li>• 门店自提订单占比 30%，带来二次销售机会</li>
                <li>• 双 11 期间处理订单量同比增长 200%，系统 0 故障</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cases"
              className="inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              查看更多案例
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              获取定制方案
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
