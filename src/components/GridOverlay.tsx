'use client';

import { useEffect, useState } from 'react';

/**
 * Overlay de debug grille (design.md §4.3).
 * - Toggle par la touche "g" ET par le paramètre d'URL ?grid=1.
 * - Affiche : 12 colonnes, marges du conteneur, baseline 8px.
 * - position: fixed ; pointer-events: none ; z-index: 9999.
 * - Désactivé par défaut, jamais visible en prod (sauf activation explicite).
 */
export default function GridOverlay() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    // Activation via ?grid=1 au chargement
    const params = new URLSearchParams(window.location.search);
    if (params.get('grid') === '1') setOn(true);

    const onKey = (e: KeyboardEvent) => {
      // Ignore quand on tape dans un champ
      const el = e.target as HTMLElement | null;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      if (e.key === 'g' || e.key === 'G') {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        setOn((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!on) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        // Baseline 8px : calque horizontal répété
        backgroundImage:
          'repeating-linear-gradient(to bottom, color-mix(in srgb, var(--bleu-klein) 8%, transparent) 0, color-mix(in srgb, var(--bleu-klein) 8%, transparent) 1px, transparent 1px, transparent var(--baseline))',
      }}
    >
      {/* Colonnes alignées sur le conteneur de page */}
      <div className="container-page h-full">
        <div className="grid-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-full"
              style={{
                background: 'color-mix(in srgb, var(--bleu-klein) 7%, transparent)',
                borderInline: '1px solid color-mix(in srgb, var(--bleu-klein) 16%, transparent)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Repère discret */}
      <div
        className="absolute left-2 top-2 font-sans"
        style={{
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--bleu-klein)',
          background: 'color-mix(in srgb, var(--creme) 80%, transparent)',
          padding: '2px 6px',
          borderRadius: 'var(--radius)',
        }}
      >
        grid · 12 col · 8px · « g » pour masquer
      </div>
    </div>
  );
}
