import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="极造极"
                width={200}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-2 text-lg font-semibold text-white">极造极信息科技有限公司</p>
            <p className="mt-1 text-sm text-slate-500">从 0 到 1，打造你的数字产品</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <Link href="/about" className="hover:text-white transition">关于我们</Link>
            <Link href="/products" className="hover:text-white transition">产品与服务</Link>
            <Link href="/cases" className="hover:text-white transition">案例展示</Link>
            <Link href="/tech" className="hover:text-white transition">技术优势</Link>
            <Link href="/blog" className="hover:text-white transition">资源中心</Link>
            <Link href="/jobs" className="hover:text-white transition">加入我们</Link>
            <Link href="/contact" className="hover:text-white transition">联系我们</Link>
          </div>
        </div>
        <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank" className="mt-8 pt-8 text-sm text-slate-500">
          © {year} 极造极信息科技有限公司 版权所有；渝ICP备2023007595号-2
        </a>
      </div>
    </footer>
  );
}
