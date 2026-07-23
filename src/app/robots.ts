import type { MetadataRoute } from 'next';

const BASE = 'https://victoria-luz.fr';

/** robots.txt (généré par Next.js → /robots.txt). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/demande-tatouage/merci',
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
