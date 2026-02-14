const ADDRESS = "重庆市江北区观音桥红鼎国际3001";
const AMAP_SEARCH = "https://www.amap.com/search?query=" + encodeURIComponent("重庆市江北区观音桥红鼎国际");

export function ContactInfo() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
      <h3 className="text-lg font-semibold text-slate-900">联系方式</h3>
      <ul className="mt-4 space-y-4 text-slate-600">
        <li className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </span>
          <div>
            <p className="font-medium text-slate-700">电话</p>
            <a href="tel:18516010812" className="text-cyan-600 hover:text-cyan-700">
              18516010812
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </span>
          <div>
            <p className="font-medium text-slate-700">邮箱</p>
            <a href="mailto:zhou782492184@gmail.com" className="text-cyan-600 hover:text-cyan-700">
              zhou782492184@gmail.com
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </span>
          <div>
            <p className="font-medium text-slate-700">办公地址</p>
            <p className="mt-1">{ADDRESS}</p>
            <a
              href={AMAP_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center text-sm text-cyan-600 hover:text-cyan-700"
            >
              打开地图
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          </span>
          <div>
            <p className="font-medium text-slate-700">QQ</p>
            <a href="https://wpa.qq.com/msgrd?v=3&uin=782492184&site=qq&menu=yes" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">
              782492184
            </a>
            <p className="mt-1 text-xs text-slate-500">点击发起 QQ 临时会话</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
