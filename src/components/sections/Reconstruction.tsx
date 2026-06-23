import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import Stamp from '@/components/Stamp';
import Floral from '@/components/Floral';
import Button from '@/components/Button';
import { RECONSTRUCTION_SERVICES } from '@/lib/site';

/**
 * Pattern broken-overlap (design.md §4.2 n°3), cœur de l'expertise.
 * Bloc immersif Marron, image qui chevauche un aplat Chocolat décalé, fleur au
 * trait débordante, tampon "reconstruction". Ton rassurant et valorisant.
 */
export default function Reconstruction() {
  return (
    <section className="relative isolate overflow-hidden bg-marron text-creme has-grain is-dark">
      <span className="grain-layer" aria-hidden />

      <div className="container-page py-20 md:py-32">
        <div className="grid-12 items-center gap-y-16">
          {/* ---- Visuel (gauche), chevauchement ---- */}
          <Reveal className="relative col-span-12 md:col-span-6 lg:col-span-5">
            {/* Aplat chocolat décalé derrière */}
            <div
              aria-hidden
              className="absolute -left-4 -top-6 h-full w-full rounded-token bg-chocolat md:-left-8 md:-top-8"
            />
            <ImageFrame
              src="/img/photos/sourcil_2_1.webp"
              alt="Reconstruction des sourcils, début de séance, accompagnée avec douceur"
              ratio="portrait"
              sizes="(max-width: 768px) 100vw, 40vw"
              objectPosition="center"
              className="relative"
            />

            {/* Seconde image qui chevauche en bas à droite (desktop) */}
            <div className="absolute -bottom-10 -right-6 hidden w-2/5 md:-right-10 md:block">
              <ImageFrame
                src="/img/photos/sourcil_2_4.webp"
                alt="Reconstruction des sourcils, résultat naturel après la séance"
                ratio="square"
                framed
                sizes="20vw"
              />
            </div>

            {/* Tampon reconstruction en surimpression d'angle */}
            <span className="absolute -right-4 -top-8 text-creme md:-top-12">
              <Stamp variant="reconstruction" size={120} spin />
            </span>

            {/* Pivoine crème débordante */}
            <Floral
              name="Pivoine_3_creme"
              className="pointer-events-none absolute -left-12 bottom-8 hidden lg:block"
              opacity={0.16}
              width={170}
            />
          </Reveal>

          {/* ---- Texte (droite) ---- */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:pl-gutter lg:pl-12">
            <Reveal as="p" className="t-surtitre text-text-invert-muted" delay={0.05}>
              Reconstruction corporelle · Enluzd
            </Reveal>
            <Reveal as="h2" className="mt-5 max-w-[16ch] t-h2 text-creme" delay={0.1}>
              Se réapproprier son corps, en douceur
            </Reveal>
            <Reveal
              as="p"
              className="mt-7 max-w-[52ch] text-body text-text-invert-muted"
              delay={0.16}
            >
              Après une mastectomie, une opération ou un accident, le tatouage réparateur aide à
              retrouver un corps qui vous ressemble. Un accompagnement confidentiel, sans
              jugement, à votre rythme, où la technique se met au service de l’apaisement.
            </Reveal>

            {/* Prestations réparatrices, filets structurants */}
            <ul className="mt-10 border-t border-line-invert">
              {RECONSTRUCTION_SERVICES.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.title}
                  className="grid grid-cols-12 items-baseline gap-3 border-b border-line-invert py-5"
                  delay={0.2 + i * 0.06}
                >
                  <span className="col-span-12 t-soustitre text-creme sm:col-span-4">
                    {s.title}
                  </span>
                  <span className="col-span-12 text-small text-text-invert-muted sm:col-span-8">
                    {s.desc}
                  </span>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-10" delay={0.42}>
              <Button href="/reconstruction-corporelle" variant="secondary" invert>
                En savoir plus
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
