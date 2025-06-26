import { tv } from 'tailwind-variants';

export const inputStyle = tv({
  base: 'w-full border outline-none transition px-3 py-2 rounded',
  variants: {
    size: {
      sm: 'text-sm py-1',
      md: 'text-base py-2',
      lg: 'text-lg py-3',
    },
    variant: {
      outline:
        'border border-border-input focus:border-brand-primary bg-surface-input rounded',
      underline:
        'border-b border-border-input focus:border-brand-primary bg-surface-input rounded-none',
    },
    hasError: {
      true: 'border-priority-must text-priority-must placeholder-priority-must',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
