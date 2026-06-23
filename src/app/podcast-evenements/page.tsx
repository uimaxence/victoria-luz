import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';
import HorizontalPodcast from '@/components/HorizontalPodcast';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import Floral from '@/components/Floral';
import Button from '@/components/Button';
import { PODCAST_EPISODES, EVENT_BANNER, FEATURED_EVENT, PAST_EVENTS, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Podcast & événements',
  description:
    '« Sous nos cicatrices » : un podcast qui donne la parole aux femmes autour de la reconstruction de soi. Découvrez l’événement en cours, les extraits du podcast et l’actualité du studio Enluzd.',
};

/**
 * Page « Podcast & événements ».
 * En avant : l'événement en cours (broken-overlap, badge « En cours »).
 * Podcast : présentation puis défilement horizontal des extraits (HorizontalPodcast).
 * Actualités : événements passés. CTA témoigner.
 */
export default function PodcastEvenementsPage() {
  return (
    <>
      {/* ===================================================================
          BANDEAU annonce, événements en cours (rose, en haut de page, lien
          vers le détail). Placé avant le hero pour rester tout en haut.
          =================================================================== */}
      <Link
        href={EVENT_BANNER.href}
        className="group relative z-30 block bg-rose text-chocolat transition-colors duration-[var(--dur-1)] hover:bg-accent"
      >
        <div className="container-page flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 py-3 text-center">
          <span className="inline-flex items-center gap-2 t-surtitre">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chocolat opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-chocolat" />
            </span>
            {EVENT_BANNER.label}
          </span>
          <span aria-hidden className="hidden text-chocolat/40 sm:inline">
            ·
          </span>
          <span className="text-small">{EVENT_BANNER.text}</span>
          <span className="text-small font-medium underline-offset-4 group-hover:underline">
            {EVENT_BANNER.cta} →
          </span>
        </div>
      </Link>

      <PageHeader
        eyebrow="Podcast & événements · Enluzd"
        title={[{ text: 'Sous nos' }, { text: 'cicatrices', accent: true }]}
        script="ensemble"
        lead="Derrière chaque cicatrice, visible ou invisible, se cache une histoire qui mérite d’être entendue. Un espace de parole où des femmes donnent la parole à d’autres femmes."
        image={{
          src: '/img/photos/floral_2.webp',
          alt: 'Tatouage floral délicat, féminité et douceur du trait',
          objectPosition: 'center 25%',
        }}
        floral={{ name: 'Pivoine_1_rose', width: 150 }}
      />

      {/* ===================================================================
          ÉVÉNEMENT EN AVANT (en cours)
          =================================================================== */}
      <section id="evenement" className="relative isolate scroll-mt-24 overflow-hidden bg-nude has-grain">
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-20 md:py-28">
          <Reveal as="p" className="t-surtitre">
            À la une
          </Reveal>

          <div className="mt-8 grid-12 items-center gap-y-12">
            {/* Visuel */}
            <Reveal className="relative col-span-12 md:col-span-7">
              <div
                aria-hidden
                className="absolute -left-4 -top-6 hidden h-full w-full rounded-token bg-rose/30 md:block"
              />
              <ImageFrame
                src={FEATURED_EVENT.image}
                alt={FEATURED_EVENT.title}
                ratio="landscape"
                sizes="(max-width: 768px) 100vw, 56vw"
                objectPosition="center 30%"
                className="relative"
              />
              {/* Badge « En cours » */}
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-token bg-accent px-4 py-2 text-caption uppercase tracking-[0.18em] text-chocolat">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chocolat opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-chocolat" />
                </span>
                {FEATURED_EVENT.status}
              </span>
              <Floral
                name="Pivoine_4_rose"
                className="pointer-events-none absolute -bottom-8 -right-6 hidden lg:block"
                opacity={0.35}
                width={150}
              />
            </Reveal>

            {/* Détail */}
            <div className="col-span-12 md:col-span-5 md:pl-gutter lg:pl-12">
              <Reveal as="p" className="t-surtitre text-accent" delay={0.06}>
                {FEATURED_EVENT.date} · {FEATURED_EVENT.place}
              </Reveal>
              <Reveal as="h2" className="mt-4 max-w-[18ch] t-h1 text-chocolat" delay={0.12}>
                {FEATURED_EVENT.title}
              </Reveal>
              <Reveal as="p" className="mt-6 max-w-[48ch] text-body text-text-muted" delay={0.18}>
                {FEATURED_EVENT.desc}
              </Reveal>
              <Reveal className="mt-8" delay={0.24}>
                <Button href={FEATURED_EVENT.cta.href} variant="primary">
                  {FEATURED_EVENT.cta.label}
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          PODCAST · présentation
          =================================================================== */}
      <section className="relative isolate overflow-hidden bg-creme has-grain">
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-20 md:py-28">
          <div className="grid-12 items-start gap-y-10">
            <div className="col-span-12 md:col-span-5">
              <Reveal as="p" className="t-hand -rotate-3 text-rose">
                briser les silences
              </Reveal>
              <Reveal as="h2" className="mt-4 max-w-[16ch] t-h2 text-chocolat" delay={0.1}>
                Un espace de parole, sans tabou ni jugement
              </Reveal>
            </div>
            <div className="col-span-12 max-w-[60ch] space-y-5 text-body text-text-muted md:col-span-7">
              <Reveal as="p" delay={0.12}>
                Ensemble, nous abordons des sujets encore trop peu évoqués : le cancer, les
                grossesses et le post-partum, les syndromes, les maladies chroniques, les
                traumatismes physiques ou psychologiques, le deuil ou l’adoption, toutes ces
                épreuves qui laissent une empreinte sur nos vies.
              </Reveal>
              <Reveal as="p" delay={0.18}>
                Mon objectif est simple : mettre des mots sur ces expériences, libérer la parole
                et permettre à chacune de se sentir comprise, écoutée et surtout moins seule.
                Chaque épisode est une rencontre, un témoignage sincère et une invitation à
                regarder nos cicatrices autrement.
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          PODCAST · défilement horizontal des extraits
          =================================================================== */}
      <HorizontalPodcast episodes={PODCAST_EPISODES} youtube={SITE.youtube} />

      {/* ===================================================================
          ACTUALITÉS / événements passés
          =================================================================== */}
      <section className="relative isolate overflow-hidden bg-creme has-grain">
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-20 md:py-28">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-4">
              <Reveal as="p" className="t-surtitre">
                Actualités
              </Reveal>
              <Reveal as="h2" className="mt-5 max-w-[12ch] t-h2 text-chocolat" delay={0.08}>
                Ce qui a marqué le chemin
              </Reveal>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {PAST_EVENTS.map((ev, i) => (
              <Reveal key={ev.title} delay={0.08 + i * 0.06}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-token bg-nude">
                  <Image
                    src={ev.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 t-surtitre text-accent">{ev.date}</p>
                <h3 className="mt-2 t-h3 font-display text-chocolat">{ev.title}</h3>
                <p className="mt-2 max-w-[40ch] text-small text-text-muted">{ev.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          CTA · témoigner
          =================================================================== */}
      <section className="relative isolate overflow-hidden bg-marron text-creme has-grain is-dark">
        <span className="grain-layer" aria-hidden />
        <Floral
          name="Pivoine_4_creme"
          className="pointer-events-none absolute -right-12 -bottom-10 hidden md:block"
          opacity={0.1}
          width={300}
        />
        <div className="container-page py-20 md:py-28">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 md:col-span-8">
              <Reveal as="h2" className="max-w-[20ch] t-h1 text-creme">
                Envie de témoigner au micro&nbsp;?
              </Reveal>
              <Reveal as="p" className="mt-6 max-w-[54ch] text-body text-text-invert-muted" delay={0.12}>
                Si vous souhaitez raconter votre parcours, témoigner ou simplement échanger autour
                d’une expérience qui vous a marqué, écrivez-moi : je prendrai le temps de vous
                répondre avec plaisir. Vos idées de sujets sont aussi précieuses.
              </Reveal>
            </div>
            <Reveal
              className="col-span-12 flex flex-col gap-4 sm:flex-row md:col-span-4 md:justify-end"
              delay={0.18}
            >
              <Button href={SITE.youtube} variant="secondary" invert external>
                Le podcast
              </Button>
              <Button href="/contact" variant="primary">
                Me contacter
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
