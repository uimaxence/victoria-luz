'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

/**
 * Apparition au scroll via IntersectionObserver (design.md §8).
 * Pose data-reveal="visible" une fois l'élément à l'écran.
 * Respect de prefers-reduced-motion géré en CSS (globals.css).
 */
type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number; // secondes
  className?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal', 'visible');
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            entry.target.setAttribute('data-reveal', '');
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as never}
      data-reveal=""
      className={className}
      style={{ ['--delay' as string]: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
