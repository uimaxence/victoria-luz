import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';
import HorizontalPodcast from '@/components/HorizontalPodcast';
import EventsList from '@/components/EventsList';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import Floral from '@/components/Floral';
import Button from '@/components/Button';
import {
  PODCAST_EPISODES,
  EVENT_BANNER,
  FEATURED_EVENT,
  EVENTS,
  PAST_EVENTS,
  SITE,
} from '@/lib/site';

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
          src: '/img/photos/podcast-duo-2.webp',
          alt: 'Victoria-Luz et son invitée lors de l’enregistrement du podcast Sous nos cicatrices',
          objectPosition: 'center 35%',
        }}
        video={{
          src: '/video/podcast-cecile.mp4',
          poster: '/video/podcast-cecile-poster.jpg',
          objectPosition: 'center 30%',
        }}
        videoLink={{
          href: 'https://www.youtube.com/watch?v=ZqU4Bo2y1AI',
          label: 'Voir l’épisode sur YouTube',
        }}
        floral={{ name: 'Pivoine_1_rose', width: 150 }}
        wideMedia
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
          ÉVÉNEMENTS · liste pleine largeur, visuels animés en haut à droite
          =================================================================== */}
      <section className="relative isolate overflow-hidden bg-creme has-grain">
        <span className="grain-layer" aria-hidden />
        <div className="container-page pt-20 md:pt-28">
          <div className="grid-12 gap-y-6">
            <div className="col-span-12 md:col-span-5">
              <Reveal as="p" className="t-surtitre">
                Événements
              </Reveal>
              <Reveal as="h2" className="mt-5 max-w-[14ch] t-h2 text-chocolat" delay={0.08}>
                Là où l’on s’est rencontrés
              </Reveal>
            </div>
            <Reveal
              as="p"
              className="col-span-12 max-w-[52ch] self-end text-body text-text-muted md:col-span-6 md:col-start-7"
              delay={0.12}
            >
              Salons, soirées, pop-ups : je me déplace régulièrement pour partager le tatouage
              autrement, au plus près de celles et ceux qui le portent. Un aperçu des rendez-vous
              qui ont marqué la saison.
            </Reveal>
          </div>
        </div>
        <EventsList events={EVENTS} />
      </section>

      {/* ===================================================================
          MARIAGES · vidéo en fond, filtre sombre pour la lisibilité de la typo
          =================================================================== */}
      <section className="relative isolate overflow-hidden bg-chocolat text-creme has-grain is-dark">
        {/* Vidéo de fond, muette et en boucle */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/video/mariage.mp4"
          poster="/video/mariage-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        {/* Filtre sombre, pour garder la typographie lisible par-dessus la vidéo.
            Style inline : l'opacité Tailwind (chocolat/55…) ne marche pas ici. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(59,23,18,0.5)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to top, rgb(59,23,18) 0%, rgba(59,23,18,0.35) 45%, rgba(59,23,18,0.7) 100%)',
          }}
        />
        <span className="grain-layer" aria-hidden />

        <div className="container-page py-24 md:py-32">
          <div className="grid-12 items-center gap-y-12">
            {/* Texte */}
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <Reveal as="p" className="t-hand -rotate-3 text-rose">
                oui, je le veux
              </Reveal>
              <Reveal as="h2" className="mt-4 max-w-[16ch] t-h1 text-creme" delay={0.1}>
                Disponible pour vos mariages
              </Reveal>
              <Reveal
                as="p"
                className="mt-6 max-w-[46ch] text-body text-text-invert-muted"
                delay={0.16}
              >
                Pour célébrer votre union, je me déplace le temps d’un événement : flash
                éphémères, tatouages souvenirs ou petites attentions délicates à offrir à vos
                invités. Un moment d’art et de douceur, entièrement à votre image.
              </Reveal>
              <Reveal className="mt-8" delay={0.22}>
                <Button href="/contact" variant="primary">
                  Me contacter
                </Button>
              </Reveal>
            </div>

            {/* Deux visuels, légèrement décalés */}
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <Reveal className="mt-8 sm:mt-12">
                  <ImageFrame
                    src="/img/photos/mariage-1.webp"
                    alt="Tatouage souvenir réalisé lors d’un mariage"
                    ratio="portrait"
                    sizes="(max-width: 768px) 45vw, 26vw"
                  />
                </Reveal>
                <Reveal delay={0.12}>
                  <ImageFrame
                    src="/img/photos/mariage-2.webp"
                    alt="Instant d’un mariage accompagné par Victoria-Luz"
                    ratio="portrait"
                    sizes="(max-width: 768px) 45vw, 26vw"
                  />
                </Reveal>
              </div>
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
        {/* Visuel du podcast, ancré à droite et fondu dans le marron */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64%] md:block lg:w-[56%]"
        >
          <Image
            src="/img/photos/podcast-duo-1.webp"
            alt=""
            fill
            sizes="56vw"
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-marron via-marron/75 to-marron/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-marron/40 via-transparent to-marron/45" />
        </div>
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
