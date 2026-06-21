/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0b',
        panel: '#0c0c0e',
        line: '#1c1c20',
        gold: '#c79a5b',
        'gold-hover': '#d8b070',
        muted: '#8d8a85',
        soft: '#9b9893',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        cond: ['Oswald', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
