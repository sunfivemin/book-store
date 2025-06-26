// Tailwind CSS 기반 조건부 클래스 정의 (tv({}))

import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'rounded font-semibold transition-colors',
  variants: {
    intent: {
      primary: 'bg-brand-primary text-white hover:bg-brand-primary/80',
      secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary/80',
      danger: 'bg-priority-must text-white hover:bg-priority-must/80',
      ghost: 'bg-transparent text-text-default hover:bg-surface-hover',
    },
    size: {
      sm: 'text-sm px-3 py-1',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-5 py-3',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});
