/**
 * Fleurs au trait (pivoines) & feuillages (design.md §7), assets fournis dans
 * /public/florals (couleur intégrée au fichier : rose, marron, bleuet, nude,
 * chocolat, bleu, creme). Décoratif → aria-hidden, basse opacité, débordant.
 *
 * Usage : <Floral name="Pivoine_4_rose" className="absolute ..." opacity={0.5} />
 */

type FloralProps = {
  /** Nom du fichier dans /public/florals, sans extension. */
  name: string;
  className?: string;
  /** opacité (parcimonie : design.md recommande basse opacité) */
  opacity?: number;
  /** rotation en degrés */
  rotate?: number;
  /** retourner horizontalement */
  flip?: boolean;
  /** largeur CSS (hauteur auto) */
  width?: number | string;
  /** styles additionnels, positionnement notamment, fusionnés en dernier */
  style?: React.CSSProperties;
};

export default function Floral({
  name,
  className,
  opacity = 0.5,
  rotate = 0,
  flip = false,
  width,
  style,
}: FloralProps) {
  const transform = `${flip ? 'scaleX(-1) ' : ''}${rotate ? `rotate(${rotate}deg)` : ''}`.trim();
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/florals/${name}.svg`}
      alt=""
      aria-hidden
      draggable={false}
      loading="lazy"
      className={className}
      style={{
        opacity,
        transform: transform || undefined,
        width: typeof width === 'number' ? `${width}px` : width,
        height: 'auto',
        userSelect: 'none',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}
