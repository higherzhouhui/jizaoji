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
        className={`flex items-center gap-1 text-sm transition hover:text-ink ${active ? "text-ink" : "text-mute"}`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-20 pt-2">
          <div className="min-w-[220px] rounded-2xl border border-line bg-surface py-2 shadow-ticket">
            {items.map((item) => {
              const isItemActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2.5 text-sm transition hover:bg-raised ${
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
