import IndexList from '@/components/IndexList';
import Reveal from '@/components/Reveal';
import { POLES } from '@/lib/site';

/**
 * Pattern editorial-index (design.md §4.2 n°4).
 * Liste numérotée (01)…(04) avec filets pleine largeur. Titre à gauche en
 * marge, liste à droite, composition décalée (offset), pas de centrage.
 */
export default function Poles() {
  return (
    <section className="bg-creme">
      <div className="container-page py-20 md:py-32">
        <div className="grid-12 gap-y-10">
          {/* En-tête à gauche, en retrait */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <Reveal as="p" className="t-surtitre">
              Explorer
            </Reveal>
            <Reveal as="h2" className="mt-5 max-w-[12ch] t-h2 text-chocolat" delay={0.08}>
              Quatre pôles, une même lumière
            </Reveal>
          </div>

          {/* Liste à droite */}
          <Reveal className="col-span-12 md:col-span-8 md:col-start-5" delay={0.12}>
            <IndexList items={POLES} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
