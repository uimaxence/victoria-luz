'use client';

import { useEffect, useRef, useState } from 'react';
import PodcastCard, { type Episode } from './PodcastCard';

/**
 * Défilement horizontal piloté par le scroll vertical (design.md §4.2 gallery-scroll).
 *
 * Quand la section entre dans le viewport, elle se « colle » (sticky) et le scroll
 * vertical fait défiler la rangée d'extraits de podcast horizontalement. Une fois
 * la rangée parcourue, le scroll vertical classique reprend.
 *
 * Important : en mode hijack, le contenu collé tient INTÉGRALEMENT dans le viewport
 * (header + rangée centrée, sans débordement vertical). Ainsi l'utilisateur ne
 * perçoit que le mouvement horizontal, pas de double défilement.
 *
 * Robustesse :
 * - Hijack réservé aux grands écrans à pointeur fin, hors prefers-reduced-motion.
 * - Sinon (mobile, tactile, motion réduit), repli sur un carrousel natif
 *   (overflow-x + scroll-snap). Le rendu SSR part du mode natif → pas de saut
 *   d'hydratation.
 */

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

/** Décalage d'entrée (hijack) : aligne la 1re carte sur le texte du titre,
 *  c.-à-d. le bord interne du conteneur de page. */
const HIJACK_INSET = 'calc(max(0px, (100vw - var(--content-max)) / 2) + var(--page-margin))';

export default function HorizontalPodcast({
  episodes,
  youtube,
}: {
  episodes: readonly Episode[];
  youtube: string;
}) {
  const outerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
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
    // Décalage gauche d'entrée : aligne la 1re carte sur le texte du titre
    // (bord interne du conteneur de page). Un conteneur flex `w-max` qui déborde
    // « avale » tout padding/margin de gauche, donc on pilote ce décalage
    // directement via le transform (déterministe).
    const inset = () => {
      const h = headerRef.current;
      if (!h) return 0;
      // Bord interne (gauche) du conteneur de page = position du texte du titre.
      return h.getBoundingClientRect().left + parseFloat(getComputedStyle(h).paddingLeft || '0');
    };
    // Course horizontale : du décalage d'entrée jusqu'à amener le bord droit de la
    // rangée au bord droit du viewport.
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + inset());

    const update = () => {
      raf = 0;
      if (!outer) return;
      const scrollable = outer.offsetHeight - window.innerHeight;
      const rect = outer.getBoundingClientRect();
      const progress = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
      track.style.transform = `translate3d(${inset() - progress * distance()}px, 0, 0)`;
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

  // Tailles des cartes : en hijack, hauteur fixée pour tenir dans le viewport
  // (la largeur découle du ratio) ; en natif, largeur fluide + hauteur auto.
  const cardSize = hijack
    ? 'h-full aspect-[3/4]'
    : 'w-[80vw] aspect-[3/4] sm:w-[60vw] md:w-[42vw] lg:w-[28rem]';

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
            ? // !sticky : la règle globale `.has-grain > * { position: relative }`
              // (globals.css) écraserait sinon le position:sticky du conteneur collé,
              // ce qui laissait la section défiler verticalement EN PLUS de l'horizontal.
              '!sticky top-0 h-screen overflow-hidden'
            : 'flex flex-col py-24 md:py-32'
        }
      >
        {/* Voile dégradé sous l'en-tête (hijack) : assombrit le haut de la rangée
            pour que le titre reste lisible et flotte proprement au-dessus. */}
        {hijack && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[34vh] bg-gradient-to-b from-chocolat via-chocolat/85 to-transparent"
          />
        )}

        {/* En-tête de la rangée. En mode hijack, superposée en haut afin que la
            rangée puisse se centrer verticalement dans tout le viewport. */}
        <div
          ref={headerRef}
          className={
            hijack
              ? 'container-page pointer-events-none absolute inset-x-0 top-0 z-10 pt-24 md:pt-28'
              : 'container-page shrink-0'
          }
        >
          <p className="t-surtitre text-text-invert-muted">Sous nos cicatrices · épisodes</p>
          <h2
            className={`text-creme ${
              hijack ? 'mt-3 max-w-[26ch] t-h3' : 'mt-4 max-w-[18ch] t-h2'
            }`}
          >
            Des voix, un extrait à la fois
          </h2>
          {!hijack && (
            <p className="mt-4 text-small text-text-invert-muted">
              Glissez pour parcourir les extraits →
            </p>
          )}
        </div>

        {/* Rangée d'extraits, centrée verticalement dans le viewport */}
        <div
          className={
            hijack
              ? // overflow-clip (et pas -hidden) : on coupe le débordement sans créer
                // de conteneur scrollable, qui sinon s'auto-décale et fausse l'alignement.
                'flex h-full items-center overflow-clip pt-[6vh]'
              : 'mt-10 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [-webkit-overflow-scrolling:touch]'
          }
        >
          <div
            ref={trackRef}
            className={`flex w-max items-stretch gap-6 md:gap-8 ${
              hijack ? 'h-[clamp(20rem,58vh,42rem)] will-change-transform' : 'px-page-margin'
            }`}
          >
            {episodes.map((ep) => (
              <PodcastCard key={ep.num} ep={ep} youtube={youtube} cardSize={cardSize} />
            ))}

            {/* Panneau final : accès au podcast complet */}
            <article
              className={`flex shrink-0 snap-start flex-col justify-center ${
                hijack ? 'h-full w-[24rem]' : 'w-[78vw] sm:w-[58vw] md:w-[26rem]'
              }`}
              style={hijack ? { marginRight: 'var(--page-margin)' } : undefined}
            >
              <p className="t-hand -rotate-3 text-rose">à écouter</p>
              <h3 className="mt-4 max-w-[16ch] t-h2 text-creme">
                Tous les premiers mercredis du mois
              </h3>
              <p className="mt-5 max-w-[40ch] text-small text-text-invert-muted">
                Un nouvel épisode, une nouvelle histoire. Retrouvez l’intégralité des témoignages
                sur la chaîne du podcast.
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
