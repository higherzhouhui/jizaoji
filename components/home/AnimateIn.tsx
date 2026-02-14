"use client";

import { useRef, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** 触发动画的可见比例，0–1 */
  threshold?: number;
  /** 根边距，提前/延后触发 */
  rootMargin?: string;
  /** 额外类名 */
  className?: string;
};

export function AnimateIn({
  children,
  threshold = 0.08,
  rootMargin = "0px 0px -8% 0px",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`animate-in-view ${inView ? "in-view" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
