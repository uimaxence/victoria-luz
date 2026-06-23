import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import FeatureRow from '@/components/sections/FeatureRow';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import Floral from '@/components/Floral';
import { TATTOO_STYLES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Artiste tatoueuse',
  description:
    'Tatouage artistique sur-mesure à Angers : ornemental, floral et typographique. Des pièces pensées comme des bijoux, en harmonie avec votre morphologie et votre histoire.',
};

/**
 * Page « Artiste tatoueuse » / tatouage artistique.
 * Intro, trois styles en FeatureRow alternés, double CTA (parler du projet + RDV).
 */
export default function ArtisteTatoueusePage() {
  const florals = [
    { name: 'Pivoine_2_rose', width: 130 },
    { name: 'Pivoine_4_bleuet', width: 140 },
    { name: 'Pivoine_3_marron', width: 130 },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Tatouage artistique · Enluzd"
        tattoo
        title={[
          { text: 'Raconter' },
          { text: 'une histoire,' },
          { text: 'sublimer le corps', accent: true },
        ]}
        script="sur-mesure"
        lead="Chaque création est pensée sur mesure, en harmonie avec votre morphologie, votre personnalité et vos envies, pour devenir une œuvre unique que vous porterez toute votre vie."
        image={{
          src: '/img/photos/img_8643.webp',
          alt: 'Tatouage ornemental rayonnant dans le dos, trait fin',
          objectPosition: 'center 35%',
        }}
        floral={{ name: 'Pivoine_1_rose', width: 150 }}
      />

      {/* ---- Intro ---- */}
      <section className="relative isolate overflow-hidden bg-nude has-grain has-texture">
        <span className="texture-layer" aria-hidden />
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-16 md:py-24">
          <div className="grid-12 gap-y-8">
            <Reveal as="p" className="col-span-12 t-surtitre md:col-span-3">
              L’approche
            </Reveal>
            <Reveal
              as="p"
              className="col-span-12 max-w-[60ch] t-h3 font-display text-chocolat md:col-span-9 md:col-start-4"
              delay={0.08}
            >
              Le tatouage artistique est une manière de raconter une histoire, de révéler une
              part de soi. J’aime créer des pièces pensées comme de véritables bijoux, qui
              révèlent la personnalité de celles et ceux qui les portent.
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Styles ---- */}
      <section className="relative isolate overflow-hidden bg-creme has-grain">
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-20 md:py-28">
          <div className="space-y-24 md:space-y-40">
            {TATTOO_STYLES.map((style, i) => (
              <FeatureRow
                key={style.num}
                num={style.num}
                title={style.title}
                desc={style.desc}
                image={{ src: style.image, alt: `Tatouage ${style.title.toLowerCase()}, exemple de réalisation` }}
                mirror={i % 2 === 1}
                floral={florals[i]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA double ---- */}
      <section className="relative isolate overflow-hidden bg-marron text-creme has-grain has-texture is-dark">
        <span className="texture-layer" aria-hidden />
        <span className="grain-layer" aria-hidden />
        <Floral
          name="Pivoine_4_creme"
          className="pointer-events-none absolute -left-12 -bottom-10 hidden md:block"
          opacity={0.1}
          width={300}
        />
        <div className="container-page py-20 md:py-28">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 md:col-span-7">
              <Reveal as="p" className="t-hand -rotate-3 text-rose">
                parlons-en
              </Reveal>
              <Reveal as="h2" className="mt-4 max-w-[18ch] t-h1 text-creme" delay={0.1}>
                Imaginons votre projet ensemble
              </Reveal>
              <Reveal
                as="p"
                className="mt-6 max-w-[52ch] text-body text-text-invert-muted"
                delay={0.16}
              >
                Parlez-moi de votre idée, de son emplacement et de ce qu’elle représente pour
                vous. Nous prendrons le temps de la dessiner sur mesure, puis de réserver votre
                séance en ligne.
              </Reveal>
            </div>
            <Reveal
              className="col-span-12 flex flex-col gap-4 sm:flex-row md:col-span-5 md:justify-end"
              delay={0.2}
            >
              <Button href="/contact" variant="secondary" invert>
                Me parler du tatouage
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
