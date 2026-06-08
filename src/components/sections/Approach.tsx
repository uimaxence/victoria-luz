import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import Floral from '@/components/Floral';

/**
 * Pattern split-5-7 (design.md §4.2 n°2).
 * Image pleine hauteur à gauche (≈5/12), titre + texte justifié étroit à droite
 * (≈7/12). Orientation inversée par rapport au hero. Surtitre vertical en marge.
 */
export default function Approach() {
  return (
    <section id="approche" className="relative isolate overflow-hidden bg-nude has-grain">
      <span className="grain-layer" aria-hidden />

      <div className="container-page py-20 md:py-32">
        <div className="grid-12 items-stretch gap-y-12">
          {/* Image gauche, pleine hauteur */}
          <Reveal className="relative col-span-12 md:col-span-5">
            {/* Surtitre vertical en marge (label-vertical) */}
            <span
              className="absolute -left-3 top-0 hidden t-surtitre lg:block"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              L’approche · Victoria-Luz
            </span>
            <ImageFrame
              src="/img/approach-skin.jpg"
              alt="Détail d’une peau lumineuse et d’un geste précis, l’attention portée à la matière et au corps"
              ratio="tall"
              framed
              sizes="(max-width: 768px) 100vw, 40vw"
              objectPosition="center 40%"
              className="h-full"
              wrapperClassName="h-full lg:pl-8"
            />
            <Floral
              name="Pivoine_2_rose"
              className="pointer-events-none absolute -bottom-8 left-2 hidden md:block"
              opacity={0.35}
              width={120}
            />
          </Reveal>

          {/* Texte droite, colonne étroite, justifié (desktop) */}
          <div className="col-span-12 md:col-span-7 md:pl-gutter lg:pl-16">
            <Reveal as="p" className="t-surtitre" delay={0.05}>
              Une exigence d’atelier
            </Reveal>
            <Reveal as="h2" className="mt-5 max-w-[18ch] t-h2 text-chocolat" delay={0.1}>
              Le sens de l’espace, au service du corps
            </Reveal>

            <div className="mt-8 max-w-[58ch] space-y-5 text-body text-text md:t-body-justify">
              <Reveal as="p" delay={0.16}>
                Deux années en architecture d’intérieur et design d’objet m’ont appris à lire
                un volume, une matière, une composition. Puis le tatouage est devenu une
                évidence : la peau comme support, le dessin comme langage, et toujours ce même
                soin de l’équilibre et du détail.
              </Reveal>
              <Reveal as="p" delay={0.22}>
                J’aborde aujourd’hui chaque projet avec une ambition empruntée à l’univers du
                luxe : l’écoute, le sur-mesure, le temps qu’il faut. Qu’il s’agisse d’une pièce
                artistique ou d’une reconstruction après la maladie, l’expérience se veut
                exclusive, rassurante et profondément personnelle.
              </Reveal>
            </div>

            <Reveal className="mt-10" delay={0.28}>
              <Button href="/qui-suis-je" variant="link">
                Mon parcours
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
