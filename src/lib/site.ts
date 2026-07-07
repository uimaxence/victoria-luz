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
  { label: 'Maquillage semi-permanent', href: '/maquillage-semi-permanent' },
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
    image: '/img/photos/qui-suis-je.webp',
  },
  {
    num: '02',
    title: 'Artiste tatoueuse',
    desc: 'Ornemental, floral, typographique : des pièces sur-mesure pensées comme des bijoux, en harmonie avec votre morphologie et votre histoire.',
    href: '/artiste-tatoueuse',
    image: '/img/photos/artiste-teaser.webp',
  },
  {
    num: '03',
    title: 'Reconstruction corporelle',
    desc: 'Aréole mammaire en 3D, camouflage de cicatrices, vergetures et tricopigmentation. Se réapproprier son corps, en douceur.',
    href: '/reconstruction-corporelle',
    image: '/img/photos/reconstruction-hero.webp',
  },
  {
    num: '04',
    title: 'Maquillage semi-permanent',
    desc: 'Sourcils, lèvres et taches de rousseur : une dermopigmentation qui révèle vos traits avec naturel, sans jamais transformer votre visage.',
    href: '/maquillage-semi-permanent',
    image: '/img/photos/sourcil_1_2.webp',
  },
  {
    num: '05',
    title: 'Podcast & événements',
    desc: '« Sous nos cicatrices » : un espace de parole pour les femmes. Des voix, des parcours, des rencontres et l’actualité du studio.',
    href: '/podcast-evenements',
    image: '/img/photos/podcast-duo-2.webp',
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
    image: '/img/photos/ornemental_dos.webp',
  },
  {
    num: '02',
    title: 'Floral',
    desc: 'Délicats et intemporels, les tatouages floraux apportent douceur et élégance au corps. Chaque fleur possède sa propre symbolique et s’intègre naturellement à votre silhouette pour créer une composition à la fois poétique et personnelle.',
    image: '/img/photos/floral_1.webp',
  },
  {
    num: '03',
    title: 'Typographique',
    desc: 'Un mot, une phrase ou quelques lettres peuvent raconter toute une histoire. Le tatouage typographique immortalise un souvenir, une valeur ou un message. Chaque écriture est choisie ou créée selon votre projet : il est même possible de reproduire l’écriture d’un proche, pour conserver une trace unique et profondément symbolique.',
    image: '/img/photos/typo_1.webp',
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
export const MAQUILLAGE_INTRO = [
  'Le maquillage permanent est une technique de dermopigmentation qui permet de sublimer naturellement certains traits du visage tout en respectant votre morphologie et votre identité. L’objectif n’est jamais de transformer, mais de révéler votre beauté avec des résultats subtils, élégants et adaptés à votre peau.',
  'Formée auprès de PLN Studio ainsi que de Biotic Phocea, j’ai développé une approche fondée sur la précision, la colorimétrie et le naturel afin de créer des résultats harmonieux qui évoluent avec le temps.',
] as const;

export const MAQUILLAGE_SERVICES = [
  {
    title: 'Sourcils',
    desc: 'Les sourcils structurent le regard et participent pleinement à l’équilibre du visage. J’utilise principalement les techniques du poil à poil et du microshading, seules ou combinées selon vos besoins, afin de recréer un effet aérien et réaliste. Chaque implantation est dessinée sur mesure pour imiter la pousse naturelle du poil et offrir un résultat délicat, loin des sourcils trop marqués ou figés.',
  },
  {
    title: 'Lèvres',
    desc: 'La dermopigmentation des lèvres permet de raviver leur couleur naturelle, de redessiner légèrement leur contour et d’apporter un effet lumineux tout en discrétion. Le résultat reste subtil et élégant, comme si vos lèvres étaient naturellement fraîches et éclatantes au quotidien.',
  },
  {
    title: 'Taches de rousseur',
    desc: 'Les taches de rousseur peuvent apporter beaucoup de caractère et illuminer un visage. Réalisées avec finesse et en parfaite harmonie avec votre carnation, elles créent un effet ensoleillé naturel, rehaussent délicatement les pommettes et donnent au teint une apparence fraîche et spontanée, comme après quelques jours passés au soleil.',
  },
] as const;

/** Phrase de clôture, avant la prise de rendez-vous. */
export const MAQUILLAGE_OUTRO = [
  'Chaque projet est précédé d’un temps d’échange afin de comprendre vos attentes et de concevoir une pigmentation parfaitement adaptée à votre visage.',
  'Mon objectif est simple : que l’on remarque votre éclat… sans jamais deviner qu’il s’agit d’un maquillage permanent.',
] as const;

/* =========================================================================
   Podcast « Sous nos cicatrices » (§ brief)
   Épisodes placeholder · défilement horizontal (design.md §4.2 gallery-scroll).
   ========================================================================= */
export const PODCAST_EPISODES = [
  {
    num: '01',
    title: 'Quand accoucher devient une violence',
    guest: 'Le parcours de Cécile',
    excerpt: 'Mettre des mots sur les violences obstétricales, et se reconstruire après une maternité éprouvante.',
    image: '/img/photos/podcast-cecile.webp',
  },
  {
    num: '02',
    title: 'Savoir dire non pour reprendre son pouvoir',
    guest: 'Le parcours de Caroline',
    excerpt: 'Poser ses limites, sortir d’une emprise et se réapproprier sa propre voix.',
    image: '/img/photos/podcast-caroline.webp',
  },
  {
    num: '03',
    title: 'Invisible mais réel : vivre avec la maladie de Crohn',
    guest: 'Avec Audrey',
    excerpt: 'Les cicatrices invisibles, le quotidien, et la force tranquille de celles qui avancent.',
    image: '/img/photos/podcast-audrey.webp',
  },
  {
    num: '04',
    title: 'Le corps comme protection',
    guest: 'Le parcours d’Andréa',
    excerpt: 'Quand le corps se transforme pour se protéger, et le chemin pour se retrouver.',
    image: '/img/photos/podcast-andrea.webp',
  },
  {
    num: '05',
    title: 'L’amour comme guérison',
    guest: 'Interview',
    excerpt: 'Les liens, la tendresse et l’amour comme appuis sur le chemin de la reconstruction.',
    image: '/img/photos/podcast-interview.webp',
  },
  {
    num: '06',
    title: 'L’amour comme encrage',
    guest: 'Le parcours de Fanny',
    excerpt: 'Traverser le cancer, et faire du tatouage un ancrage pour avancer.',
    image: '/img/photos/podcast-fanny.webp',
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
  image: '/img/photos/octobre-rose.webp',
  cta: { label: 'Participer / en savoir plus', href: '/contact' },
};

/** Événements & rencontres où Victoria-Luz s'est déplacée.
 *  Format « ligne de tableau » pleine largeur (cf. EventsList) : chaque entrée
 *  affiche deux visuels qui s'animent en haut à droite de la ligne.
 *  Textes provisoires, à personnaliser avec Victoria. */
export const EVENTS = [
  {
    num: '01',
    date: '2025',
    title: 'Salon de la danse',
    place: 'Angers',
    desc: "Une journée de rencontres et de flash éphémères au cœur du salon, entre passionnées de danse et amoureuses du trait fin.",
    photos: [
      {
        src: '/img/photos/event-salon-danse-2.webp',
        alt: 'Victoria-Luz en échange avec une visiteuse sur son stand du salon de la danse',
        ratio: 'tall' as const,
        objectPosition: 'center 30%',
      },
      {
        src: '/img/photos/event-salon-danse-1.webp',
        alt: 'Victoria-Luz concentrée sur un tatouage lors du salon de la danse',
        ratio: 'landscape' as const,
        objectPosition: 'center 40%',
      },
    ],
  },
  {
    num: '02',
    date: '2025',
    title: 'On Air',
    place: 'Angers',
    desc: "Un pop-up tatouage dans un lieu vibrant : de la musique, de la bonne humeur et des souvenirs gravés sur la peau le temps d'une soirée.",
    photos: [
      {
        src: '/img/photos/event-on-air-1.webp',
        alt: 'Victoria-Luz posant devant la fresque On Air',
        ratio: 'tall' as const,
        objectPosition: 'center 25%',
      },
      {
        src: '/img/photos/event-on-air-2.webp',
        alt: 'Victoria-Luz tatouant un invité lors de la soirée On Air',
        ratio: 'tall' as const,
        objectPosition: 'center 30%',
      },
    ],
  },
  {
    num: '03',
    date: '2025',
    title: 'La Cour',
    place: 'Angers',
    logo: '/img/la-cour-logo.webp',
    desc: "Direction artistique et illustration de la carte des cocktails du bar-restaurant La Cour : une collection de créations colorées, pensée comme une œuvre à part entière.",
    photos: [
      {
        src: '/img/photos/event-la-cour-1.webp',
        alt: 'Illustration originale créée pour la carte des cocktails de La Cour',
        ratio: 'portrait' as const,
        objectPosition: 'center',
      },
      {
        src: '/img/photos/event-la-cour-2.webp',
        alt: 'La carte des cocktails imprimée, sur le comptoir du restaurant La Cour',
        ratio: 'tall' as const,
        objectPosition: 'center 45%',
      },
      {
        src: '/img/photos/event-la-cour-3.webp',
        alt: "Nuancier de couleurs élaboré pour l'identité de la carte",
        ratio: 'portrait' as const,
        objectPosition: 'center',
      },
    ],
    link: { label: 'Voir la carte des cocktails (PDF)', href: '/docs/la-cour-cocktails.pdf' },
  },
] as const;

export const PAST_EVENTS = [
  {
    date: '2025',
    title: 'Lancement du podcast « Sous nos cicatrices »',
    desc: 'Premiers épisodes et premières voix réunies autour de la reconstruction de soi.',
    image: '/img/photos/podcast-interview.webp',
  },
  {
    date: '2024',
    title: 'Ouverture du studio Enluzd',
    desc: 'Le choix de me consacrer pleinement au tatouage et à la reconstruction corporelle.',
    image: '/img/photos/ouverture-studio.webp',
  },
  {
    date: '2024',
    title: 'Formations spécialisées',
    desc: 'Biotic Phocea & PLN Studio : colorimétrie, types de peau et techniques peu invasives.',
    image: '/img/photos/sourcil_1_1.webp',
  },
] as const;
