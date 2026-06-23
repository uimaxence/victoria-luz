/**
 * Contenu partagé du site, fidèle aux textes fournis par Victoria-Luz
 * (cf. brief « Site internet »). Les textes définitifs viennent du brief ;
 * les visuels sont des placeholders (réutilisés au hasard) à remplacer.
 * (design.md §1 : ton chaleureux, rassurant, valorisant, raffiné.)
 */

export const SITE = {
  name: 'Victoria-Luz',
  logo: 'VICTORIA-LUZ',
  tagline: 'Tatouage artistique & reconstruction corporelle',
  email: 'contact@victoria-luz.fr',
  phone: '06 67 51 55 12',
  phoneHref: '+33667515512',
  address: '6 avenue Pasteur, 49100 Angers',
  city: 'Angers',
  instagram: '@enluzd',
  instagramUrl: 'https://instagram.com/enluzd',
  /** Compte Instagram du podcast « Sous nos cicatrices ». */
  instagramPodcast: '@sous.nos.cicatrices',
  instagramPodcastUrl: 'https://www.instagram.com/sous.nos.cicatrices/',
  /** Prise de rendez-vous en ligne. */
  planity: 'https://www.planity.com/enluzd-49100-angers',
  /** Podcast « Sous nos cicatrices ». */
  youtube: 'https://www.youtube.com/@Sousnoscicatrices',
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
    desc: "De l'architecture d'intérieur au tatouage : un même regard sur l'espace, la matière et la composition, mis au service du corps et de l'humain.",
    href: '/qui-suis-je',
    image: '/img/portrait-flower.jpg',
  },
  {
    num: '02',
    title: 'Artiste tatoueuse',
    desc: 'Ornemental, floral, typographique : des pièces sur-mesure pensées comme des bijoux, en harmonie avec votre morphologie et votre histoire.',
    href: '/artiste-tatoueuse',
    image: '/img/skin-shoulder.jpg',
  },
  {
    num: '03',
    title: 'Reconstruction corporelle',
    desc: 'Aréole mammaire en 3D, camouflage de cicatrices, vergetures, tricopigmentation et maquillage semi-permanent. Se réapproprier son corps, en douceur.',
    href: '/reconstruction-corporelle',
    image: '/img/reconstruction-scar.jpg',
  },
  {
    num: '04',
    title: 'Podcast & événements',
    desc: '« Sous nos cicatrices » : un espace de parole pour les femmes. Des voix, des parcours, des rencontres et l’actualité du studio.',
    href: '/podcast-evenements',
    image: '/img/community-tulips.jpg',
  },
] as const;

/* =========================================================================
   Tatouage artistique (§ brief)
   ========================================================================= */
export const TATTOO_STYLES = [
  {
    num: '01',
    title: 'Ornemental',
    desc: "Inspiré de la joaillerie et des motifs décoratifs, le tatouage ornemental habille le corps comme un véritable bijou. J'aime y intégrer, lorsque le projet s'y prête, des inspirations issues des cultures hindoues ou thaïlandaises, à travers des symboles qui apportent une dimension spirituelle et intemporelle. Chaque composition épouse harmonieusement les courbes du corps.",
    image: '/img/skin-shoulder.jpg',
  },
  {
    num: '02',
    title: 'Floral',
    desc: 'Délicats et intemporels, les tatouages floraux apportent douceur et élégance au corps. Chaque fleur possède sa propre symbolique et s’intègre naturellement à votre silhouette pour créer une composition à la fois poétique et personnelle.',
    image: '/img/hero-botanical.jpg',
  },
  {
    num: '03',
    title: 'Typographique',
    desc: 'Un mot, une phrase ou quelques lettres peuvent raconter toute une histoire. Le tatouage typographique immortalise un souvenir, une valeur ou un message. Chaque écriture est choisie ou créée selon votre projet : il est même possible de reproduire l’écriture d’un proche, pour conserver une trace unique et profondément symbolique.',
    image: '/img/portrait-flower.jpg',
  },
] as const;

/* =========================================================================
   Reconstruction corporelle (§ brief)
   ========================================================================= */
export const RECONSTRUCTION_SERVICES = [
  {
    title: 'Aréole mammaire 3D',
    desc: "Grâce à la dermopigmentation 3D, recréer visuellement une aréole après une mastectomie ou une chirurgie reconstructrice. Chaque création est personnalisée pour un résultat harmonieux, naturel et en accord avec votre morphologie.",
  },
  {
    title: 'Camouflage des cicatrices',
    desc: "Qu'elles soient liées à une intervention, un accident ou un parcours de vie, certaines cicatrices peuvent être atténuées par une pigmentation adaptée. L'objectif n'est pas de les effacer, mais de les intégrer plus harmonieusement à la peau.",
  },
  {
    title: 'Atténuation des vergetures',
    desc: 'Lorsque leur état le permet, les vergetures peuvent être traitées par une dermopigmentation visant à rééquilibrer leur couleur avec celle de la peau environnante, pour diminuer leur visibilité tout en conservant un rendu naturel.',
  },
  {
    title: 'Tricopigmentation',
    desc: 'Reproduire l’illusion optique de follicules pileux afin de densifier visuellement certaines zones du cuir chevelu ou de camoufler des cicatrices. Une solution discrète et naturelle pour retrouver une apparence plus homogène.',
  },
] as const;

