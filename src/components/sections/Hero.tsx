import HeroImage from '@/components/HeroImage';
import Floral from '@/components/Floral';
import Button from '@/components/Button';

/**
 * Pattern hero-bleed (design.md §4.2 n°1).
 * Texte aligné à gauche (≈55 %), aéré du bord ; image plein écran à droite
 * (45 %, hauteur du viewport), légèrement à cheval sur la section suivante.
 * Image révélée en cascade sur 4 colonnes ; signature manuscrite posée dessus.
 */
export default function Hero() {
  return (
    <section className="relative isolate z-20 overflow-x-clip bg-creme has-grain lg:min-h-[calc(100svh-4.5rem)]">
      <span className="grain-layer" aria-hidden />

      {/* Feuillage décoratif, basse opacité, positionné en inline-style pour
          garantir le retrait du flux (jamais empilé au-dessus du contenu). */}
      <Floral
        name="Feuilles_rose"
        className="pointer-events-none hidden lg:block"
        opacity={0.2}
        width={240}
        rotate={12}
        style={{ position: 'absolute', left: '-2%', top: '6%', zIndex: 0 }}
      />

      {/* ---- Colonne texte (gauche, ≈55 %), centrée verticalement ---- */}
      <div className="container-page relative flex flex-col justify-center pb-14 pt-8 lg:min-h-[calc(100svh-4.5rem)] lg:py-0">
        <div className="lg:max-w-[52%] lg:pl-4">
          {/* ---- Image mobile : en tête, au-dessus du texte (en flux) ---- */}
          <div className="relative mb-8 lg:hidden">
            <HeroImage
              src="/img/photos/moi.webp"
              alt="Portrait de Victoria-Luz, tatoueuse artistique et reconstructrice à Angers"
              className="aspect-[3/4] w-full"
            />
            <span className="reveal-load t-hand pointer-events-none absolute bottom-5 left-5 -rotate-6 text-creme">
              Victoria-Luz
            </span>
          </div>

          <p
            className="reveal-load t-surtitre"
            style={{ ['--delay' as string]: '0.05s' }}
          >
            Tatoueuse · {`Angers`}
          </p>

          {/* Mobile : 2 lignes (« L’art du tatouage, » / « le soin du corps »).
              Desktop (lg) : les mots imbriqués repassent en block → 4 lignes,
              pour tenir dans la colonne à ≈52 %. Le floor du clamp est abaissé
              pour que la 1re ligne tienne d’un bloc sur mobile sans troncature. */}
          <h1
            className="mt-4"
            style={{ ['--fs-display' as string]: 'clamp(1.75rem, 8vw, 5.25rem)' }}
          >
            <span
              className="reveal-load t-display block text-chocolat"
              style={{ ['--delay' as string]: '0.12s' }}
            >
              L’art du <span className="lg:block">tatouage,</span>
            </span>
            <span
              className="reveal-load t-display block text-accent"
              style={{ ['--delay' as string]: '0.24s' }}
            >
              le soin <span className="lg:block">du corps</span>
            </span>
          </h1>

          <p
            className="reveal-load mt-6 max-w-[46ch] text-body text-text-muted"
            style={{ ['--delay' as string]: '0.42s' }}
          >
            Tatouage artistique sur-mesure et{' '}
            <span className="text-chocolat">reconstruction corporelle</span>, aréole
            mammaire en 3D, camouflage de cicatrices, sourcils &amp; lèvres. Une expérience
            exclusive et délicate, à la rencontre de l’art et du luxe.
          </p>

          <div
            className="reveal-load mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            style={{ ['--delay' as string]: '0.52s' }}
          >
            <Button
              href="/reconstruction-corporelle"
              variant="primary"
              className="w-full justify-center sm:w-auto sm:justify-start"
            >
              Découvrir la reconstruction
            </Button>
            <Button
              href="/artiste-tatoueuse"
              variant="secondary"
              className="w-full justify-center sm:w-auto sm:justify-start"
            >
              Voir mes tatouages
            </Button>
          </div>
        </div>
      </div>

      {/* ---- Image desktop : plein écran à droite (45 %), à cheval en bas ---- */}
      <div
        className="hidden lg:block"
        style={{ position: 'absolute', top: 0, right: 0, bottom: '-4rem', width: '45%', zIndex: 1 }}
      >
        <HeroImage
          src="/img/photos/moi.webp"
          alt="Portrait de Victoria-Luz, tatoueuse artistique et reconstructrice à Angers"
          sizes="45vw"
          objectPosition="center 25%"
          className="h-full w-full rounded-none"
        />

        {/* Signature manuscrite posée sur l'image */}
        <span
          className="reveal-load t-hand pointer-events-none absolute bottom-8 left-7 -rotate-6 text-creme"
          style={{ ['--delay' as string]: '0.85s' }}
        >
          Victoria-Luz
        </span>

        {/* Pivoine au trait, débordant le bas de l'image */}
        <Floral
          name="Pivoine_4_marron"
          className="pointer-events-none"
          opacity={0.4}
          width={150}
          style={{ position: 'absolute', bottom: '-2rem', right: '1.5rem', zIndex: 2 }}
        />
      </div>
    </section>
  );
}
