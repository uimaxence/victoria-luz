/**
 * Tampons / submarks (design.md §6), SVG inline propres, posables en
 * surimpression d'angle d'image. Couleur héritée de `currentColor`
 * (utiliser une classe text-* du thème). Rotation lente optionnelle.
 *
 * Variantes : "vl" (monogramme VL.), "reconstruction", "enluzd".
 */

type StampVariant = 'vl' | 'reconstruction' | 'enluzd';

type StampProps = {
  variant?: StampVariant;
  /** diamètre rendu (px ou n'importe quelle unité CSS) */
  size?: number | string;
  spin?: boolean;
  className?: string;
};

const RING_TEXT: Record<StampVariant, { top: string; bottom: string; center: string; sub?: string }> = {
  vl: {
    top: 'VICTORIA · LUZ',
    bottom: 'ENLUZD · STUDIO',
    center: 'VL.',
  },
  reconstruction: {
    top: 'RECONSTRUCTION',
    bottom: 'CORPORELLE',
    center: 'VL',
    sub: 'soin',
  },
  enluzd: {
    top: 'ENLUZD',
    bottom: 'EST. 2024',
    center: 'EL',
  },
};

export default function Stamp({ variant = 'vl', size = 132, spin = false, className }: StampProps) {
  const t = RING_TEXT[variant];
  const dim = typeof size === 'number' ? `${size}px` : size;

  return (
    <svg
      viewBox="0 0 200 200"
      width={dim}
      height={dim}
      role="img"
      aria-label={`Tampon ${t.top} ${t.bottom}`}
      className={[spin ? 'spin-slow' : '', className].filter(Boolean).join(' ')}
      style={{ color: 'currentColor', display: 'block' }}
    >
      <defs>
        {/* Cercle haut (texte à l'endroit) */}
        <path id={`vl-top-${variant}`} fill="none" d="M 100,100 m -76,0 a 76,76 0 1,1 152,0" />
        {/* Cercle bas (texte à l'endroit, lecture gauche→droite) */}
        <path id={`vl-bot-${variant}`} fill="none" d="M 100,100 m -76,0 a 76,76 0 0,0 152,0" />
      </defs>

      {/* Anneaux */}
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.9" />
      <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      {/* Texte circulaire */}
      <text
        fill="currentColor"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          letterSpacing: '0.18em',
          fontWeight: 500,
        }}
      >
        <textPath href={`#vl-top-${variant}`} startOffset="50%" textAnchor="middle">
          {t.top}
        </textPath>
      </text>
      <text
        fill="currentColor"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          letterSpacing: '0.18em',
          fontWeight: 500,
        }}
      >
        <textPath href={`#vl-bot-${variant}`} startOffset="50%" textAnchor="middle">
          {t.bottom}
        </textPath>
      </text>

      {/* Petites étoiles séparatrices à gauche/droite */}
      <g fill="currentColor" opacity="0.8">
        <circle cx="16" cy="100" r="1.6" />
        <circle cx="184" cy="100" r="1.6" />
      </g>

      {/* Monogramme central (Solea/display) */}
      <text
        x="100"
        y={t.sub ? '98' : '108'}
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: 'var(--font-display)', fontSize: '34px', letterSpacing: '0.02em' }}
      >
        {t.center}
      </text>
      {t.sub && (
        <text
          x="100"
          y="118"
          textAnchor="middle"
          fill="currentColor"
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '18px',
          }}
        >
          {t.sub}
        </text>
      )}
    </svg>
  );
}
