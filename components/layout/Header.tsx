"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavDropdown } from "./NavDropdown";

const PRODUCTS_ITEMS = [
  { label: "网站搭建", href: "/products#website" },
  { label: "APP开发", href: "/products#app" },
  { label: "微信小程序", href: "/products#miniprogram" },
  { label: "uni-app跨端开发", href: "/products#uniapp" },
  { label: "AI工具开发", href: "/products#ai" },
];

const SOLUTIONS_ITEMS = [
  { label: "电商/零售", href: "/solutions/ecommerce" },
  { label: "教育/培训", href: "/solutions/education" },
  { label: "餐饮/生活服务", href: "/solutions/food" },
  { label: "企业/办公", href: "/solutions/enterprise" },
];

function navLinkClass(active: boolean) {
  return `text-sm font-medium transition hover:text-white ${active ? "text-white" : "text-slate-400"}`;
}

export function Header() {
  const pathname = usePathname() ?? "";

  const isHome = pathname === "/";
  const isProducts = pathname === "/products" || pathname.startsWith("/products");
  const isSolutions = pathname.startsWith("/solutions");
  const isCases = pathname === "/cases" || pathname.startsWith("/cases/");
  const isTech = pathname === "/tech";
  const isBlog = pathname === "/blog" || pathname.startsWith("/blog/");
  const isAbout = pathname === "/about";
  const isJobs = pathname === "/jobs";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="极造极"
            width={120}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden sm:flex items-center gap-6 lg:gap-8">
          <Link href="/" className={navLinkClass(isHome)}>
            首页
          </Link>
          <NavDropdown label="产品与服务" items={PRODUCTS_ITEMS} active={isProducts} pathname={pathname} />
          <NavDropdown label="解决方案" items={SOLUTIONS_ITEMS} active={isSolutions} pathname={pathname} />
          <Link href="/cases" className={navLinkClass(isCases)}>
            案例展示
          </Link>
          <Link href="/tech" className={navLinkClass(isTech)}>
            技术优势
          </Link>
          <Link href="/blog" className={navLinkClass(isBlog)}>
            资源中心
          </Link>
          <Link href="/about" className={navLinkClass(isAbout)}>
            关于我们
          </Link>
          <Link href="/jobs" className={navLinkClass(isJobs)}>
            加入我们
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            免费咨询
          </Link>
        </div>
      </div>
    </header>
  );
}
