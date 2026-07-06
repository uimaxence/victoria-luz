'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/Reveal';

/**
 * Liste des événements (design.md §4.2 editorial-index, variante « tableur »).
 * Chaque événement occupe une ligne pleine largeur, généreusement espacée :
 * numéro · titre Solea · date/lieu · description, filet pleine largeur en bas.
 *
 * À l'activation d'une ligne, deux visuels arrivent en douceur dans l'angle
 * supérieur droit, légèrement au-dessus du filet, avec une disposition qui
 * varie d'une ligne à l'autre (rendu organique). La ligne se teinte alors d'un
 * pastel doux.
 *
 * Déclencheur : survol sur pointeur fin (desktop). Sur tactile / mobile, une
 * ligne s'active dès qu'elle croise le milieu de l'écran (IntersectionObserver
 * centré). Respect de prefers-reduced-motion via globals.css (transitions ~0).
 */

type Ratio = 'portrait' | 'landscape' | 'square' | 'tall';
const RATIO: Record<Ratio, string> = {
  portrait: '3 / 4',
  landscape: '3 / 2',
  square: '1 / 1',
  tall: '2 / 3',
};

type EventPhoto = {
  src: string;
  alt: string;
  ratio: Ratio;
  objectPosition?: string;
};

type EventItem = {
  num: string;
  date: string;
  title: string;
  place: string;
  desc: string;
  photos: readonly EventPhoto[];
  /** Logo affiché à côté du nom (ex. logo d'un lieu partenaire). */
  logo?: string;
  /** Lien optionnel (ex. carte au format PDF), ouvert dans un nouvel onglet. */
  link?: { label: string; href: string };
};

/** Lavage pastel appliqué à la ligne active (doux, transparent). Cycle par ligne. */
const TINTS = [
  'color-mix(in srgb, var(--nude) 60%, transparent)',
  'color-mix(in srgb, var(--bleuet) 22%, transparent)',
  'color-mix(in srgb, var(--rose) 30%, transparent)',
];

/** Disposition des vignettes dans la boîte ancrée en haut à droite (px).
 *  `right` = distance au bord droit du contenu, `top` = descente, `rot` = angle,
 *  `w` = largeur de la vignette. Un preset par ligne (cyclé), avec 2 ou 3
 *  vignettes selon l'événement → rendu un peu aléatoire d'une ligne à l'autre. */
const ARRANGEMENTS = [
  [
    { w: 168, top: 58, right: 0, rot: -5 },
    { w: 150, top: 0, right: 132, rot: 7 },
  ],
  [
    { w: 168, top: 0, right: 22, rot: 6 },
    { w: 150, top: 84, right: 150, rot: -7 },
  ],
  [
    { w: 152, top: 70, right: 0, rot: -6 },
    { w: 158, top: 0, right: 118, rot: 5 },
    { w: 138, top: 138, right: 205, rot: -9 },
  ],
];

function PhotoCard({
  photo,
  place,
  active,
  delay,
}: {
  photo: EventPhoto;
  place: { w: number; top: number; right: number; rot: number };
  active: boolean;
  delay: number;
}) {
  return (
    <div
      className="absolute overflow-hidden rounded-token bg-nude shadow-[0_20px_44px_-16px_rgba(59,23,18,0.45)] ring-1 ring-creme/50"
      style={{
        width: `${place.w}px`,
        aspectRatio: RATIO[photo.ratio],
        top: `${place.top}px`,
        right: `${place.right}px`,
        opacity: active ? 1 : 0,
        transform: active
          ? `translate(0px, 0px) rotate(${place.rot}deg) scale(1)`
          : `translate(30px, -26px) rotate(${place.rot}deg) scale(0.84)`,
        transition:
          'opacity var(--dur-2) var(--ease-soft), transform var(--dur-2) var(--ease-soft)',
        transitionDelay: active ? `${delay}s` : '0s',
        willChange: 'transform, opacity',
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="220px"
        className="object-cover"
        style={{ objectPosition: photo.objectPosition ?? 'center' }}
      />
    </div>
  );
}

export default function EventsList({ events }: { events: readonly EventItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [fine, setFine] = useState(false);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setFine(isFine);
    // Sur pointeur fin (desktop), on s'en remet au survol : pas d'observer.
    if (isFine) return;

    // Tactile / mobile : la ligne qui croise le milieu de l'écran devient active.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.getAttribute('data-idx')));
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    rowRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="mt-16 border-t border-line md:mt-20">
      {events.map((ev, i) => {
        const arrangement = ARRANGEMENTS[i % ARRANGEMENTS.length];
        const isActive = active === i;
        return (
          <div
            key={ev.num}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            data-idx={i}
            onMouseEnter={fine ? () => setActive(i) : undefined}
            onMouseLeave={fine ? () => setActive(null) : undefined}
            className="relative border-b border-line"
          >
            {/* Lavage pastel de la ligne active, pleine largeur */}
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundColor: isActive ? TINTS[i % TINTS.length] : 'transparent',
                transition: 'background-color var(--dur-2) var(--ease-soft)',
              }}
            />

            {/* Vignettes, ancrées au bord droit du contenu et remontées au-dessus
                du filet. Mise à l'échelle sur mobile (origine haut-droite). */}
            <div
              aria-hidden={!isActive}
              className="pointer-events-none absolute right-page-margin top-0 z-10 -translate-y-[38%]"
            >
              <div className="relative h-[200px] w-[340px] origin-top-right scale-[0.56] sm:scale-[0.78] lg:scale-100">
                {ev.photos.slice(0, arrangement.length).map((photo, p) => (
                  <PhotoCard
                    key={photo.src}
                    photo={photo}
                    place={arrangement[p]}
                    active={isActive}
                    delay={p * 0.1}
                  />
                ))}
              </div>
            </div>

            {/* Contenu de la ligne */}
            <div className="container-page">
              <Reveal className="grid grid-cols-1 items-baseline gap-x-gutter gap-y-3 py-14 md:grid-cols-12 md:py-20">
                <span className="t-surtitre md:col-span-1 md:pt-3">({ev.num})</span>
                <div className="flex items-center gap-3 md:col-span-5">
                  {/* Logo d'un lieu partenaire (pas réalisé par Victoria) : simple
                      repère à côté du nom, servi tel quel. */}
                  {ev.logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={ev.logo} alt="" aria-hidden className="h-9 w-auto shrink-0 md:h-11" />
                  )}
                  <h3 className="t-h2 font-display text-chocolat">{ev.title}</h3>
                </div>
                <p className="t-surtitre text-accent md:col-span-2 md:pt-3">
                  {ev.date} · {ev.place}
                </p>
                <div className="md:col-span-4">
                  <p className="max-w-[44ch] text-body text-text-muted">{ev.desc}</p>
                  {ev.link && (
                    <a
                      href={ev.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-4 inline-flex items-center gap-1.5 text-small font-medium text-accent underline-offset-4 hover:underline"
                    >
                      {ev.link.label}
                      <span aria-hidden className="transition-transform duration-[var(--dur-1)] ease-soft group-hover/link:translate-x-1">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        );
      })}
    </div>
  );
}
