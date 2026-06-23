import Hero from '@/components/sections/Hero';
import Approach from '@/components/sections/Approach';
import Interlude from '@/components/sections/Interlude';
import Poles from '@/components/sections/Poles';
import Reconstruction from '@/components/sections/Reconstruction';
import Invitation from '@/components/sections/Invitation';

/**
 * Page d'accueil, composition asymétrique, jamais tout centré.
 * Enchaînement de patterns (design.md §4.2), orientations alternées,
 * respiration généreuse. Les « interludes » (mot manuscrit + image) ne portent
 * pas d'info : ils aèrent et donnent du corps. Le footer (CTA RDV) vient du layout.
 */
export default function HomePage() {
  return (
    <>
      <Hero />            {/* hero-bleed */}
      <Approach />        {/* split-5-7, image gauche */}

      {/* Interlude décoratif, respiration */}
      <Interlude
        eyebrow="Respiration"
        heading="Chaque trait raconte une histoire"
        script={['l’art', 'dans le détail']}
        image={{
          src: '/img/photos/ornemental_5.webp',
          alt: 'Détail d’une épaule à la lumière douce, la peau comme support sensible',
          ratio: 'landscape',
          objectPosition: 'center 35%',
        }}
        floral={{ name: 'Pivoine_2_rose', width: 150, rotate: -6 }}
        scriptColor="rose"
      />

      <Poles />           {/* editorial-index */}
      <Reconstruction />  {/* broken-overlap, bloc immersif */}

      {/* Second interlude, duo d'images en chevauchement */}
      <Interlude
        eyebrow="Lumière"
        heading="Se sentir soi, pleinement"
        script={['rayonner']}
        image={{
          src: '/img/photos/floral_2.webp',
          alt: 'Silhouettes baignées de lumière, la beauté des corps, sans artifice',
          ratio: 'landscape',
          objectPosition: 'center 30%',
        }}
        secondary={{
          src: '/img/photos/img_8816.webp',
          alt: 'Tatouage floral délicat au poignet, trait fin',
          ratio: 'square',
          objectPosition: 'center 25%',
        }}
        mirror
        tone="nude"
        scriptColor="chocolat"
      />

      <Invitation />      {/* offset-stack, invitation */}
    </>
  );
}
