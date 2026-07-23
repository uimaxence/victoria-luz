import type { MetadataRoute } from 'next';

const BASE = 'https://victoria-luz.fr';

/**
 * Plan du site (généré par Next.js → /sitemap.xml).
 * La page de remerciement /demande-tatouage/merci est volontairement exclue :
 * c'est une confirmation, sans intérêt pour l'indexation.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/qui-suis-je', priority: 0.8 },
    { path: '/artiste-tatoueuse', priority: 0.8 },
    { path: '/reconstruction-corporelle', priority: 0.8 },
    { path: '/maquillage-semi-permanent', priority: 0.8 },
    { path: '/podcast-evenements', priority: 0.6 },
    { path: '/demande-tatouage', priority: 0.6 },
    { path: '/contact', priority: 0.7 },
  ];

  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
