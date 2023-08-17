/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['var(--font-ubuntu)'],
        notoSans: ['var(--font-noto-sans)'],
      },
      colors: {
        black: {
          text: '#171717',
        },
        white: {
          bg: '#E3E3E3',
        },
      },
    },
  },
  plugins: [],
};
