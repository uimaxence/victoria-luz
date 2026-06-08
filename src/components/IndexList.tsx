'use client';

import Link from 'next/link';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';

/**
 * Liste index (design.md §4.2 editorial-index / §6) :
 * (0n) numéro · titre Solea à gauche · description Work Sans à droite,
 * filet --line pleine largeur. Hover : léger glissement + accent.
 *
 * Curseur-image (design.md §8) : sur appareil à survol fin, le curseur natif
 * est masqué et remplacé par une vignette qui suit la souris ; chaque ligne
 * affiche son propre visuel (champ `image`). Désactivé au tactile / reduced-motion.
 */

type IndexItem = {
  num: string;
  title: string;
  desc: string;
  href: string;
  image?: string;
};

export default function IndexList({ items }: { items: readonly IndexItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const followerRef = useRef<HTMLDivElement>(null);

  // Le curseur-image n'a de sens qu'avec un pointeur fin + survol, hors reduced-motion.
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(fine && !reduce);
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    const el = followerRef.current;
    if (!el) return;
    // Position via variables CSS → laisse React gérer `transform` sans conflit.
    el.style.setProperty('--cx', `${e.clientX}px`);
    el.style.setProperty('--cy', `${e.clientY}px`);
  };

  const hasImages = items.some((it) => it.image);

  return (
    <div className="relative" onMouseMove={enabled ? handleMove : undefined}>
      <ul className="border-t border-line">
        {items.map((item, i) => (
          <li key={item.num} className="border-b border-line">
            <Link
              href={item.href}
              onMouseEnter={enabled ? () => setActive(i) : undefined}
              onMouseLeave={enabled ? () => setActive(null) : undefined}
              className="group grid grid-cols-1 items-baseline gap-2 py-8 transition-colors duration-[var(--dur-1)] ease-soft md:grid-cols-12 md:gap-gutter md:py-10"
            >
              {/* numéro */}
              <span className="t-surtitre md:col-span-1 md:pt-2">({item.num})</span>

              {/* titre */}
              <span className="t-h3 col-span-1 font-display text-chocolat transition-transform duration-[var(--dur-1)] ease-soft group-hover:translate-x-2 group-hover:text-bleu-klein md:col-span-6">
                {item.title}
              </span>

              {/* description */}
              <span className="t-body col-span-1 max-w-prose text-text-muted md:col-span-4">
                {item.desc}
              </span>

              {/* flèche */}
              <span
                aria-hidden
                className="hidden text-h3 text-bleu-klein opacity-0 transition-all duration-[var(--dur-1)] ease-soft group-hover:translate-x-1 group-hover:opacity-100 md:col-span-1 md:block md:justify-self-end"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Vignette curseur, rendue via portal sur <body> pour échapper à tout
          ancêtre transformé (Reveal `will-change: transform` créerait sinon un
          bloc conteneur qui fausse le `position: fixed`). Couche externe : position
          collée au curseur (sans transition → pas de traîne). Couche interne :
          seule la révélation (scale/opacité) est animée. */}
      {enabled &&
        hasImages &&
        createPortal(
          <div
            ref={followerRef}
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-[60]"
            style={{ transform: 'translate(var(--cx, -300px), var(--cy, -300px))' }}
          >
            <div
              className="overflow-hidden rounded-token shadow-[0_18px_40px_-12px_rgba(59,23,18,0.45)]"
              style={{
                width: '240px',
                height: '300px',
                // léger décalage : la vignette se pose juste sous/à droite du curseur
                marginLeft: '18px',
                marginTop: '18px',
                opacity: active !== null ? 1 : 0,
                transform: `scale(${active !== null ? 1 : 0.7}) rotate(-4deg)`,
                transformOrigin: 'top left',
                transition:
                  'opacity 0.3s var(--ease-soft), transform 0.35s var(--ease-soft)',
                willChange: 'transform, opacity',
              }}
            >
              {items.map((item, i) =>
                item.image ? (
                  <Image
                    key={item.num}
                    src={item.image}
                    alt=""
                    fill
                    sizes="240px"
                    className="object-cover transition-opacity duration-300 ease-soft"
                    style={{ opacity: active === i ? 1 : 0 }}
                  />
                ) : null,
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
