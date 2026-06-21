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
          src: '/img/portrait-flower.jpg',
          alt: 'Portrait délicat de Victoria-Luz, une fleur à la main',
          objectPosition: 'center 25%',
        }}
        floral={{ name: 'Pivoine_4_marron', width: 150 }}
      />

      {/* ---- Récit, split-5-7 ---- */}
      <section className="relative isolate overflow-hidden bg-nude has-grain">
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-20 md:py-32">
          <div className="grid-12 items-start gap-y-12">
            <Reveal className="relative col-span-12 md:col-span-5">
              <span
                className="absolute -left-3 top-0 hidden t-surtitre lg:block"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Mon parcours · depuis 2021
              </span>
              <ImageFrame
                src="/img/approach-skin.jpg"
                alt="Geste précis et attentif, l’attention portée à la peau et à la matière"
                ratio="tall"
                framed
                sizes="(max-width: 768px) 100vw, 40vw"
                objectPosition="center 40%"
                wrapperClassName="lg:pl-8"
              />
              <Floral
                name="Pivoine_2_rose"
                className="pointer-events-none absolute -bottom-8 left-2 hidden md:block"
                opacity={0.35}
                width={120}
              />
            </Reveal>

            <div className="col-span-12 md:col-span-7 md:pl-gutter lg:pl-16">
              <Reveal as="p" className="t-surtitre" delay={0.05}>
                Le lien humain avant tout
              </Reveal>
              <Reveal as="h2" className="mt-5 max-w-[20ch] t-h2 text-chocolat" delay={0.1}>
                Construire un métier qui me ressemble
              </Reveal>

              <div className="mt-8 max-w-[60ch] space-y-5 text-body text-text md:t-body-justify">
                <Reveal as="p" delay={0.16}>
                  Mon parcours a commencé en <strong>2021</strong>, alors que j’étais encore
                  étudiante en architecture d’intérieur et design d’objet. Très vite, j’ai
                  compris que, malgré mon amour pour la création, ce qui me faisait vibrer était
                  avant tout le lien humain. La rencontre, l’écoute, le rapport au corps et la
                  possibilité d’accompagner une personne dans son histoire ont pris une place
                  essentielle dans ma vie.
                </Reveal>
                <Reveal as="p" delay={0.2}>
                  En <strong>2024</strong>, j’ai fait le choix de quitter mes études pour me
                  consacrer pleinement au tatouage. Depuis, je mets tout mon cœur dans chacun de
                  mes projets. J’aime créer des tatouages ornementaux pensés comme de véritables
                  bijoux, qui subliment le corps et révèlent la personnalité de celles qui les
                  portent.
                </Reveal>
                <Reveal as="p" delay={0.24}>
                  Qu’il s’agisse de reconstruction après un cancer, de camouflage de cicatrices
                  ou simplement d’un tatouage permettant de retrouver confiance en son corps et
                  en sa féminité, mon objectif reste le même : offrir un espace où chacune se
                  sent écoutée, respectée et libre d’être elle-même.
                </Reveal>
              </div>
            </div>
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
                src="/img/bodies.jpg"
                alt="Silhouettes baignées de lumière, la beauté des corps sans artifice"
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
