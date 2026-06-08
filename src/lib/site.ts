/**
 * Contenu partagé du site. Placeholders crédibles et dignes, fidèles aux vraies
 * prestations de Victoria-Luz, à remplacer par les textes définitifs.
 * (design.md §1 : ton chaleureux, rassurant, valorisant, raffiné.)
 */

export const SITE = {
  name: 'Victoria-Luz',
  logo: 'VICTORIA-LUZ',
  tagline: 'Tatouage artistique & reconstruction corporelle',
  email: 'contact@victoria-luz.fr',
  city: 'Nantes',
  instagram: '@victoria.luz',
};

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: 'Qui suis-je', href: '/qui-suis-je' },
  { label: 'Artiste tatoueuse', href: '/artiste-tatoueuse' },
  { label: 'Reconstruction', href: '/reconstruction-corporelle' },
  { label: 'Podcast & événements', href: '/podcast-evenements' },
];

/** Les quatre pôles, format editorial-index (design.md §4.2).
 *  `image` : visuel affiché en « curseur-image » au survol de la ligne (§8). */
export const POLES = [
  {
    num: '01',
    title: 'Qui suis-je',
    desc: "De l'architecture d'intérieur au tatouage : un même regard sur l'espace, la matière et la composition, mis au service du corps.",
    href: '/qui-suis-je',
    image: '/img/portrait-flower.jpg',
  },
  {
    num: '02',
    title: 'Artiste tatoueuse',
    desc: "Des pièces sur-mesure, dessinées pour vous seul·e. Un style personnel, une exigence d'atelier, une expérience qui ressemble au luxe.",
    href: '/artiste-tatoueuse',
    image: '/img/skin-shoulder.jpg',
  },
  {
    num: '03',
    title: 'Reconstruction corporelle',
    desc: "Aréole mammaire en 3D, camouflage de cicatrices, dermopigmentation des sourcils et des lèvres. Se réapproprier son corps, en douceur.",
    href: '/reconstruction-corporelle',
    image: '/img/reconstruction-scar.jpg',
  },
  {
    num: '04',
    title: 'Podcast & événements',
    desc: "Des voix, des parcours, des rencontres. Une communauté autour du soin, de l'art et de la lumière retrouvée.",
    href: '/podcast-evenements',
    image: '/img/community-tulips.jpg',
  },
] as const;

/** Prestations réparatrices, mises en avant section reconstruction. */
export const RECONSTRUCTION_SERVICES = [
  {
    title: 'Aréole mammaire 3D',
    desc: 'Après une mastectomie, recréer le relief et la nuance d’une aréole en trompe-l’œil, avec réalisme et délicatesse.',
  },
  {
    title: 'Camouflage de cicatrices',
    desc: 'Atténuer une cicatrice, une vergeture ou une greffe en réharmonisant la teinte de la peau.',
  },
  {
    title: 'Sourcils & lèvres',
    desc: 'Dermopigmentation sur-mesure pour redessiner, densifier et raviver, naturellement.',
  },
] as const;
