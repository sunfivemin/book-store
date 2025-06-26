import { tv } from 'tailwind-variants';

export const modal = tv({
  base: 'fixed inset-0 flex items-center justify-center z-50',
  variants: {
    backdrop: {
      dark: 'bg-black/50',
      light: 'bg-surface-popup/30',
    },
  },
  defaultVariants: {
    backdrop: 'dark',
  },
});
