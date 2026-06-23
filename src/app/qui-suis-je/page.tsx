import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import Floral from '@/components/Floral';
import Stamp from '@/components/Stamp';
import Button from '@/components/Button';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Qui suis-je',
  description:
    "Victoria-Luz, tatoueuse artistique et reconstructrice à Angers. De l'architecture d'intérieur au tatouage : un parcours guidé par le lien humain, l'écoute et le soin du corps.",
};

/**
 * Page « Qui suis-je ». PageHeader (hero-bleed) puis récit biographique en
 * split-5-7, une citation manuscrite (interlude), et un encart podcast.
 */
export default function QuiSuisJePage() {
  return (
    <>
      <PageHeader
        eyebrow="Qui suis-je · Victoria-Luz"
        title={[
          { text: 'Tatoueuse' },
          { text: 'artistique &' },
          { text: 'reconstructrice', accent: true },
        ]}
        script="Victoria"
        lead="J’ai la conviction que le tatouage peut être bien plus qu’une œuvre sur la peau : un véritable outil de réappropriation de soi."
        image={{
          src: '/img/photos/moi.webp',
          alt: 'Portrait de Victoria-Luz',
          objectPosition: 'center 25%',
        }}
        floral={{ name: 'Pivoine_4_marron', width: 150 }}
      />

      {/* ---- Récit, timeline (layout distinct : repères d'années) ---- */}
      <section className="relative isolate overflow-hidden bg-nude has-grain">
        <span className="grain-layer" aria-hidden />
        <Floral
          name="Pivoine_2_rose"
          className="pointer-events-none absolute -left-10 top-24 hidden lg:block"
          opacity={0.25}
          width={150}
        />
        <div className="container-page py-20 md:py-32">
          <div className="grid-12 gap-y-12">
            {/* Titre, en marge */}
            <div className="col-span-12 lg:col-span-3">
              <Reveal as="p" className="t-hand -rotate-3 text-rose">
                mon parcours
              </Reveal>
              <Reveal as="h2" className="mt-4 max-w-[12ch] t-h2 text-chocolat" delay={0.08}>
                Le lien humain avant tout
              </Reveal>
            </div>

            {/* Timeline */}
            <ol className="col-span-12 lg:col-span-8 lg:col-start-5">
              {[
                {
                  year: '2021',
                  title: 'Les débuts',
                  body: "Encore étudiante en architecture d’intérieur et design d’objet, je comprends vite que, malgré mon amour pour la création, ce qui me fait vibrer est avant tout le lien humain : la rencontre, l’écoute, le rapport au corps.",
                },
                {
                  year: '2024',
                  title: 'Le grand choix',
                  body: "Je quitte mes études pour me consacrer pleinement au tatouage et construire un métier qui me ressemble. Je crée des pièces ornementales pensées comme de véritables bijoux, qui révèlent la personnalité de celles qui les portent.",
                },
                {
                  year: 'Aujourd’hui',
                  title: 'Une mission qui dépasse le tatouage',
                  body: "Reconstruction après un cancer, camouflage de cicatrices, ou simplement retrouver confiance en son corps : mon objectif reste le même, offrir un espace où chacune se sent écoutée, respectée et libre d’être elle-même.",
                },
              ].map((item, i) => (
                <Reveal
                  as="li"
                  key={item.year}
                  className="grid grid-cols-12 gap-x-8 gap-y-3 border-t border-line py-8 first:border-t-0 md:py-10"
                  delay={0.1 + i * 0.08}
                >
                  <span className="col-span-12 break-words font-display text-h3 leading-[1.02] text-accent md:col-span-4 md:pr-6 lg:text-h2">
                    {item.year}
                  </span>
                  <div className="col-span-12 md:col-span-8">
                    <h3 className="t-h3 font-display text-chocolat">{item.title}</h3>
                    <p className="mt-3 max-w-[58ch] text-body text-text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---- Valeurs, citation manuscrite (interlude) ---- */}
      <section className="relative isolate overflow-hidden bg-creme has-grain">
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-24 md:py-40">
          <div className="grid-12 items-center gap-y-12">
            <div className="col-span-12 md:col-span-7">
              <Reveal as="p" className="t-hand -rotate-3 text-rose" delay={0.05}>
                écoute & bienveillance
              </Reveal>
              <Reveal
                as="blockquote"
                className="mt-6 max-w-[22ch] t-h1 text-chocolat"
                delay={0.12}
              >
                La bienveillance, l’absence de jugement, le respect et l’écoute sont les
                fondements de mon travail.
              </Reveal>
              <Reveal
                as="p"
                className="mt-8 max-w-[52ch] text-body text-text-muted"
                delay={0.18}
              >
                Chaque projet est unique et mérite une approche personnalisée afin d’obtenir un
                résultat harmonieux, naturel et profondément adapté à la personne qui me fait
                confiance. Aujourd’hui, ma mission dépasse le tatouage : aider les femmes à se
                réconcilier avec leur image et à révéler leur beauté, celle qui existe déjà mais
                ne demande qu’à être redécouverte.
              </Reveal>
            </div>

            <Reveal
              className="relative col-span-12 md:col-span-4 md:col-start-9"
              delay={0.16}
            >
              <ImageFrame
                src="/img/photos/img_8511.webp"
                alt="Tatouage floral fin sur l’avant-bras, rose et croissant de lune"
                ratio="portrait"
                sizes="(max-width: 768px) 100vw, 30vw"
                objectPosition="center 30%"
              />
              <span className="absolute -right-4 -top-8 text-chocolat">
                <Stamp variant="vl" size={104} spin />
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Encart podcast ---- */}
      <section className="relative isolate overflow-hidden bg-marron text-creme has-grain is-dark">
        <span className="grain-layer" aria-hidden />
        <Floral
          name="Pivoine_4_creme"
          className="pointer-events-none absolute -right-12 -bottom-10 hidden md:block"
          opacity={0.1}
          width={280}
        />
        <div className="container-page py-20 md:py-28">
          <div className="grid-12 items-center gap-y-10">
            <div className="col-span-12 md:col-span-8">
              <Reveal as="p" className="t-surtitre text-text-invert-muted">
                Sous nos cicatrices · le podcast
              </Reveal>
              <Reveal as="h2" className="mt-5 max-w-[20ch] t-h2 text-creme" delay={0.1}>
                Donner la parole aux femmes, sans tabou
              </Reveal>
              <Reveal
                as="p"
                className="mt-6 max-w-[56ch] text-body text-text-invert-muted"
                delay={0.16}
              >
                Je suis aussi la créatrice du podcast « Sous nos cicatrices », un espace de
                parole dédié aux femmes et à la reconstruction de soi : témoignages, cicatrices
                visibles comme invisibles, maladies, parcours de vie et sujets encore trop peu
                abordés dans notre société.
              </Reveal>
            </div>
            <Reveal className="col-span-12 md:col-span-4 md:flex md:justify-end" delay={0.2}>
              <Button href="/podcast-evenements" variant="secondary" invert>
                Découvrir le podcast
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
