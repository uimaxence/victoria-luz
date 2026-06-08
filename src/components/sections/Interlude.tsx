import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import Floral from '@/components/Floral';

/**
 * Section décorative « interlude » (design.md §4.2, variation broken-overlap).
 * Pas de visée fonctionnelle : un mot manuscrit (Quentin) surimposé à une image
 * (parfois deux, en léger chevauchement), beaucoup de négatif et des apparitions
 * douces au scroll. Donne du corps et de la respiration entre les sections.
 *
 * Le positionnement des surimpressions est posé en inline-style `position:absolute`
 * (fiable indépendamment de la CSS utilitaire, cf. florals / curseur-image).
 */

type Img = {
  src: string;
  alt: string;
  ratio?: 'portrait' | 'tall' | 'landscape' | 'square';
  objectPosition?: string;
};

type InterludeProps = {
  eyebrow: string;
  heading: string;
  /** lignes du mot manuscrit surimposé */
  script: string[];
  image: Img;
  /** seconde image, en léger chevauchement (variante « duo ») */
  secondary?: Img;
  /** image à gauche / texte à droite */
  mirror?: boolean;
  /** fond de section */
  tone?: 'creme' | 'nude';
  scriptColor?: 'rose' | 'chocolat' | 'creme';
  floral?: { name: string; width?: number; rotate?: number };
};

export default function Interlude({
  eyebrow,
  heading,
  script,
  image,
  secondary,
  mirror = false,
  tone = 'creme',
  scriptColor = 'rose',
  floral,
}: InterludeProps) {
  const colorClass =
    scriptColor === 'rose'
      ? 'text-rose'
      : scriptColor === 'creme'
        ? 'text-creme'
        : 'text-chocolat';

  return (
    <section
      className={`relative isolate overflow-hidden has-grain ${
        tone === 'nude' ? 'bg-nude' : 'bg-creme'
      }`}
    >
      <span className="grain-layer" aria-hidden />

      {/* Respiration généreuse */}
      <div className="container-page py-28 md:py-44 lg:py-52">
        <div className="grid-12 items-center gap-y-16">
          {/* ---- Texte (court, posé) ---- */}
          <div
            className={`col-span-12 md:col-span-4 ${
              mirror ? 'md:order-2 md:col-start-9' : 'md:col-start-1'
            }`}
          >
            <Reveal as="p" className="t-surtitre">
              {eyebrow}
            </Reveal>
            <Reveal
              as="h2"
              className="mt-5 max-w-[14ch] t-h3 text-chocolat"
              delay={0.08}
            >
              {heading}
            </Reveal>
          </div>

          {/* ---- Image(s) + mot manuscrit surimposé ---- */}
          <Reveal
            className={`relative col-span-12 md:col-span-7 ${
              mirror ? 'md:order-1 md:col-start-1' : 'md:col-start-6'
            }`}
            delay={0.16}
          >
            <div className="relative">
              <ImageFrame
                src={image.src}
                alt={image.alt}
                ratio={image.ratio ?? 'landscape'}
                objectPosition={image.objectPosition}
                sizes="(max-width: 768px) 100vw, 52vw"
                className={mirror ? 'lg:bleed-left' : 'lg:bleed-right'}
              />

              {/* Seconde image en chevauchement (duo) */}
              {secondary && (
                <div
                  className="hidden md:block"
                  style={{
                    position: 'absolute',
                    bottom: '-3rem',
                    [mirror ? 'right' : 'left']: '-3.5rem',
                    width: '42%',
                    zIndex: 2,
                  }}
                >
                  <Reveal delay={0.28}>
                    <ImageFrame
                      src={secondary.src}
                      alt={secondary.alt}
                      ratio={secondary.ratio ?? 'square'}
                      objectPosition={secondary.objectPosition}
                      framed
                      sizes="(max-width: 768px) 0px, 22vw"
                    />
                  </Reveal>
                </div>
              )}

              {/* Floral au trait, débordant */}
              {floral && (
                <Floral
                  name={floral.name}
                  className="pointer-events-none hidden md:block"
                  opacity={0.32}
                  width={floral.width ?? 150}
                  rotate={floral.rotate ?? 0}
                  style={{
                    position: 'absolute',
                    top: '-2.5rem',
                    [mirror ? 'left' : 'right']: '-1.5rem',
                    zIndex: 3,
                  }}
                />
              )}

              {/* Mot manuscrit, surimposé ; positionnement responsive géré en CSS
                  (.interlude-script) pour ne jamais déborder hors écran en mobile. */}
              <div className="interlude-script" data-mirror={mirror ? 'true' : 'false'}>
                <Reveal
                  as="span"
                  delay={0.4}
                  className={`t-hand block -rotate-3 ${colorClass}`}
                >
                  {script.map((line, i) => (
                    <span key={i} className="block leading-[0.92]">
                      {line}
                    </span>
                  ))}
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
