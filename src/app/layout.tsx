import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '@/styles/globals.css';
import { solea, workSans, quentin } from './fonts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GridOverlay from '@/components/GridOverlay';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://victoria-luz.fr'),
  title: {
    default: `${SITE.name}, Tatouage artistique & reconstruction corporelle`,
    template: `%s, ${SITE.name}`,
  },
  description:
    "Victoria-Luz, tatoueuse professionnelle à Angers. Tatouage artistique sur-mesure et reconstruction corporelle : aréole mammaire 3D, camouflage de cicatrices, sourcils & lèvres. Une approche douce, raffinée et valorisante.",
  openGraph: {
    title: `${SITE.name}, Tatouage artistique & reconstruction corporelle`,
    description:
      'Tatouage artistique sur-mesure et reconstruction corporelle, dans une expérience proche du luxe, douce, raffinée, valorisante.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export const viewport: Viewport = {
  themeColor: '#FFF2ED',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${solea.variable} ${workSans.variable} ${quentin.variable}`}
    >
      <body className="min-h-screen bg-creme text-chocolat antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-token focus:bg-bleu-klein focus:px-4 focus:py-2 focus:text-creme"
        >
          Aller au contenu
        </a>
        <Nav />
        <main id="contenu">{children}</main>
        <Footer />
        <GridOverlay />
        <Analytics />
      </body>
    </html>
  );
}
