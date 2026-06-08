import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import Floral from '@/components/Floral';

/**
 * Pattern offset-stack (design.md §4.2 n°5), bande d'invitation chaleureuse.
 * Blocs désalignés : texte poussé à gauche, image poussée à droite et
 * débordante. Voix manuscrite (Caveat, parcimonie) en accent émotionnel.
 */
export default function Invitation() {
  return (
    <section className="relative isolate overflow-hidden bg-creme has-grain">
      <span className="grain-layer" aria-hidden />

      <div className="container-page py-20 md:py-32">
        <div className="grid-12 items-center gap-y-12">
          {/* Texte, poussé à gauche */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <Reveal as="p" className="t-hand -rotate-3 text-rose" delay={0.05}>
              la lumière revient
            </Reveal>
            <Reveal as="h2" className="mt-4 max-w-[16ch] t-h1 text-chocolat" delay={0.12}>
              Avancer ensemble, à votre rythme
            </Reveal>
            <Reveal
              as="p"
              className="mt-7 max-w-[48ch] text-body text-text-muted"
              delay={0.18}
            >
              Chaque histoire de peau est singulière. Prenons le temps d’un échange, pour
              imaginer une pièce qui vous ressemble, ou accompagner une reconstruction, avec
              délicatesse et sans précipitation.
            </Reveal>
            <Reveal className="mt-10 flex flex-wrap gap-4" delay={0.24}>
              <Button href="/contact" variant="primary">
                Prendre rendez-vous
              </Button>
              <Button href="/podcast-evenements" variant="link">
                Podcast &amp; événements
              </Button>
            </Reveal>
          </div>

          {/* Image, poussée à droite et débordante */}
          <Reveal
            className="relative col-span-12 md:col-span-6 md:col-start-7"
            delay={0.16}
          >
            <ImageFrame
              src="/img/community-tulips.jpg"
              alt="Trois femmes réunies, fleurs à la main, la force du collectif et de la beauté retrouvée"
              ratio="portrait"
              sizes="(max-width: 768px) 100vw, 44vw"
              objectPosition="center 25%"
              className="lg:bleed-right"
            />
            <Floral
              name="Feuilles_marron"
              className="pointer-events-none absolute -left-8 -top-8 hidden md:block"
              opacity={0.3}
              width={140}
              rotate={-8}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
