'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/site';

/**
 * Navigation (design.md §6), barre pleine largeur, liens répartis,
 * logo VICTORIA-LUZ à gauche. Sticky discret. Variante claire (défaut) et
 * inversée (sur fond foncé). Menu plein écran sur mobile.
 */
export default function Nav({ invert = false }: { invert?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Verrouille le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const tone = invert ? 'text-creme' : 'text-chocolat';
  const bar = scrolled
    ? invert
      ? 'bg-marron/90 backdrop-blur-sm border-b border-line-invert'
      : 'bg-creme/85 backdrop-blur-sm border-b border-line'
    : 'bg-transparent border-b border-transparent';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-[var(--dur-1)] ${bar}`}
    >
      <nav className="container-page flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <Link
          href="/"
          className={`font-display text-h3 leading-none tracking-[0.02em] ${tone}`}
          onClick={() => setOpen(false)}
        >
          {SITE.logo}
        </Link>

        {/* Liens desktop */}
        <ul className={`hidden items-center gap-8 lg:flex ${tone}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative text-small uppercase tracking-[0.14em]"
              >
                {l.label}
                <span
                  aria-hidden
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-[var(--dur-1)] ease-soft group-hover:scale-x-100 ${
                    invert ? 'bg-creme' : 'bg-bleu-klein'
                  }`}
                />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="rounded-token bg-bleu-klein px-4 py-2 text-small uppercase tracking-[0.14em] text-creme transition-colors duration-[var(--dur-1)] hover:bg-chocolat"
            >
              Rendez-vous
            </Link>
          </li>
        </ul>

        {/* Burger mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={`flex h-11 w-11 items-center justify-center lg:hidden ${tone}`}
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-[var(--dur-1)] ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-6 bg-current transition-transform duration-[var(--dur-1)] ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Overlay menu mobile */}
      {open && (
        <div className="fixed inset-0 top-[64px] z-40 bg-creme lg:hidden has-grain">
          <span className="grain-layer" aria-hidden />
          <ul className="container-page flex flex-col gap-2 py-8">
            {NAV_LINKS.map((l, i) => (
              <li key={l.href} className="border-b border-line">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 font-display text-h2 uppercase text-chocolat"
                >
                  {l.label}
                  <span className="t-surtitre">(0{i + 1})</span>
                </Link>
              </li>
            ))}
            <li className="mt-6">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-token bg-bleu-klein px-6 py-3 text-small uppercase tracking-[0.16em] text-creme"
              >
                Prendre rendez-vous →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
