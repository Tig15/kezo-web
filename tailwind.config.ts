import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F8FAFB',
        'black': '#1A1B25',
        'green': '#008522',
        'white': "#FFFFFF",
        'third': '#ECEFF3',
        'secondary': '#818898',
        'tert': '#DFE1E7',
        'feed': "#666D80",
        'icon-bg': '#DDF3EF',
        "admin": "#36394A",
        "exit": "#DF1C41"
      },
      boxShadow: {
        'header': '0px 25px 60px 0px rgba(142, 142, 142, 0.12);',
        'button': '0px 0px 0px 1px #126F2A, 0px 1px 4px 0px rgba(33, 56, 52, 0.50);',
        'share': ' 0px 0px 0px 1px rgba(18, 55, 105, 0.08), 0px 1px 2px 0px rgba(164, 172, 185, 0.24);'
      },
      container: {
        screens: {
          'DEFAULT': '1320px'
        },
        center: true
      },
      letterSpacing: {
        tightest: '-0.44px',
        tighter: '-0.24px'
      },
      fontSize: {
        '4xl': '44px'
      },
      fontWeight: {
        'medium': '250'
      },
      borderWidth: {
        DEFAULT: '1px'
      }
    },
  },
  plugins: [],
}
export default config
