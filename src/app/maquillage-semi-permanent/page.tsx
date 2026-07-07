import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import Floral from '@/components/Floral';
import Button from '@/components/Button';
import {
  MAQUILLAGE_INTRO,
  MAQUILLAGE_SERVICES,
  MAQUILLAGE_OUTRO,
  SITE,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Maquillage semi-permanent',
  description:
    'Maquillage semi-permanent à Angers : sourcils poil à poil et microshading, dermopigmentation des lèvres et taches de rousseur. Une approche naturelle qui révèle vos traits sans les transformer. Formée auprès de PLN Studio et Biotic Phocea.',
};

/**
 * Page « Maquillage semi-permanent ». En-tête éditorial, intro, les trois
 * rubriques (sourcils, lèvres, taches de rousseur) illustrées de résultats
 * réels, phrase de clôture et CTA rendez-vous (Planity).
 */
export default function MaquillagePage() {
  return (
    <>
      <PageHeader
        eyebrow="Maquillage semi-permanent · Enluzd"
        title={[
          { text: 'Révéler' },
          { text: 'votre beauté,' },
          { text: 'sans transformer', accent: true },
        ]}
        script="sublimer"
        lead="Une technique de dermopigmentation qui sublime naturellement certains traits du visage, dans le respect de votre morphologie et de votre identité."
        image={{
          src: '/img/photos/levre-hero.webp',
          alt: 'Résultat d’une dermopigmentation des lèvres, couleur ravivée et effet lumineux naturel',
          objectPosition: 'center 45%',
        }}
        floral={{ name: 'Pivoine_2_rose', width: 150 }}
      />

      {/* ---- Intro ---- */}
      <section className="relative isolate overflow-hidden bg-nude has-grain">
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-16 md:py-24">
          <div className="grid-12 items-start gap-y-8">
            <Reveal as="p" className="col-span-12 t-surtitre md:col-span-3">
              Une approche naturelle
            </Reveal>
            <div className="col-span-12 max-w-[62ch] space-y-5 text-body text-text md:col-span-9 md:col-start-4 md:t-body-justify">
              {MAQUILLAGE_INTRO.map((p, i) => (
                <Reveal as="p" key={i} delay={0.08 + i * 0.06}>
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Les trois rubriques ---- */}
      <section className="relative isolate overflow-hidden bg-creme has-grain">
        <span className="grain-layer" aria-hidden />
        <Floral
          name="Feuilles_marron"
          className="pointer-events-none absolute -right-8 top-12 hidden md:block"
          opacity={0.22}
          width={160}
          rotate={-8}
        />
        <div className="container-page py-20 md:py-28">
          <div className="max-w-[34ch]">
            <Reveal as="p" className="t-surtitre">
              Les prestations
            </Reveal>
            <Reveal as="h2" className="mt-5 t-h1 text-chocolat" delay={0.1}>
              Sourcils, lèvres, taches de rousseur
            </Reveal>
          </div>

          <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
            {/* Sourcils */}
            <div className="grid-12 gap-y-8">
              <div className="col-span-12 md:col-span-5">
                <Reveal as="span" className="t-surtitre text-rose">
                  01
                </Reveal>
                <Reveal as="h3" className="mt-3 t-h2 font-display text-chocolat" delay={0.06}>
                  {MAQUILLAGE_SERVICES[0].title}
                </Reveal>
                <Reveal
                  as="p"
                  className="mt-5 max-w-[46ch] text-body text-text-muted"
                  delay={0.12}
                >
                  {MAQUILLAGE_SERVICES[0].desc}
                </Reveal>
              </div>

              <Reveal className="col-span-12 md:col-span-6 md:col-start-7" delay={0.14}>
                <p className="t-hand -rotate-2 text-rose">l’évolution, séance après séance</p>
                <div className="mt-6 space-y-6">
                  {/* Premier parcours, avant / après */}
                  <div className="grid grid-cols-2 gap-3 sm:max-w-sm">
                    {[
                      { src: '/img/photos/sourcil_1_1.webp', label: 'Avant' },
                      { src: '/img/photos/sourcil_1_2.webp', label: 'Après' },
                    ].map((s) => (
                      <ImageFrame
                        key={s.src}
                        src={s.src}
                        alt={`Maquillage des sourcils, ${s.label.toLowerCase()}`}
                        ratio="square"
                        caption={s.label}
                        sizes="(max-width: 768px) 45vw, 22vw"
                      />
                    ))}
                  </div>

                  {/* Second parcours, évolution sur plusieurs séances */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[1, 2, 3, 4].map((n) => (
                      <ImageFrame
                        key={n}
                        src={`/img/photos/sourcil_2_${n}.webp`}
                        alt={`Maquillage des sourcils, séance ${n}`}
                        ratio="square"
                        caption={`Séance ${n}`}
                        sizes="(max-width: 768px) 45vw, 20vw"
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Lèvres */}
            <div className="grid-12 gap-y-8">
              <div className="col-span-12 md:col-span-5 md:order-2 md:col-start-8">
                <Reveal as="span" className="t-surtitre text-rose">
                  02
                </Reveal>
                <Reveal as="h3" className="mt-3 t-h2 font-display text-chocolat" delay={0.06}>
                  {MAQUILLAGE_SERVICES[1].title}
                </Reveal>
                <Reveal
                  as="p"
                  className="mt-5 max-w-[46ch] text-body text-text-muted"
                  delay={0.12}
                >
                  {MAQUILLAGE_SERVICES[1].desc}
                </Reveal>
              </div>

              <Reveal className="col-span-12 md:order-1 md:col-span-6" delay={0.14}>
                <p className="t-hand -rotate-2 text-rose">quelques résultats</p>
                <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
                  {[1, 2, 3].map((n) => (
                    <ImageFrame
                      key={n}
                      src={`/img/photos/levre-resultat-${n}.webp`}
                      alt={`Résultat d’une dermopigmentation des lèvres, exemple ${n}`}
                      ratio="portrait"
                      sizes="(max-width: 768px) 30vw, 18vw"
                    />
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Taches de rousseur */}
            <div className="grid-12 items-center gap-y-8">
              <div className="col-span-12 md:col-span-6">
                <Reveal as="span" className="t-surtitre text-rose">
                  03
                </Reveal>
                <Reveal as="h3" className="mt-3 t-h2 font-display text-chocolat" delay={0.06}>
                  {MAQUILLAGE_SERVICES[2].title}
                </Reveal>
                <Reveal
                  as="p"
                  className="mt-5 max-w-[52ch] text-body text-text-muted"
                  delay={0.12}
                >
                  {MAQUILLAGE_SERVICES[2].desc}
                </Reveal>
              </div>

              <Reveal className="col-span-12 md:col-span-5 md:col-start-8" delay={0.14}>
                <ImageFrame
                  src="/img/photos/tache-rousseur.webp"
                  alt="Taches de rousseur en dermopigmentation, effet ensoleillé naturel sur le visage"
                  ratio="portrait"
                  sizes="(max-width: 768px) 90vw, 34vw"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Clôture + CTA rendez-vous ---- */}
      <section className="relative isolate overflow-hidden bg-chocolat text-creme has-grain is-dark">
        <span className="grain-layer" aria-hidden />
        <Floral
          name="Pivoine_3_creme"
          className="pointer-events-none absolute -left-12 bottom-0 hidden lg:block"
          opacity={0.12}
          width={260}
        />
        <div className="container-page py-20 md:py-28">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 md:col-span-8">
              <Reveal as="p" className="t-hand -rotate-2 text-rose">
                votre éclat, en toute discrétion
              </Reveal>
              {MAQUILLAGE_OUTRO.map((p, i) => (
                <Reveal
                  as="p"
                  key={i}
                  className={
                    i === 0
                      ? 'mt-4 max-w-[46ch] t-h2 text-creme'
                      : 'mt-6 max-w-[52ch] text-body text-text-invert-muted'
                  }
                  delay={0.1 + i * 0.06}
                >
                  {p}
                </Reveal>
              ))}
            </div>
            <Reveal
              className="col-span-12 flex flex-col gap-4 sm:flex-row md:col-span-4 md:justify-end"
              delay={0.18}
            >
              <Button href="/contact" variant="secondary" invert>
                Me contacter
              </Button>
              <Button href={SITE.planity} variant="primary" external>
                Prendre rendez-vous
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
