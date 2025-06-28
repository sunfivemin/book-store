// src/components/ui/Input/Input.tsx
import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'tailwind-variants';
import clsx from 'clsx';

import { inputWrapper, inputLabel, inputError, input } from './input.css';
import { inputStyle } from './variants';

type BaseProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export interface InputProps extends BaseProps, VariantProps<typeof inputStyle> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, size, variant, className, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div className={clsx(inputWrapper)}>
        {label && (
          <label htmlFor={inputId} className={inputLabel}>
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={clsx(
            input,
            inputStyle({ size, variant, hasError: !!error }),
            className
          )}
          {...props}
        />
        {error && <span className={inputError}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
