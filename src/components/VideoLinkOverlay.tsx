'use client';

import { useCursorFollow } from './useCursorFollow';

const Play = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M8 5v14l11-7z" />
  </svg>
);

/**
 * Recouvre la vidéo hero d'un lien vers l'épisode.
 * Desktop : un bouton plein centré par défaut, qui au survol de la vidéo devient
 * « verre » (translucide, glassmorphisme) et suit le curseur.
 * Tactile : bouton classique centré, statique.
 */
export default function VideoLinkOverlay({ href, label }: { href: string; label: string }) {
  const { areaRef, pillRef, fine, hover, bind } = useCursorFollow<HTMLAnchorElement>();

  return (
    <a
      ref={areaRef}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="absolute inset-0 z-[3]"
      {...bind}
    >
      {fine ? (
        <>
          {/* Bouton plein, centré, visible tant qu'on ne survole pas */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-small font-medium uppercase tracking-[0.14em] text-chocolat shadow-lg transition-opacity duration-200"
            style={{ backgroundColor: 'rgba(255,242,237,0.94)', opacity: hover ? 0 : 1 }}
          >
            <Play /> {label}
          </span>
          {/* Pastille « verre » qui suit le curseur (au survol) */}
          <span
            ref={pillRef}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-small font-medium uppercase tracking-[0.14em] text-creme shadow-lg backdrop-blur-md transition-opacity duration-200"
            style={{
              backgroundColor: 'rgba(255,242,237,0.14)',
              border: '1px solid rgba(255,242,237,0.4)',
              opacity: hover ? 1 : 0,
            }}
          >
            <Play /> {label}
          </span>
        </>
      ) : (
        <span
          className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-small font-medium uppercase tracking-[0.14em] text-chocolat shadow-lg"
          style={{ backgroundColor: 'rgba(255,242,237,0.94)' }}
        >
          <Play /> {label}
        </span>
      )}
    </a>
  );
}
