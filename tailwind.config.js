/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'offwhite': '#ECF2FF',
      'bluish': '#B4C7ED',
      'navyblue': '#13224f',
      'lightwhite': '#d0d3db',
      'darkblue': '#091945',
      'green': '#139277',
      'red': '#c92a8f',
      'lightblue': '#8A9BCA',
      'blue': '#0C1B44',

      // ---- Nouveaux tokens — refonte "moderne clair 2026" ----
      // Ajoutés sans toucher aux tokens ci-dessus pour ne pas casser
      // les pages pas encore migrées (Services, Pricing, Blog, etc.)
      'primary': '#1a237e',                              // bleu indigo — titres, CTA
      'primary-dark': '#10154d',                          // indigo foncé — dégradés, footer
      'secondary': 'oklch(70.485% 0.18669 47.592)',        // corail chaud — accents
      'tertiary': '#6885c1',                               // bleu ardoise — accents secondaires
      'surface': '#f6f7fb',                                // blanc teinté — sections alternées
      'surface-2': '#eef1f9',
      'border': '#e3e7f2',
      'ink': '#0f1430',                                    // texte titres sur fond clair
      'muted': '#5b6480',                                  // texte courant sur fond clair
      'inverse-muted': '#c7cdec',                          // texte secondaire sur fond sombre (footer)
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1.25' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.25' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1.25rem' }],
    },
  },
  plugins: [],
}