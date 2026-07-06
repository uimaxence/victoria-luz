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
          objectPosition: 'center 70%',
        }}
        floral={{ name: 'Pivoine_2_rose', width: 150, rotate: -6 }}
        scriptColor="chocolat"
      />

      <Poles />           {/* editorial-index */}
      <Reconstruction />  {/* broken-overlap, bloc immersif */}

      {/* Second interlude, duo d'images en chevauchement */}
      <Interlude
        eyebrow="Lumière"
        heading="Se sentir soi, pleinement"
        script={['rayonner']}
        image={{
          src: '/img/photos/reconstruction-hero.webp',
          alt: 'Trois femmes aux corps différents, fleurs à la main, baignées de lumière',
          ratio: 'landscape',
          objectPosition: 'center 22%',
        }}
        secondary={{
          src: '/img/photos/grossesse-postpartum.webp',
          alt: 'Un corps et une fleur, célébration des marques que la vie laisse sur la peau',
          ratio: 'square',
          objectPosition: 'center 40%',
        }}
        mirror
        tone="nude"
        scriptColor="chocolat"
      />

      <Invitation />      {/* offset-stack, invitation */}
    </>
  );
}
