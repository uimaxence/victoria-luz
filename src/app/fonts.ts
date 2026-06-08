import localFont from 'next/font/local';

/**
 * Trois voix typographiques (design.md §3.1).
 * - Solea : titres / display. Fournie en local (assets/typo/Solea-Regular.otf).
 *   Exposée via la variable --font-solea, elle-même branchée sur le SEUL
 *   point de bascule --font-display (tokens.css). Pour swapper la police de
 *   titres, il suffit de changer cette pile dans tokens.css.
 * - Work Sans : corps, surtitres, UI. Fournie en local (multi-graisses).
 * - Quentin : manuscrit / script, à utiliser avec parcimonie (local,
 *   assets/typo/Quentin.otf). Branchée sur --font-hand (tokens.css).
 */

export const solea = localFont({
  src: [{ path: '../fonts/Solea-Regular.otf', weight: '400', style: 'normal' }],
  variable: '--font-solea',
  display: 'swap',
});

export const workSans = localFont({
  src: [
    { path: '../fonts/WorkSans-Light.ttf', weight: '300', style: 'normal' },
    { path: '../fonts/WorkSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/WorkSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/WorkSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../fonts/WorkSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-worksans',
  display: 'swap',
});

export const quentin = localFont({
  src: [{ path: '../fonts/Quentin.otf', weight: '400', style: 'normal' }],
  variable: '--font-quentin',
  display: 'swap',
});
