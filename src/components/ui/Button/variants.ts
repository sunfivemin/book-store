// Tailwind CSS 기반 조건부 클래스 정의 (tv({}))

import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'rounded font-semibold transition-colors',
  variants: {
    intent: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-500 text-white hover:bg-gray-600',
      danger: 'bg-red-500 text-white hover:bg-red-600',
      ghost: 'bg-transparent text-black hover:bg-gray-100',
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
