"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Item = { label: string; href: string };

export function NavDropdown({
  label,
  items,
  active = false,
  pathname = "",
}: {
  label: string;
  items: Item[];
  active?: boolean;
  pathname?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`flex max-w-[7.5rem] min-w-0 items-center gap-0.5 text-[11px] leading-snug transition hover:text-ink xl:max-w-[8.5rem] xl:text-xs 2xl:max-w-[10rem] 2xl:gap-1 2xl:text-sm ${active ? "text-ink" : "text-mute"}`}
        title={label}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="min-w-0 truncate text-pretty [overflow-wrap:anywhere]">{label}</span>
        <svg className={`h-3.5 w-3.5 shrink-0 transition ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-20 pt-2">
          <div className="min-w-[12rem] max-w-[min(100vw-2rem,18rem)] rounded-2xl border border-line bg-surface py-2 shadow-ticket">
            {items.map((item) => {
              const isItemActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={item.label}
                  className={`block px-4 py-2.5 text-pretty text-sm leading-snug transition hover:bg-raised [overflow-wrap:anywhere] ${
                    isItemActive ? "text-ink" : "text-mute hover:text-ink"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
