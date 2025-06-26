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
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '2rem',
      },
      borderRadius: {
        none: '0px',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      zIndex: {
        auto: 'auto',
        base: '0',
        dropdown: '10',
        sticky: '20',
        fixed: '30',
        modal: '40',
        popover: '50',
        tooltip: '60',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
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
