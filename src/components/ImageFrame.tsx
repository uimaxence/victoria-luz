import Image from 'next/image';

/**
 * Cadre image (design.md §6), image nette, option filet fin, légende.
 * Toujours décalée/débordante selon le pattern parent.
 * Ratios cohérents : portrait 3:4, paysage 3:2 (design.md §7).
 */

type Ratio = 'portrait' | 'landscape' | 'square' | 'tall';

const RATIO: Record<Ratio, string> = {
  portrait: '3 / 4',
  landscape: '3 / 2',
  square: '1 / 1',
  tall: '2 / 3',
};

type ImageFrameProps = {
  src: string;
  alt: string;
  ratio?: Ratio;
  /** filet fin 1px autour de l'image */
  framed?: boolean;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** appliqué au wrapper (positionnement, bleed…) */
  wrapperClassName?: string;
  objectPosition?: string;
};

export default function ImageFrame({
  src,
  alt,
  ratio = 'portrait',
  framed = false,
  caption,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
  wrapperClassName = '',
  objectPosition = 'center',
}: ImageFrameProps) {
  return (
    <figure className={wrapperClassName}>
      <div
        className={`relative overflow-hidden rounded-token bg-nude ${
          framed ? 'p-2 ring-1 ring-line' : ''
        } ${className}`}
        style={{ aspectRatio: RATIO[ratio] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="rounded-token object-cover"
          style={{ objectPosition }}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 t-surtitre">{caption}</figcaption>
      )}
    </figure>
  );
}
