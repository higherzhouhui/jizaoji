import { Tx } from "@/components/i18n/Tx";
const ITEMS = [
  {
    title: "智能搜索推荐",
    points: [
      "语义理解：自然语言描述需求（如「适合小户型的白色冰箱」），智能推荐",
      "个性化推荐：基于用户行为，「千人百面」商品推荐",
    ],
  },
  {
    title: "AI 生成商品内容",
    points: [
      "一键生成商品 Listing 标题、描述、关键词",
      "多语言内容自动生成，助力跨境电商",
    ],
  },
  {
    title: "用户评论分析",
    points: [
      "自动分析海量评论，提炼产品改进点与用户痛点",
      "及时发现差评，辅助客服响应",
    ],
  },
  {
    title: "智能客服",
    points: [
      "7×24 小时 AI 客服处理常见咨询",
      "复杂问题转人工，支持视频客服",
    ],
  },
  {
    title: "销售预测与智能补货",
    points: [
      "基于时序大模型预测销量，准确度提升 10% 以上",
      "自动生成补货建议，防止积压或断货",
    ],
  },
];

export function ModuleAI() {
  return (
    <section id="module-ai" className="scroll-mt-20 py-20 sm:py-24 bg-raised border-y border-line">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <span className="text-sm font-semibold text-accent"><Tx>增值层</Tx></span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Tx>AI 智能应用</Tx>
          </h2>
          <p className="mt-4 text-mute max-w-2xl">
            <Tx>差异化竞争力：让搜索更懂用户、让内容自动生成、让运营更智能</Tx>
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-surface p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ink">{<Tx>{item.title}</Tx>}</h3>
              <ul className="mt-4 space-y-2 text-sm text-mute">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-accent shrink-0">•</span> {<Tx>{p}</Tx>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
