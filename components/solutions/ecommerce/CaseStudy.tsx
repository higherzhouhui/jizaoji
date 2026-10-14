import Link from "next/link";
import { Tx } from "@/components/i18n/Tx";

export function CaseStudy() {
  return (
    <section className="py-20 sm:py-24 bg-raised border-y border-line">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>成功案例</Tx>
          </h2>
          <p className="mt-4 text-mute">
            <Tx>用数据与效果说话，每个案例可配系统截图、数据看板与门店应用照片</Tx>
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-8 shadow-sm">
          <div className="space-y-6 text-ink">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-mute">
                <Tx>客户背景</Tx>
              </h3>
              <p className="mt-2">
                <Tx>某家居品牌，线下 50+ 门店，线上有天猫店</Tx>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-mute">
                <Tx>核心痛点</Tx>
              </h3>
              <p className="mt-2">
                <Tx>线上线下库存不共享，爆款断货、积压并存</Tx>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-mute">
                <Tx>解决方案</Tx>
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-mute">
                <li><Tx>搭建品牌小程序商城，对接天猫订单系统</Tx></li>
                <li><Tx>部署全渠道中台，实现库存实时同步</Tx></li>
                <li><Tx>门店开通「线上下单 - 门店自提」功能</Tx></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-mute">
                <Tx>实施效果</Tx>
              </h3>
              <ul className="mt-2 space-y-1 text-mute">
                <li><Tx>• 库存周转天数从 45 天降至 28 天</Tx></li>
                <li><Tx>• 门店自提订单占比 30%，带来二次销售机会</Tx></li>
                <li><Tx>• 双 11 期间处理订单量同比增长 200%，系统 0 故障</Tx></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cases"
              className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition hover:opacity-90"
            >
              <Tx>查看更多案例</Tx>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:bg-raised"
            >
              <Tx>获取定制方案</Tx>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
