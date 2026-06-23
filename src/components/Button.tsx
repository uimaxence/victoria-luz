import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Boutons (design.md §6) :
 * - primary   : aplat accent (rose), texte Chocolat. Hover → Chocolat / texte Crème.
 * - secondary : contour 1px Chocolat, fond transparent. Hover → remplissage.
 * - link      : Work Sans, soulignement animé (0 → 100%).
 * - explore   : pastille ronde (contour), micro-rotation au survol.
 */

type Variant = 'primary' | 'secondary' | 'link' | 'explore';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  invert?: boolean; // sur fond foncé
  /** lien externe : rendu en <a target="_blank"> plutôt qu'en <Link> Next */
  external?: boolean;
  className?: string;
};

const base =
  'group inline-flex items-center gap-3 whitespace-nowrap font-sans transition-all duration-[var(--dur-1)] ease-soft focus-visible:outline-2';

export default function Button({
  href,
  children,
  variant = 'primary',
  invert = false,
  external = false,
  className = '',
}: ButtonProps) {
  // Un seul point de bascule Link interne ↔ ancre externe (target/rel).
  const Anchor = ({ children: c, ...rest }: { children: ReactNode; className?: string; 'aria-label'?: string }) =>
    external ? (
      <a href={href} target="_blank" rel="noreferrer noopener" {...rest}>
        {c}
      </a>
    ) : (
      <Link href={href} {...rest}>
        {c}
      </Link>
    );

  if (variant === 'primary') {
    return (
      <Anchor
        className={`${base} rounded-token bg-accent px-5 py-3 text-small uppercase tracking-[0.12em] text-chocolat hover:bg-chocolat hover:text-creme sm:px-6 sm:tracking-[0.16em] ${className}`}
      >
        <span>{children}</span>
        <Arrow />
      </Anchor>
    );
  }

  if (variant === 'secondary') {
    const tone = invert
      ? 'border-creme text-creme hover:bg-creme hover:text-chocolat'
      : 'border-chocolat text-chocolat hover:bg-chocolat hover:text-creme';
    return (
      <Anchor
        className={`${base} rounded-token border px-5 py-3 text-small uppercase tracking-[0.12em] sm:px-6 sm:tracking-[0.16em] ${tone} ${className}`}
      >
        <span>{children}</span>
        <Arrow />
      </Anchor>
    );
  }

  if (variant === 'explore') {
    const tone = invert ? 'border-creme text-creme' : 'border-chocolat text-chocolat';
    return (
      <Anchor
        aria-label={typeof children === 'string' ? children : 'Explorer'}
        className={`${base} aspect-square h-28 w-28 flex-col justify-center rounded-full border text-center text-caption uppercase tracking-[0.2em] hover:bg-accent hover:text-chocolat hover:border-accent ${tone} ${className}`}
      >
        <span className="block leading-tight">{children}</span>
        <span className="mt-1 inline-block transition-transform duration-[var(--dur-2)] ease-soft group-hover:rotate-90">
          ↓
        </span>
      </Anchor>
    );
  }

  // link
  const tone = invert ? 'text-creme' : 'text-accent';
  return (
    <Anchor
      className={`${base} relative w-fit text-small uppercase tracking-[0.16em] ${tone} ${className}`}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-[var(--dur-1)] ease-soft group-hover:scale-x-100 ${
            invert ? 'bg-creme' : 'bg-accent'
          }`}
        />
      </span>
      <Arrow />
    </Anchor>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-[var(--dur-1)] ease-soft group-hover:translate-x-1"
    >
      →
    </span>
  );
}
