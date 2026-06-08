import type { Config } from 'tailwindcss';

/**
 * Tailwind maps the CSS variables from src/styles/tokens.css.
 * Components must reference these names (bg-creme, text-chocolat, font-display…)
 * so the design system stays the single source of truth — no hard-coded values.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        creme: 'var(--creme)',
        nude: 'var(--nude)',
        rose: 'var(--rose)',
        marron: 'var(--marron)',
        chocolat: 'var(--chocolat)',
        bleuet: 'var(--bleuet)',
        'bleu-klein': 'var(--bleu-klein)',
        // Semantic roles
        bg: 'var(--bg)',
        'bg-alt': 'var(--bg-alt)',
        'bg-dark': 'var(--bg-dark)',
        'bg-darker': 'var(--bg-darker)',
        text: 'var(--text)',
        'text-invert': 'var(--text-invert)',
        'text-muted': 'var(--text-muted)',
        'text-invert-muted': 'var(--text-invert-muted)',
        accent: 'var(--accent)',
        'accent-warm': 'var(--accent-warm)',
        'accent-soft': 'var(--accent-soft)',
        line: 'var(--line)',
        'line-invert': 'var(--line-invert)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        sans: 'var(--font-sans)',
        hand: 'var(--font-hand)',
      },
      fontSize: {
        display: 'var(--fs-display)',
        h1: 'var(--fs-h1)',
        h2: 'var(--fs-h2)',
        h3: 'var(--fs-h3)',
        hand: 'var(--fs-hand)',
        surtitre: 'var(--fs-surtitre)',
        body: 'var(--fs-body)',
        small: 'var(--fs-small)',
        caption: 'var(--fs-caption)',
      },
      letterSpacing: {
        display: 'var(--ls-display)',
        surtitre: 'var(--ls-surtitre)',
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        12: 'var(--space-12)',
        16: 'var(--space-16)',
        24: 'var(--space-24)',
        32: 'var(--space-32)',
        40: 'var(--space-40)',
        48: 'var(--space-48)',
        baseline: 'var(--baseline)',
        'page-margin': 'var(--page-margin)',
        gutter: 'var(--grid-gutter)',
      },
      maxWidth: {
        content: 'var(--content-max)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        token: 'var(--radius)',
      },
      transitionTimingFunction: {
        soft: 'var(--ease-soft)',
      },
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;
