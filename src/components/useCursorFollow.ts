'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';

/**
 * Suit le curseur : fournit de quoi câbler une zone survolable (`areaRef`) et une
 * pastille (`pillRef`) qui se positionne exactement sur le curseur. Actif seulement
 * sur les appareils à pointeur fin (desktop) ; sur tactile, `fine` reste faux et on
 * retombe sur un bouton statique classique.
 */
export function useCursorFollow<T extends HTMLElement>() {
  const areaRef = useRef<T>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const [fine, setFine] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const upd = () => setFine(mq.matches);
    upd();
    mq.addEventListener('change', upd);
    return () => mq.removeEventListener('change', upd);
  }, []);

  const move = (e: MouseEvent) => {
    const area = areaRef.current;
    const pill = pillRef.current;
    if (!area || !pill) return;
    const r = area.getBoundingClientRect();
    pill.style.transform = `translate(${e.clientX - r.left}px, ${e.clientY - r.top}px) translate(-50%, -50%)`;
  };

  const bind = fine
    ? {
        onMouseEnter: (e: MouseEvent) => {
          setHover(true);
          move(e);
        },
        onMouseLeave: () => setHover(false),
        onMouseMove: move,
      }
    : {};

  return { areaRef, pillRef, fine, hover, bind };
}