/** Maquillage semi-permanent (§ brief). */
export const MAQUILLAGE_SERVICES = [
  {
    title: 'Sourcils',
    desc: 'Les sourcils structurent le regard. J’utilise les techniques du poil à poil et du microshading, seules ou combinées, pour recréer un effet aérien et réaliste. Chaque implantation est dessinée sur mesure pour imiter la pousse naturelle du poil.',
  },
  {
    title: 'Lèvres',
    desc: 'La dermopigmentation des lèvres ravive leur couleur naturelle, redessine légèrement leur contour et apporte un effet lumineux tout en discrétion. Un résultat subtil et élégant, comme des lèvres naturellement fraîches au quotidien.',
  },
  {
    title: 'Taches de rousseur',
    desc: 'Réalisées avec finesse et en harmonie avec votre carnation, elles créent un effet ensoleillé naturel, rehaussent délicatement les pommettes et donnent au teint une apparence fraîche et spontanée.',
  },
] as const;

/* =========================================================================
   Podcast « Sous nos cicatrices » (§ brief)
   Épisodes placeholder · défilement horizontal (design.md §4.2 gallery-scroll).
   ========================================================================= */
export const PODCAST_EPISODES = [
  {
    num: '01',
    title: 'Après le cancer, se reconstruire',
    guest: 'Témoignage',
    excerpt: 'Mettre des mots sur l’épreuve, et redécouvrir un corps qui nous ressemble à nouveau.',
    image: '/img/reconstruction-scar.jpg',
  },
  {
    num: '02',
    title: 'Grossesse & post-partum',
    guest: 'Témoignage',
    excerpt: 'Ces transformations dont on parle trop peu, entre joie, vertige et réappropriation de soi.',
    image: '/img/bodies.jpg',
  },
  {
    num: '03',
    title: 'Vivre avec une maladie chronique',
    guest: 'Témoignage',
    excerpt: 'Les cicatrices invisibles, le quotidien, et la force tranquille de celles qui avancent.',
    image: '/img/body-texture.jpg',
  },
  {
    num: '04',
    title: 'Le deuil et ses empreintes',
    guest: 'Témoignage',
    excerpt: 'Comment le corps garde la mémoire de ce que l’on traverse, et comment on apprend à le porter.',
    image: '/img/portrait-flower.jpg',
  },
  {
    num: '05',
    title: 'Adoption & histoires familiales',
    guest: 'Témoignage',
    excerpt: 'Les parcours qui nous construisent, les liens choisis, les silences que l’on brise.',
    image: '/img/community-tulips.jpg',
  },
  {
    num: '06',
    title: 'Retrouver confiance en son corps',
    guest: 'Témoignage',
    excerpt: 'Regarder nos cicatrices autrement : non pas comme des faiblesses, mais les traces d’un chemin.',
    image: '/img/approach-skin.jpg',
  },
] as const;

/* =========================================================================
   Événements & actualités (§ brief)
   Contenu placeholder, à affiner avec Victoria.
   ========================================================================= */
/** Bandeau d'annonce affiché en haut de la page Podcast & événements.
 *  `text` est volontairement provisoire : à personnaliser ensuite. */
export const EVENT_BANNER = {
  label: 'Événements en cours',
  text: 'Octobre Rose au studio, phrase à personnaliser bientôt.',
  cta: 'En savoir plus',
  href: '#evenement',
};

export const FEATURED_EVENT = {
  status: 'En cours',
  date: 'Saison 2026',
  title: 'Octobre Rose, tatouages réparateurs',
  place: 'Studio Enluzd · Angers',
  desc: "Tout au long de la saison, un accompagnement dédié aux femmes en parcours de reconstruction : aréole mammaire 3D, camouflage de cicatrices et temps d'écoute. Un espace bienveillant pour avancer à votre rythme.",
  image: '/img/community-tulips.jpg',
  cta: { label: 'Participer / en savoir plus', href: '/contact' },
};

export const PAST_EVENTS = [
  {
    date: '2025',
    title: 'Lancement du podcast « Sous nos cicatrices »',
    desc: 'Premiers épisodes et premières voix réunies autour de la reconstruction de soi.',
    image: '/img/bodies.jpg',
  },
  {
    date: '2024',
    title: 'Ouverture du studio Enluzd',
    desc: 'Le choix de me consacrer pleinement au tatouage et à la reconstruction corporelle.',
    image: '/img/approach-skin.jpg',
  },
  {
    date: '2024',
    title: 'Formations spécialisées',
    desc: 'Biotic Phocea & PLN Studio : colorimétrie, types de peau et techniques peu invasives.',
    image: '/img/skin-shoulder.jpg',
  },
] as const;
