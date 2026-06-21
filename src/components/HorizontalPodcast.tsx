'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/**
 * Défilement horizontal piloté par le scroll vertical (design.md §4.2 gallery-scroll).
 *
 * Quand la section entre dans le viewport, elle se « colle » (sticky) et le scroll
 * vertical fait défiler la rangée d'extraits de podcast un par un, horizontalement.
 * Une fois la rangée parcourue, le scroll vertical classique reprend naturellement.
 *
 * Robustesse :
 * - Hijack réservé aux grands écrans à pointeur fin, hors prefers-reduced-motion.
 * - Sinon (mobile, tactile, motion réduit), repli sur un carrousel natif
 *   (overflow-x + scroll-snap), sans détournement du scroll. Le rendu SSR part
 *   du mode natif → pas de saut d'hydratation.
 */

type Episode = {
  num: string;
  title: string;
  guest: string;
  excerpt: string;
  image: string;
};

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

export default function HorizontalPodcast({
  episodes,
  youtube,
}: {
  episodes: readonly Episode[];
  youtube: string;
}) {
  const outerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [hijack, setHijack] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);

  // Décide du mode selon l'appareil (après montage → SSR = natif).
  useEffect(() => {
    const mqFine = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const decide = () => setHijack(mqFine.matches && !mqReduce.matches);
    decide();
    mqFine.addEventListener('change', decide);
    mqReduce.addEventListener('change', decide);
    return () => {
      mqFine.removeEventListener('change', decide);
      mqReduce.removeEventListener('change', decide);
    };
  }, []);

  // Pilotage du défilement horizontal en mode hijack.
  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!track) return;

    if (!hijack) {
      setHeight(undefined);
      track.style.transform = '';
      return;
    }

    let raf = 0;

    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

    const update = () => {
      raf = 0;
      if (!outer) return;
      const scrollable = outer.offsetHeight - window.innerHeight;
      const rect = outer.getBoundingClientRect();
      const progress = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
      track.style.transform = `translate3d(${-progress * distance()}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const compute = () => {
      // Hauteur de la section = course horizontale + un viewport (mapping 1:1).
      setHeight(distance() + window.innerHeight);
      onScroll();
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', compute);
    };
  }, [hijack]);

  return (
    <section
      ref={outerRef}
      aria-label="Extraits du podcast Sous nos cicatrices"
      className="relative isolate bg-chocolat text-creme has-grain is-dark"
      style={hijack ? { height } : undefined}
    >
      <span className="grain-layer" aria-hidden />

      <div
        className={
          hijack
            ? 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden'
            : 'flex flex-col gap-8 py-20 md:py-28'
        }
      >
        {/* En-tête de la rangée */}
        <div className="container-page">
          <p className="t-surtitre text-text-invert-muted">Sous nos cicatrices · épisodes</p>
          <h2 className="mt-4 max-w-[18ch] t-h2 text-creme">Des voix, un extrait à la fois</h2>
          <p className="mt-3 text-small text-text-invert-muted">
            {hijack ? 'Faites défiler ↓ pour parcourir les extraits' : 'Glissez pour parcourir les extraits →'}
          </p>
        </div>

        {/* Rangée d'extraits */}
        <div
          className={
            hijack
              ? 'mt-10 overflow-hidden'
              : 'mt-2 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-webkit-overflow-scrolling:touch]'
          }
        >
          <div
            ref={trackRef}
            className={`flex items-stretch gap-6 px-page-margin md:gap-8 ${
              hijack ? 'w-max will-change-transform' : 'w-max'
            }`}
          >
            {episodes.map((ep) => (
              <article
                key={ep.num}
                className="group relative w-[78vw] shrink-0 snap-start sm:w-[58vw] md:w-[42vw] lg:w-[30rem]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-token bg-marron">
                  <Image
                    src={ep.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 78vw, 30rem"
                    className="object-cover opacity-90 transition-transform duration-[var(--dur-3)] ease-soft group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-chocolat via-chocolat/30 to-transparent"
                  />
                  <span className="absolute left-5 top-4 font-display text-h2 text-creme/80">
                    {ep.num}
                  </span>
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="t-surtitre text-creme/70">{ep.guest}</p>
                    <h3 className="mt-2 t-h3 font-display text-creme">{ep.title}</h3>
                    <p className="mt-3 max-w-[34ch] text-small text-creme/80">{ep.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}

            {/* Panneau final : accès au podcast complet */}
            <article className="flex w-[78vw] shrink-0 snap-start flex-col justify-center sm:w-[58vw] md:w-[42vw] lg:w-[26rem]">
              <p className="t-hand -rotate-3 text-rose">à écouter</p>
              <h3 className="mt-4 max-w-[16ch] t-h2 text-creme">
                Tous les premiers mercredis du mois
              </h3>
              <p className="mt-5 max-w-[40ch] text-small text-text-invert-muted">
                Un nouvel épisode, une nouvelle histoire. Retrouvez l’intégralité des
                témoignages sur la chaîne du podcast.
              </p>
              <a
                href={youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-8 inline-flex w-fit items-center gap-3 rounded-token border border-creme px-6 py-3 text-small uppercase tracking-[0.16em] text-creme transition-colors duration-[var(--dur-1)] hover:bg-creme hover:text-chocolat"
              >
                Écouter sur YouTube
                <span className="transition-transform duration-[var(--dur-1)] group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
