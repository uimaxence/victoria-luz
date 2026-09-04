'use client';

import Image from 'next/image';
import { useCursorFollow } from './useCursorFollow';

const Play = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export type Episode = {
  num: string;
  title: string;
  guest: string;
  excerpt: string;
  image: string;
  /** Lien direct vers l'épisode ; à défaut, la carte renvoie vers la chaîne. */
  url?: string;
};

/**
 * Carte d'extrait de podcast, cliquable vers YouTube (l'épisode si `ep.url`
 * est renseigné, sinon la chaîne).
 * Desktop : pas de bouton par défaut ; au survol, une pastille « verre » suit le
 * curseur. Tactile : bouton classique en bas de carte.
 */
export default function PodcastCard({
  ep,
  youtube,
  cardSize,
}: {
  ep: Episode;
  youtube: string;
  cardSize: string;
}) {
  const { areaRef, pillRef, fine, hover, bind } = useCursorFollow<HTMLAnchorElement>();
  const href = ep.url ?? youtube;

  return (
    <article className={`group relative shrink-0 snap-start ${cardSize}`}>
      <a
        ref={areaRef}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Écouter « ${ep.title} » (${ep.guest}) sur YouTube`}
        className="block h-full w-full"
        {...bind}
      >
        <div className="relative h-full w-full overflow-hidden rounded-token bg-marron">
          <Image
            src={ep.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 80vw, 28rem"
            className="object-cover transition-transform duration-[var(--dur-3)] ease-soft group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-chocolat via-chocolat/30 to-transparent"
          />
          <span className="absolute left-5 top-4 font-display text-h2 text-text-invert">
            {ep.num}
          </span>
          <div className="absolute inset-x-5 bottom-5">
            <p className="t-surtitre text-text-invert-muted">{ep.guest}</p>
            <h3 className="mt-2 t-h3 font-display text-creme">{ep.title}</h3>
            <p className="mt-3 max-w-[34ch] text-small text-text-invert">{ep.excerpt}</p>
            {/* Bouton classique, seulement sur tactile (desktop = pastille au survol) */}
            {!fine && (
              <span
                className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-small font-medium uppercase tracking-[0.14em] text-chocolat"
                style={{ backgroundColor: 'rgba(255,242,237,0.94)' }}
              >
                <Play /> Voir sur YouTube
              </span>
            )}
          </div>
        </div>

        {/* Pastille « verre » qui suit le curseur (desktop, au survol) */}
        {fine && (
          <span
            ref={pillRef}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-[2] inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-small font-medium uppercase tracking-[0.14em] text-creme shadow-lg backdrop-blur-md transition-opacity duration-200"
            style={{
              backgroundColor: 'rgba(255,242,237,0.14)',
              border: '1px solid rgba(255,242,237,0.4)',
              opacity: hover ? 1 : 0,
            }}
          >
            <Play /> Voir sur YouTube
          </span>
        )}
      </a>
    </article>
  );
}
