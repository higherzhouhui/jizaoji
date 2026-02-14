/** 国内外二三线客户与伙伴（展示用，可按实际合作替换） */
const PARTNERS = [
  // 国内
  { name: "永辉超市", width: 100 },
  { name: "喜茶", width: 80 },
  { name: "奈雪的茶", width: 100 },
  { name: "三只松鼠", width: 100 },
  { name: "同程旅行", width: 100 },
  { name: "马蜂窝", width: 90 },
  { name: "名创优品", width: 100 },
  { name: "蜜雪冰城", width: 100 },
  { name: "西贝莜面村", width: 110 },
  { name: "猿辅导", width: 90 },
  // 国际
  { name: "Shopify", width: 95 },
  { name: "Zendesk", width: 95 },
  { name: "Dropbox", width: 95 },
  { name: "Notion", width: 85 },
  { name: "HubSpot", width: 95 },
  { name: "Canva", width: 85 },
  { name: "Asana", width: 85 },
  { name: "Twilio", width: 85 },
];

export function LogoWall() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 mb-10">
          信任我们的客户与伙伴
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              style={{ width: partner.width }}
            >
              <div className="h-10 w-full rounded-lg bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-medium">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
