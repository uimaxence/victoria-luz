import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import Floral from '@/components/Floral';
import Stamp from '@/components/Stamp';
import Button from '@/components/Button';
import { RECONSTRUCTION_SERVICES, MAQUILLAGE_SERVICES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Reconstruction corporelle',
  description:
    'Tatouage réparateur et dermopigmentation à Angers : aréole mammaire 3D, camouflage de cicatrices, atténuation des vergetures, tricopigmentation et maquillage semi-permanent. Un accompagnement doux et sécurisé.',
};

/**
 * Page « Reconstruction corporelle ». Bloc immersif Marron (broken-overlap) pour
 * les prestations réparatrices, callout « informations importantes », puis
 * section Maquillage semi-permanent et CTA rendez-vous (Planity).
 */
export default function ReconstructionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reconstruction corporelle · Enluzd"
        title={[
          { text: 'Se réapproprier' },
          { text: 'son corps,' },
          { text: 'en douceur', accent: true },
        ]}
        script="reconstruire"
        lead="Une maladie, une opération, une grossesse ou un accident peuvent laisser des marques qui impactent l’image de soi. Le tatouage réparateur est une manière délicate de redonner ce qui a été perdu."
        image={{
          src: '/img/reconstruction-scar.jpg',
          alt: 'Peau apaisée portant une fine cicatrice, accompagnée avec douceur',
          objectPosition: 'center',
        }}
        floral={{ name: 'Pivoine_3_creme', width: 150 }}
      />

      {/* ---- Intro accompagnement ---- */}
      <section className="relative isolate overflow-hidden bg-nude has-grain">
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-16 md:py-24">
          <div className="grid-12 items-start gap-y-8">
            <Reveal as="p" className="col-span-12 t-surtitre md:col-span-3">
              Un accompagnement
            </Reveal>
            <div className="col-span-12 max-w-[62ch] space-y-5 text-body text-text md:col-span-9 md:col-start-4 md:t-body-justify">
              <Reveal as="p" delay={0.08}>
                Depuis plusieurs années, j’accompagne les personnes dans cette étape de
                reconstruction. Bien plus qu’un geste esthétique, c’est un véritable
                accompagnement vers la réappropriation de son corps et le retour à la confiance
                en soi.
              </Reveal>
              <Reveal as="p" delay={0.14}>
                Afin de proposer une prise en charge adaptée et sécurisée, j’ai suivi plusieurs
                formations spécialisées, notamment auprès de <strong>Biotic Phocea</strong> et du{' '}
                <strong>PLN Studio</strong> : colorimétrie adaptée à chaque carnation, types de
                peau et leurs spécificités. J’utilise des techniques et des aiguilles peu
                invasives, choisies pour respecter la peau et favoriser une cicatrisation
                optimale.
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Prestations réparatrices, bloc immersif ---- */}
      <section className="relative isolate overflow-hidden bg-marron text-creme has-grain is-dark">
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-20 md:py-32">
          <div className="grid-12 items-start gap-y-16">
            {/* Visuel chevauchant */}
            <Reveal className="relative col-span-12 md:col-span-5">
              <div
                aria-hidden
                className="absolute -left-4 -top-6 h-full w-full rounded-token bg-chocolat md:-left-8 md:-top-8"
              />
              <ImageFrame
                src="/img/body-texture.jpg"
                alt="Détail de peau en pleine lumière, la matière du corps respectée"
                ratio="portrait"
                sizes="(max-width: 768px) 100vw, 40vw"
                className="relative"
              />
              <span className="absolute -right-4 -top-8 text-creme md:-top-12">
                <Stamp variant="reconstruction" size={120} spin />
              </span>
              <Floral
                name="Pivoine_3_creme"
                className="pointer-events-none absolute -left-12 bottom-8 hidden lg:block"
                opacity={0.14}
                width={170}
              />
            </Reveal>

            {/* Liste prestations */}
            <div className="col-span-12 md:col-span-6 md:col-start-7 md:pl-gutter lg:pl-12">
              <Reveal as="p" className="t-surtitre text-text-invert-muted">
                Les prestations
              </Reveal>
              <Reveal as="h2" className="mt-5 max-w-[16ch] t-h2 text-creme" delay={0.1}>
                Réparer, atténuer, harmoniser
              </Reveal>

              <ul className="mt-10 border-t border-line-invert">
                {RECONSTRUCTION_SERVICES.map((s, i) => (
                  <Reveal
                    as="li"
                    key={s.title}
                    className="grid grid-cols-12 items-baseline gap-3 border-b border-line-invert py-6"
                    delay={0.16 + i * 0.06}
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
            </div>
          </div>
        </div>
      </section>

      {/* ---- Informations importantes (callout) ---- */}
      <section className="relative isolate overflow-hidden bg-creme has-grain">
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-16 md:py-24">
          <Reveal className="grid-12 gap-y-8 rounded-token border border-line bg-nude/40 p-8 md:p-12">
            <div className="col-span-12 md:col-span-4">
              <p className="t-hand -rotate-2 text-rose">en sécurité</p>
              <h2 className="mt-3 max-w-[14ch] t-h3 text-chocolat">
                Informations importantes
              </h2>
            </div>
            <div className="col-span-12 space-y-4 text-body text-text-muted md:col-span-7 md:col-start-6">
              <p>
                La sécurité de votre peau et de votre santé est ma priorité. Avant toute prise
                en charge, un échange approfondi est réalisé afin de vérifier que toutes les
                conditions sont réunies.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 border-t border-line pt-4">
                  <span aria-hidden className="text-bleu-klein">—</span>
                  <span>
                    Pour les tatouages reconstructeurs, il est indispensable de ne plus être
                    sous chimiothérapie.
                  </span>
                </li>
                <li className="flex gap-3 border-t border-line pt-4">
                  <span aria-hidden className="text-bleu-klein">—</span>
                  <span>
                    Pour la reconstruction d’aréole mammaire, les traitements par radiothérapie
                    doivent être terminés et les tissus suffisamment cicatrisés.
                  </span>
                </li>
                <li className="flex gap-3 border-t border-line pt-4">
                  <span aria-hidden className="text-bleu-klein">—</span>
                  <span>
                    Chaque projet fait l’objet d’une étude personnalisée, adaptée à votre
                    histoire, votre peau et vos attentes.
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Maquillage semi-permanent ---- */}
      <section className="relative isolate overflow-hidden bg-nude has-grain">
        <span className="grain-layer" aria-hidden />
        <Floral
          name="Feuilles_marron"
          className="pointer-events-none absolute -right-8 top-12 hidden md:block"
          opacity={0.22}
          width={160}
          rotate={-8}
        />
        <div className="container-page py-20 md:py-28">
          <div className="grid-12 gap-y-10">
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <Reveal as="p" className="t-surtitre">
                Maquillage semi-permanent
              </Reveal>
              <Reveal as="h2" className="mt-5 max-w-[14ch] t-h2 text-chocolat" delay={0.08}>
                Révéler, sans transformer
              </Reveal>
              <Reveal
                as="p"
                className="mt-6 max-w-[42ch] text-body text-text-muted"
                delay={0.14}
              >
                Une technique de dermopigmentation qui sublime naturellement certains traits du
                visage, dans le respect de votre morphologie et de votre identité. Formée auprès
                de PLN Studio et Biotic Phocea.
              </Reveal>
            </div>

            <Reveal className="col-span-12 md:col-span-8 md:col-start-5" delay={0.12}>
              <ul className="border-t border-line">
                {MAQUILLAGE_SERVICES.map((s) => (
                  <li
                    key={s.title}
                    className="grid grid-cols-12 items-baseline gap-3 border-b border-line py-6"
                  >
                    <span className="col-span-12 t-h3 font-display text-chocolat sm:col-span-4">
                      {s.title}
                    </span>
                    <span className="col-span-12 text-body text-text-muted sm:col-span-8">
                      {s.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- CTA rendez-vous ---- */}
      <section className="relative isolate overflow-hidden bg-creme has-grain">
        <span className="grain-layer" aria-hidden />
        <div className="container-page py-20 md:py-28">
          <div className="grid-12 items-end gap-y-8">
            <div className="col-span-12 md:col-span-8">
              <Reveal as="h2" className="max-w-[20ch] t-h1 text-chocolat">
                Avancer à votre rythme, en toute confidentialité
              </Reveal>
              <Reveal as="p" className="mt-6 max-w-[52ch] text-body text-text-muted" delay={0.12}>
                Chaque rencontre commence par une conversation, sans engagement. Prenez
                rendez-vous en ligne ou écrivez-moi pour échanger sur votre projet.
              </Reveal>
            </div>
            <Reveal
              className="col-span-12 flex flex-col gap-4 sm:flex-row md:col-span-4 md:justify-end"
              delay={0.18}
            >
              <Button href="/contact" variant="secondary">
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
