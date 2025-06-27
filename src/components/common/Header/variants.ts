// src/components/common/Header/variants.ts
import { tv } from 'tailwind-variants';

export const headerStyle = tv({
  base: 'w-full sticky z-50 transition-all duration-300',
  variants: {
    variant: {
      default: 'top-0 bg-background',
      scrolled: 'top-4 bg-background',
    },
    size: {
      sm: 'h-12 text-base',
      lg: 'h-20 text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'lg',
  },
});
