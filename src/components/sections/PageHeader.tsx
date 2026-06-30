import HeroImage from '@/components/HeroImage';
import HeroVideo from '@/components/HeroVideo';
import Reveal from '@/components/Reveal';
import Floral from '@/components/Floral';

/**
 * En-tête de page éditorial, décliné du pattern `hero-bleed` (design.md §4.2 n°1).
 * Titre Solea surdimensionné aligné à gauche, surtitre, mot manuscrit optionnel,
 * chapô court, et image révélée en cascade à droite. Jamais centré.
 */

type TitleLine = { text: string; accent?: boolean };

type PageHeaderProps = {
  eyebrow: string;
  /** Lignes du titre display ; `accent` met la ligne en couleur d'accent (rose). */
  title: TitleLine[];
  /** Page tatouage : l'accent du titre reste en Bleu Klein (réservé au tatouage). */
  tattoo?: boolean;
  /** Mot manuscrit (Quentin) posé sur l'image. */
  script?: string;
  /** Chapô court sous le titre. */
  lead?: string;
  image: { src: string; alt: string; objectPosition?: string };
  /** Optionnel : remplace l'image par une vidéo en lecture auto (muette, en boucle). */
  video?: { src: string; poster?: string; objectPosition?: string };
  /** Optionnel : lien (ex. épisode YouTube) posé en surimpression sur le visuel. */
  videoLink?: { href: string; label: string };
  floral?: { name: string; width?: number; rotate?: number };
  /** Élargit le visuel à droite (utile pour une vidéo paysage : moins de recadrage
   *  latéral, on voit toute la scène). Le texte est resserré en conséquence. */
  wideMedia?: boolean;
};

export default function PageHeader({
  eyebrow,
  title,
  tattoo = false,
  script,
  lead,
  image,
  video,
  videoLink,
  floral,
  wideMedia = false,
}: PageHeaderProps) {
  const accentClass = tattoo ? 'text-bleu-klein' : 'text-accent';
  return (
    <section className="relative isolate z-20 overflow-x-clip bg-creme has-grain lg:min-h-[calc(100svh-4.5rem)]">
      <span className="grain-layer" aria-hidden />

      <Floral
        name="Feuilles_rose"
        className="pointer-events-none hidden lg:block"
        opacity={0.18}
        width={220}
        rotate={12}
        style={{ position: 'absolute', left: '-2%', top: '8%', zIndex: 0 }}
      />

      {/* ---- Colonne texte (gauche, ≈55 %) ---- */}
      <div className="container-page relative flex flex-col justify-center pb-14 pt-28 lg:min-h-[calc(100svh-4.5rem)] lg:pt-0">
        <div className={`lg:pl-4 ${wideMedia ? 'lg:max-w-[43%]' : 'lg:max-w-[52%]'}`}>
          <p
            className="reveal-load t-surtitre"
            style={{ ['--delay' as string]: '0.05s' }}
          >
            {eyebrow}
          </p>

          <h1
            className="mt-4"
            style={{ ['--fs-display' as string]: 'clamp(2.5rem, 5.5vw, 5.25rem)' }}
          >
            {title.map((line, i) => (
              <span
                key={i}
                className={`reveal-load t-display block ${
                  line.accent ? accentClass : 'text-chocolat'
                }`}
                style={{ ['--delay' as string]: `${0.12 + i * 0.08}s` }}
              >
                {line.text}
              </span>
            ))}
          </h1>

          {lead && (
            <p
              className="reveal-load mt-6 max-w-[48ch] text-body text-text-muted"
              style={{ ['--delay' as string]: '0.42s' }}
            >
              {lead}
            </p>
          )}

          {/* Image / vidéo mobile (en flux, sous le texte) */}
          <div className="relative mt-10 lg:hidden">
            {video ? (
              <HeroVideo
                src={video.src}
                poster={video.poster}
                label={image.alt}
                objectPosition={video.objectPosition ?? image.objectPosition}
                className="aspect-[3/4] w-full"
                sound
              />
            ) : (
              <HeroImage
                src={image.src}
                alt={image.alt}
                objectPosition={image.objectPosition}
                className="aspect-[3/4] w-full"
              />
            )}
            {script && (
              <span className="t-hand pointer-events-none absolute bottom-5 left-5 -rotate-6 text-creme">
                {script}
              </span>
            )}
            {videoLink && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-5">
                <a
                  href={videoLink.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-token px-4 py-2 text-small font-medium text-chocolat shadow-lg backdrop-blur transition-colors"
                  style={{ backgroundColor: 'rgba(255,242,237,0.94)' }}
                >
                  <span aria-hidden>▶</span>
                  {videoLink.label}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ---- Image desktop : plein écran à droite (45 %), à cheval en bas ---- */}
      <div
        className="hidden lg:block"
        style={{ position: 'absolute', top: 0, right: 0, bottom: '-4rem', width: wideMedia ? '56%' : '45%', zIndex: 1 }}
      >
        {video ? (
          <HeroVideo
            src={video.src}
            poster={video.poster}
            label={image.alt}
            objectPosition={video.objectPosition ?? image.objectPosition ?? 'center 30%'}
            className="h-full w-full rounded-none"
            sound
          />
        ) : (
          <HeroImage
            src={image.src}
            alt={image.alt}
            sizes="45vw"
            objectPosition={image.objectPosition ?? 'center 30%'}
            className="h-full w-full rounded-none"
          />
        )}

        {script && (
          <span
            className="reveal-load t-hand pointer-events-none absolute bottom-8 left-7 -rotate-6 text-creme"
            style={{ ['--delay' as string]: '0.85s' }}
          >
            {script}
          </span>
        )}

        {videoLink && (
          <div className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center p-6">
            <a
              href={videoLink.href}
              target="_blank"
              rel="noreferrer noopener"
              className="reveal-load pointer-events-auto inline-flex items-center gap-2 rounded-token px-5 py-2.5 text-small font-medium text-chocolat shadow-[0_10px_30px_-8px_rgba(59,23,18,0.6)] backdrop-blur transition-colors duration-[var(--dur-1)]"
              style={{ ['--delay' as string]: '0.95s', backgroundColor: 'rgba(255,242,237,0.94)' }}
            >
              <span aria-hidden>▶</span>
              {videoLink.label}
            </a>
          </div>
        )}

        {floral && (
          <Floral
            name={floral.name}
            className="pointer-events-none"
            opacity={0.4}
            width={floral.width ?? 150}
            rotate={floral.rotate ?? 0}
            style={{ position: 'absolute', bottom: '-2rem', right: '1.5rem', zIndex: 2 }}
          />
        )}
      </div>
    </section>
  );
}
