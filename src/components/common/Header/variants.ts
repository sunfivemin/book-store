// src/components/common/Header/variants.ts
import { tv } from 'tailwind-variants';

export const headerStyle = tv({
  base: 'w-full sticky z-50 transition-shadow',
  variants: {
    variant: {
      default: 'top-0 bg-background',
      scrolled: 'top-4 bg-background',
    },
    size: {
      sm: 'h-20 text-base',
      lg: 'h-20 text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'lg',
  },
});

export const menuButtonStyle = tv({
  base: 'absolute top-[20px] right-[22px] w-[20px] z-[1100] border-0 text-xl md:hidden flex',
});

export const mobileMenuStyle = tv({
  base: [
    'fixed top-0 right-[-100%] w-[60%] h-screen z-[1000]',
    'bg-white shadow-md px-6 py-8 flex flex-col gap-4',
    'transition-all duration-300',
  ],
  variants: {
    open: {
      true: 'right-0',
      false: 'right-[-100%]',
    },
  },
  defaultVariants: {
    open: false,
  },
});
