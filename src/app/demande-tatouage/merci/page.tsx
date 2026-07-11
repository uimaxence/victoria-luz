import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import Floral from '@/components/Floral';

export const metadata: Metadata = {
  title: 'Demande envoyée',
  description:
    'Votre demande de tatouage est bien envoyée. Victoria-Luz revient vers vous au plus vite avec un lien pour réserver votre rendez-vous.',
  robots: { index: false },
};

/** Page de confirmation après l'envoi du formulaire de demande de tatouage. */
export default function MerciPage() {
  return (
    <section className="relative isolate overflow-hidden bg-creme has-grain has-texture">
      <span className="texture-layer" aria-hidden />
      <span className="grain-layer" aria-hidden />
      <Floral
        name="Pivoine_2_rose"
        className="pointer-events-none absolute -right-10 bottom-10 hidden md:block"
        opacity={0.2}
        width={220}
        rotate={8}
      />
      <div className="container-page flex min-h-[70svh] flex-col justify-center py-28">
        <Reveal as="p" className="t-hand -rotate-3">
          merci
        </Reveal>
        <Reveal as="h1" className="mt-4 max-w-[18ch] t-h1 text-chocolat" delay={0.08}>
          Votre demande est bien envoyée
        </Reveal>
        <Reveal
          as="p"
          className="mt-6 max-w-[52ch] text-body text-text-muted"
          delay={0.14}
        >
          Je prends le temps de lire chaque projet avec attention, et je reviens vers vous au
          plus vite avec un lien pour réserver votre rendez-vous. À très bientôt au studio.
        </Reveal>
        <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row" delay={0.2}>
          <Button href="/artiste-tatoueuse" variant="primary">
            Voir mes réalisations
          </Button>
          <Button href="/" variant="secondary">
            Retour à l&rsquo;accueil
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
