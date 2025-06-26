import { tv } from 'tailwind-variants';

export const card = tv({
  base: 'rounded-2xl p-4 border transition-colors shadow',
  variants: {
    variant: {
      elevated: 'bg-surface-card shadow-strong',
      outline: 'bg-transparent border-border-card.default',
    },
    padding: {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
    },
    shadow: {
      none: 'shadow-none',
      weak: 'shadow-weak',
      strong: 'shadow-strong',
    },
    rounded: {
      sm: 'rounded-md',
      md: 'rounded-lg',
      lg: 'rounded-2xl',
    },
    interactive: {
      true: 'hover:bg-surface-hover cursor-pointer transition-colors',
    },
  },
  defaultVariants: {
    variant: 'elevated',
    padding: 'md',
    shadow: 'strong',
    rounded: 'lg',
  },
});
