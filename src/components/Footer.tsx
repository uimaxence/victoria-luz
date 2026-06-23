import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/site';
import Stamp from './Stamp';
import Floral from './Floral';

/**
 * Footer (design.md §6), logo, navigation, réseaux, CTA contact/RDV, mentions.
 * Fond Chocolat, texte Crème. Grain + fleur au trait dosés.
 */
export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-chocolat text-creme has-grain has-texture is-dark">
      <span className="texture-layer" aria-hidden />
      <span className="grain-layer" aria-hidden />

      {/* Fleur débordante, basse opacité */}
      <Floral
        name="Pivoine_4_creme"
        className="pointer-events-none absolute -left-10 bottom-0 hidden md:block"
        opacity={0.08}
        width={320}
      />

      <div className="container-page py-16 md:py-24">
        {/* CTA principal */}
        <div className="grid-12 items-end gap-y-10">
          <div className="col-span-12 md:col-span-8">
            <p className="t-surtitre text-text-invert-muted">Prendre rendez-vous</p>
            <h2 className="mt-4 max-w-[14ch] font-display text-h1 uppercase leading-[1.05]">
              Parlons de votre projet
            </h2>
            <p className="mt-6 max-w-prose text-body text-text-invert-muted">
              Tatouage artistique ou reconstruction : chaque rencontre commence par une
              conversation, sans engagement, en toute confidentialité.
            </p>
          </div>
          <div className="col-span-12 flex md:col-span-4 md:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-token border border-creme px-6 py-3 text-small uppercase tracking-[0.16em] text-creme transition-colors duration-[var(--dur-1)] hover:bg-creme hover:text-chocolat"
            >
              Écrire à Victoria
              <span className="transition-transform duration-[var(--dur-1)] group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        <hr className="rule rule-invert my-12 md:my-16" />

        {/* Colonnes */}
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <p className="font-display text-h3 uppercase tracking-[0.02em]">{SITE.logo}</p>
            <p className="mt-3 max-w-[34ch] text-small text-text-invert-muted">
              {SITE.tagline}. Studio à {SITE.city} · sous-marque Enluzd.
            </p>
          </div>

          <nav className="col-span-6 md:col-span-3" aria-label="Pied de page">
            <p className="t-surtitre text-text-invert-muted">Le site</p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-small hover:text-rose">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 md:col-span-3">
            <p className="t-surtitre text-text-invert-muted">Contact</p>
            <ul className="mt-4 space-y-2 text-small">
              <li>
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-rose">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-rose">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  className="hover:text-rose"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Instagram {SITE.instagram}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramPodcastUrl}
                  className="hover:text-rose"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Instagram {SITE.instagramPodcast}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 flex md:col-span-2 md:justify-end">
            <span className="text-creme/80">
              <Stamp variant="enluzd" size={108} spin />
            </span>
          </div>
        </div>

        <hr className="rule rule-invert my-10" />

        <div className="flex flex-col gap-2 text-caption text-text-invert-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}, Tous droits réservés.</p>
          <p className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-creme">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-creme">
              Confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
