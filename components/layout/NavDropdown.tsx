"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

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
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const buttonClass = `flex items-center gap-1 text-sm font-medium transition hover:text-white focus:outline-none ${active ? "text-white" : "text-slate-400"}`;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={buttonClass}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          className="absolute left-0 top-full pt-2"
          onMouseLeave={() => setOpen(false)}
        >
          <div className="min-w-[200px] rounded-lg border border-slate-700 bg-slate-900/95 py-2 shadow-xl backdrop-blur">
            {items.map((item) => {
              const isItemActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2.5 text-sm transition hover:bg-slate-800 hover:text-white ${isItemActive ? "bg-slate-800/80 text-white" : "text-slate-300"}`}
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
