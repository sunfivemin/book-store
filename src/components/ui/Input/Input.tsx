// src/components/ui/Input/Input.tsx
import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { input, inputWrapper, inputLabel, inputError } from './input.css';
import { inputStyle } from './variants';
import type { VariantProps } from 'tailwind-variants';
import clsx from 'clsx';

type BaseProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

type InputProps = BaseProps &
  VariantProps<typeof inputStyle> & {
    label?: string;
    error?: string;
    className?: string;
    children?: ReactNode;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, size, variant, className, ...props }, ref) => {
    return (
      <div className={clsx(inputWrapper)}>
        {label && (
          <label htmlFor={props.id} className={inputLabel}>
            {label}
          </label>
        )}
        <input
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
