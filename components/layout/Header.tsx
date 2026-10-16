"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LocaleSwitch } from "@/components/brand/LocaleSwitch";
import { ThemeSwitch } from "@/components/brand/ThemeSwitch";
import { Wordmark } from "@/components/brand/Wordmark";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { usePreferences } from "@/lib/preferences";
import { btnPrimary } from "@/lib/ui";

export function Header() {
  const pathname = usePathname() ?? "";
  const { t } = usePreferences();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const productItems = [
    { label: t.products.website, href: "/products#website" },
    { label: t.products.app, href: "/products#app" },
    { label: t.products.mini, href: "/products#miniprogram" },
    { label: t.products.uni, href: "/products#uniapp" },
    { label: t.products.ai, href: "/products#ai" },
  ];
  const solutionItems = [
    { label: t.solutions.ecom, href: "/solutions/ecommerce" },
    { label: t.solutions.edu, href: "/solutions/education" },
    { label: t.solutions.food, href: "/solutions/food" },
    { label: t.solutions.enterprise, href: "/solutions/enterprise" },
  ];
  const moreItems = [
    { label: t.nav.tech, href: "/tech" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.about, href: "/about" },
  ];

  const link = (href: string, label: string, active: boolean) => (
    <Link
      href={href}
      className={`text-sm transition hover:text-ink ${active ? "text-ink" : "text-mute"}`}
    >
      {label}
    </Link>
  );

  return (
    <>
      <header className="sticky top-0 z-[70] border-b border-line bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:px-6">
          <Wordmark />
          <nav className="hidden items-center gap-6 xl:flex" aria-label={t.a11y.main}>
            {link("/", t.nav.home, pathname === "/")}
            <NavDropdown
              label={t.nav.services}
              items={productItems}
              active={pathname.startsWith("/products")}
              pathname={pathname}
            />
            {link("/cases", t.nav.cases, pathname.startsWith("/cases"))}
            {link("/pricing", t.nav.pricing, pathname.startsWith("/pricing"))}
            {link("/#work", t.nav.work, false)}
            <NavDropdown
              label={t.nav.solutions}
              items={solutionItems}
              active={pathname.startsWith("/solutions")}
              pathname={pathname}
            />
            <NavDropdown
              label={t.nav.more}
              items={moreItems}
              active={["/tech", "/blog", "/about"].some((path) => pathname.startsWith(path))}
              pathname={pathname}
            />
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <LocaleSwitch />
            </div>
            <ThemeSwitch />
            <Link href="/contact" className={`${btnPrimary} hidden lg:inline-flex px-4`}>
              {t.headerCta}
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink xl:hidden"
              aria-expanded={open}
              aria-label={open ? t.a11y.closeMenu : t.a11y.menu}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? t.a11y.closeMenu : t.a11y.menu}</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? (
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h12" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-[80] flex flex-col bg-canvas xl:hidden">
          <div className="flex h-16 items-center justify-between border-b border-line px-5">
            <Wordmark compact />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line"
              onClick={() => setOpen(false)}
              aria-label={t.a11y.closeMenu}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div className="flex-1 space-y-8 overflow-y-auto px-5 py-8">
            <div className="flex flex-col gap-4 text-2xl font-semibold tracking-tight">
              <Link href="/">{t.nav.home}</Link>
              <Link href="/#services">{t.nav.services}</Link>
              <Link href="/cases">{t.nav.cases}</Link>
              <Link href="/pricing">{t.nav.pricing}</Link>
              <Link href="/#work">{t.nav.work}</Link>
              <Link href="/contact">{t.nav.contact}</Link>
              <Link href="/about">{t.nav.about}</Link>
            </div>
            <div className="grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs tracking-wide text-mute">{t.nav.products}</p>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  {productItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-ink">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs tracking-wide text-mute">{t.nav.solutions}</p>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  {solutionItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-ink">
                      {item.label}
                    </Link>
                  ))}
                  {moreItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-mute">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 border-t border-line pt-6">
              <LocaleSwitch />
              <ThemeSwitch labelled />
            </div>
          </div>
          <div className="border-t border-line p-5">
            <Link href="/contact" className={`${btnPrimary} w-full`}>
              {t.headerCta}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
