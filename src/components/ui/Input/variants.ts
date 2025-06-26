// src/components/ui/Input/variants.ts
import { tv } from 'tailwind-variants';

export const inputStyle = tv({
  // 🟡 공통으로 항상 적용되는 스타일
  base: 'w-full border outline-none transition px-3 rounded text-gray-900 placeholder-gray-400',

  // 🟡 분기되는 스타일 (props로 지정 가능)
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
      true: 'border-priority-must placeholder-priority-must', // ❌ text-priority-must 제거!
    },
  },

  // 🟡 디폴트 props
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
