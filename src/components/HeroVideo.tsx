'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Pendant vidéo de `HeroImage` : même révélation « en 4 colonnes » (design.md §8),
 * mais le fond est une vidéo en lecture automatique, en boucle (extrait d'épisode
 * du podcast). La taille de la boîte est pilotée par le parent via `className`
 * (ex. `h-full w-full`, ou `aspect-[3/4] w-full`).
 *
 * `sound` : affiche un petit bouton son. Les navigateurs exigent une vidéo muette
 * pour l'autoplay : on démarre donc muet, et le bouton réactive le son à volume bas.
 */

const COLS = 4;
/** Volume discret quand la visiteuse active le son. */
const LOW_VOLUME = 0.18;

type HeroVideoProps = {
  src: string;
  poster?: string;
  /** Texte alternatif décrivant la vidéo (accessibilité). */
  label?: string;
  objectPosition?: string;
  className?: string;
  /** Affiche un bouton pour activer / couper le son (volume bas). */
  sound?: boolean;
};

export default function HeroVideo({
  src,
  poster,
  label,
  objectPosition = 'center 30%',
  className = '',
  sound = false,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // Garantit l'autoplay : `muted` doit être une propriété (pas seulement un
  // attribut) pour que les navigateurs autorisent la lecture automatique.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.volume = LOW_VOLUME;
    const play = v.play();
    if (play && typeof play.catch === 'function') play.catch(() => {});
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    if (!next) {
      v.volume = LOW_VOLUME;
      const play = v.play();
      if (play && typeof play.catch === 'function') play.catch(() => {});
    }
    setMuted(next);
  };

  return (
    <div className={`relative overflow-hidden rounded-token bg-nude ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />

      {/* Volets de révélation (couleur du fond), se rétractent du haut vers le bas. */}
      {Array.from({ length: COLS }).map((_, i) => (
        <div
          key={i}
          aria-hidden
          className="hero-col pointer-events-none absolute inset-y-0 bg-creme"
          style={{
            left: `${(i * 100) / COLS}%`,
            width: `calc(${100 / COLS}% + 1px)`,
            ['--delay' as string]: `${0.18 + i * 0.11}s`,
          }}
        />
      ))}

      {sound && (
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={!muted}
          aria-label={muted ? 'Activer le son' : 'Couper le son'}
          className="absolute right-4 top-4 z-[4] inline-flex h-10 w-10 items-center justify-center rounded-full bg-creme/90 text-chocolat shadow-[0_8px_24px_-8px_rgba(59,23,18,0.6)] backdrop-blur transition-colors duration-[var(--dur-1)] hover:bg-creme"
        >
          {muted ? (
            // Haut-parleur coupé
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M11 5 6 9H3v6h3l5 4V5Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path d="m16 9 5 6m0-6-5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            // Haut-parleur actif
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M11 5 6 9H3v6h3l5 4V5Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
