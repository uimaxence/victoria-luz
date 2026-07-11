import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import Reveal from '@/components/Reveal';
import Floral from '@/components/Floral';
import TattooRequestForm from '@/components/TattooRequestForm';

export const metadata: Metadata = {
  title: 'Demande de tatouage',
  description:
    'Décrivez votre projet de tatouage à Victoria-Luz : style, taille, emplacement et inspirations. Une réponse rapide avec un lien pour réserver votre rendez-vous à Angers.',
};

/**
 * Page « Demande de tatouage ». En-tête éditorial (accent Bleu Klein, réservé
 * au tatouage), puis formulaire en sections numérotées sur fond crème.
 */
export default function DemandeTatouagePage() {
  return (
    <>
      <PageHeader
        eyebrow="Tatouage artistique · Enluzd"
        tattoo
        title={[{ text: 'Parlez-moi de' }, { text: 'votre projet', accent: true }]}
        script="racontez-moi"
        lead="Partagez votre idée à votre rythme : ces quelques questions me permettent de comprendre votre projet avant notre premier échange. Je reviens vers vous au plus vite avec un lien pour réserver votre rendez-vous."
        image={{
          src: '/img/photos/ornemental_2.webp',
          alt: 'Tatouage ornemental en trait fin, pièce sur-mesure',
          objectPosition: 'center 30%',
        }}
        floral={{ name: 'Pivoine_1_rose', width: 150 }}
      />

      {/* ---- Formulaire ---- */}
      <section className="relative isolate overflow-hidden bg-creme has-grain">
        <span className="grain-layer" aria-hidden />
        <Floral
          name="Feuilles_marron"
          className="pointer-events-none absolute -right-8 top-24 hidden lg:block"
          opacity={0.14}
          width={170}
          rotate={-10}
        />
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <TattooRequestForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
