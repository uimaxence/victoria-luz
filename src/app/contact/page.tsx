import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import Floral from '@/components/Floral';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & rendez-vous',
  description:
    'Prendre rendez-vous avec Victoria-Luz à Angers : réservation en ligne, téléphone, e-mail et Instagram. Tatouage artistique, reconstruction corporelle et maquillage semi-permanent.',
};

/**
 * Page « Contact ». En-tête éditorial, coordonnées en colonnes (offset-stack),
 * et CTA de réservation en ligne (Planity).
 */
export default function ContactPage() {
  const blocks = [
    {
      label: 'Le studio',
      value: SITE.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
      external: true,
    },
    { label: 'Téléphone', value: SITE.phone, href: `tel:${SITE.phoneHref}` },
    { label: 'E-mail', value: SITE.email, href: `mailto:${SITE.email}` },
    {
      label: 'Instagram',
      value: SITE.instagram,
      href: SITE.instagramUrl,
      external: true,
    },
    {
      label: 'Instagram reconstruction',
      value: SITE.instagramReconstruction,
      href: SITE.instagramReconstructionUrl,
      external: true,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact · Victoria-Luz"
        title={[{ text: 'Parlons de' }, { text: 'votre projet', accent: true }]}
        script="à bientôt"
        lead="Tatouage artistique ou reconstruction : chaque rencontre commence par une conversation, sans engagement et en toute confidentialité."
        image={{
          src: '/img/portrait-flower.jpg',
          alt: 'Portrait délicat, une fleur à la main',
          objectPosition: 'center 25%',
        }}
        floral={{ name: 'Pivoine_2_creme', width: 150 }}
      />

      {/* ---- Coordonnées + RDV ---- */}
      <section className="relative isolate overflow-hidden bg-nude has-grain">
        <span className="grain-layer" aria-hidden />
        <Floral
          name="Feuilles_marron"
          className="pointer-events-none absolute -right-8 top-10 hidden md:block"
          opacity={0.2}
          width={160}
          rotate={-8}
        />
        <div className="container-page py-20 md:py-28">
          <div className="grid-12 gap-y-14">
            {/* Coordonnées */}
            <div className="col-span-12 md:col-span-7">
              <Reveal as="p" className="t-surtitre">
                Coordonnées
              </Reveal>
              <dl className="mt-8 border-t border-line">
                {blocks.map((b, i) => (
                  <Reveal
                    as="div"
                    key={b.label}
                    className="grid grid-cols-12 items-baseline gap-3 border-b border-line py-5"
                    delay={0.06 + i * 0.05}
                  >
                    <dt className="col-span-12 t-surtitre sm:col-span-4">{b.label}</dt>
                    <dd className="col-span-12 sm:col-span-8">
                      <a
                        href={b.href}
                        {...(b.external
                          ? { target: '_blank', rel: 'noreferrer noopener' }
                          : {})}
                        className="t-h3 font-display text-chocolat transition-colors hover:text-accent"
                      >
                        {b.value}
                      </a>
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </div>

            {/* Encart RDV */}
            <Reveal
              className="col-span-12 md:col-span-4 md:col-start-9"
              delay={0.12}
            >
              <div className="rounded-token border border-line bg-creme p-8">
                <p className="t-hand -rotate-3 text-rose">réserver</p>
                <h2 className="mt-3 t-h2 text-chocolat">Prendre rendez-vous</h2>
                <p className="mt-4 text-body text-text-muted">
                  La réservation se fait en ligne, en quelques minutes. Pour un projet de
                  tatouage sur-mesure, décrivez-moi votre idée par message : nous le dessinerons
                  ensemble avant la séance.
                </p>
                <div className="mt-8 flex flex-col gap-4">
                  <Button href={SITE.planity} variant="primary" external>
                    Réserver sur Planity
                  </Button>
                  <Button href={`mailto:${SITE.email}`} variant="secondary" external>
                    Écrire un e-mail
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
