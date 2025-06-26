// ✅ tailwind.config.ts
import { colorTokens } from './src/styles/tokens/colors';
import colors from 'tailwindcss/colors';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colorTokens,
        'brand-primary': colorTokens.brand.primary,
        'brand-secondary': colorTokens.brand.secondary,
        'priority-must': colorTokens.priority.must,
        'text-default': colorTokens.text.default,
        'border-input': colorTokens.border?.input ?? colors.gray[200],
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'sans-serif'],
        kkonghae: ['var(--font-kkonghae)', 'cursive'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
  plugins: [],
};

export default config;
