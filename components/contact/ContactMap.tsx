const ADDRESS = "重庆市江北区观音桥红鼎国际";
const AMAP_SEARCH = "https://www.amap.com/search?query=" + encodeURIComponent(ADDRESS);
const BAIDU_SEARCH = "https://map.baidu.com/search?query=" + encodeURIComponent(ADDRESS);

export function ContactMap() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">办公地址</h2>
          <div className="flex gap-3">
            <a
              href={AMAP_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              高德地图
            </a>
            <a
              href={BAIDU_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              百度地图
            </a>
          </div>
        </div>
        <p className="mb-4 text-slate-600">重庆市江北区观音桥红鼎国际 3001</p>
        <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
          <a
            href={AMAP_SEARCH}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full w-full flex-col items-center justify-center text-slate-500 transition hover:bg-slate-200/50"
          >
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="mt-2 text-sm font-medium">点击打开地图（高德 / 百度）</span>
            <span className="mt-1 text-xs text-slate-400">可替换为嵌入 iframe 地图</span>
          </a>
        </div>
      </div>
    </section>
  );
}
