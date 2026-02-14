"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export function TopProgressBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [percent, setPercent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const completeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (completeRef.current) {
      clearTimeout(completeRef.current);
      completeRef.current = null;
    }
  };

  // 点击站内链接时启动进度条
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.rel?.includes("external")) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href.startsWith("/") || (typeof window !== "undefined" && new URL(href, window.location.origin).origin === window.location.origin)) {
        setVisible(true);
        setPercent(0);
        clearTimers();
        timerRef.current = setTimeout(() => setPercent(72), 100);
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      clearTimers();
    };
  }, []);

  // 路由变化时完成并隐藏
  useEffect(() => {
    if (!visible) return;
    setPercent(100);
    clearTimers();
    completeRef.current = setTimeout(() => {
      setVisible(false);
      setPercent(0);
    }, 220);
    return clearTimers;
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-0.5 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.6)] transition-[width] duration-150 ease-out"
      style={{ width: `${percent}%` }}
      aria-hidden
    />
  );
}
