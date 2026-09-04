import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import Floral from '@/components/Floral';

/**
 * Bloc prestation/style en split-5-7 (design.md §4.2 n°2), orientation alternée
 * (`mirror`) une rangée sur deux. Numéro index optionnel, fleur au trait dosée.
 * Réutilisé pour les styles de tatouage et les détails de prestations.
 *
 * Variante « duo » : une seconde image (`secondary`) vient chevaucher le bas du
 * visuel principal, côté texte, façon broken-overlap (design.md §4.2 n°3), avec
 * le même cadre fin que le duo des interludes. Le visuel principal garde toute
 * sa place ; la seconde pièce se lit comme un tirage posé par-dessus.
 */
type FeatureRowProps = {
  num?: string;
  title: string;
  desc: string;
  image: { src: string; alt: string; objectPosition?: string };
  /** seconde image, en léger chevauchement du visuel principal */
  secondary?: { src: string; alt: string; objectPosition?: string };
  /** image à droite / texte à gauche */
  mirror?: boolean;
  floral?: { name: string; width?: number; rotate?: number };
};

export default function FeatureRow({
  num,
  title,
  desc,
  image,
  secondary,
  mirror = false,
  floral,
}: FeatureRowProps) {
  return (
    <div className="grid-12 items-center gap-y-10">
      {/* Image */}
      <Reveal
        className={`relative col-span-12 md:col-span-6 lg:col-span-5 ${
          mirror ? 'md:order-2 md:col-start-8 lg:col-start-8' : 'md:col-start-1'
        } ${secondary ? 'mb-8 md:mb-0' : ''}`}
      >
        <ImageFrame
          src={image.src}
          alt={image.alt}
          ratio="portrait"
          sizes="(max-width: 768px) 100vw, 40vw"
          objectPosition={image.objectPosition ?? 'center'}
        />

        {/* Seconde image en chevauchement (duo). Posée en bas, côté texte :
            elle déborde dans la colonne de respiration (jamais sur le texte,
            centré verticalement plus haut). En mobile, débord réduit et marge
            basse compensée (mb-8 ci-dessus) pour ne pas toucher le numéro. */}
        {secondary && (
          <div
            className={`absolute -bottom-8 z-[2] w-[44%] md:-bottom-10 ${
              mirror ? '-left-2 md:-left-4 lg:-left-10' : '-right-2 md:-right-4 lg:-right-10'
            }`}
          >
            <Reveal delay={0.22}>
              <ImageFrame
                src={secondary.src}
                alt={secondary.alt}
                ratio="square"
                framed
                sizes="(max-width: 768px) 44vw, 18vw"
                objectPosition={secondary.objectPosition ?? 'center'}
              />
            </Reveal>
          </div>
        )}

        {floral && (
          <Floral
            name={floral.name}
            className="pointer-events-none absolute -bottom-8 hidden md:block"
            opacity={0.3}
            width={floral.width ?? 120}
            rotate={floral.rotate ?? 0}
            style={{ [mirror ? 'right' : 'left']: '-1.5rem' }}
          />
        )}
      </Reveal>

      {/* Texte */}
      <div
        className={`col-span-12 md:col-span-6 ${
          mirror ? 'md:order-1 md:col-start-1 md:pr-gutter lg:pr-12' : 'md:col-start-7 md:pl-gutter lg:pl-12'
        }`}
      >
        {num && (
          <Reveal as="p" className="t-surtitre" delay={0.05}>
            ({num})
          </Reveal>
        )}
        <Reveal as="h3" className="mt-3 t-h2 text-chocolat" delay={0.1}>
          {title}
        </Reveal>
        <Reveal as="p" className="mt-6 max-w-[54ch] text-body text-text-muted" delay={0.16}>
          {desc}
        </Reveal>
      </div>
    </div>
  );
}
