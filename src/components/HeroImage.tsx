import Image from 'next/image';

/**
 * Image hero révélée « en 4 colonnes » (design.md §8, motion).
 * Une SEULE image (donc aucune couture) est posée en fond ; par-dessus, 4 volets
 * de la couleur du fond se rétractent du haut vers le bas, avec un léger décalage
 * d'une colonne à l'autre. L'image émerge ainsi en cascade, sans liseré entre
 * les colonnes.
 *
 * La taille de la boîte est pilotée par le parent via `className`
 * (ex. `h-full w-full` plein écran, ou `aspect-[3/4] w-full` en portrait).
 */

const COLS = 4;

type HeroImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  objectPosition?: string;
  className?: string;
};

export default function HeroImage({
  src,
  alt,
  sizes = '(max-width: 1024px) 100vw, 45vw',
  objectPosition = 'center 30%',
  className = '',
}: HeroImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-token bg-nude ${className}`}>
      {/* Image unique et continue */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition }}
      />

      {/* Volets de révélation (couleur du fond), se rétractent du haut vers le bas.
          Légèrement plus larges que 25 % et superposés → aucun interstice visible. */}
      {Array.from({ length: COLS }).map((_, i) => (
        <div
          key={i}
          aria-hidden
          className="hero-col absolute inset-y-0 bg-creme"
          style={{
            left: `${(i * 100) / COLS}%`,
            // +1px de chevauchement pour masquer tout arrondi sous-pixel
            width: `calc(${100 / COLS}% + 1px)`,
            ['--delay' as string]: `${0.18 + i * 0.11}s`,
          }}
        />
      ))}
    </div>
  );
}
