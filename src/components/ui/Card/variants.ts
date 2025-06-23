import { tv } from 'tailwind-variants';

export const card = tv({
  base: 'shadow rounded-lg p-4 border transition-colors',
  variants: {
    variant: {
      elevated: 'bg-white shadow-md',
      outline: 'bg-transparent border-gray-300',
    },
  },
  defaultVariants: {
    variant: 'elevated',
  },
});
