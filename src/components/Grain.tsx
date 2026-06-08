/**
 * Calque de grain (design.md §7) à poser dans un conteneur `.has-grain`.
 * Subtil, le parent porte `has-grain` (+ `is-dark` sur fond foncé).
 */
export default function Grain() {
  return <span className="grain-layer" aria-hidden />;
}
