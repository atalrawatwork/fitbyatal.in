import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6D3EF5', // original FitByAtal purple, unchanged
          dark: '#5A2FE0',
          light: '#F1EBFF',
        },
        ink: '#1D1B2E',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
};

export default config;
