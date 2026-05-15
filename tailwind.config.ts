import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: '"Plus Jakarta Sans", "Segoe UI", sans-serif',
      },
      colors: {
        // Only black, white, and grayscale
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          50: '#F9F9F9',
          100: '#F3F3F3',
          200: '#E8E8E8',
          300: '#D1D1D1',
          400: '#B0B0B0',
          500: '#808080',
          600: '#666666',
          700: '#333333',
          800: '#222222',
          900: '#111111',
          950: '#000000',
        },
      },
    },
  },
} satisfies Config;
