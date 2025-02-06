import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-tur': '#5DD241',
        'darkblue-tur': '#005D6E',
        'blue-tur': '#07ADA7',
        blue: '#68DFF2',
        'pastel-green': '#57d86b',
        'light-grey-tur': '#F3F3F3',
        'medium-grey-tur': '#8F8F8F',
        'dark-grey-tur': '#353535',
      },
      fontSize: {
        base: '18pt',
        h1: '60pt',
        h2: '32pt',
        card: '24pt',
        system: '16pt',
        textcard: '14pt',
        notes: '10pt',
      },
      fontFamily: {
        sans: ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
