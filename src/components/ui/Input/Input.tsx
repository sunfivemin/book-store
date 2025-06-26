import { input, inputWrapper, inputLabel, inputError } from './input.css';
import { inputStyle } from './variants';
import type { VariantProps } from 'tailwind-variants';
import clsx from 'clsx';

type BaseProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

type InputProps = BaseProps &
  VariantProps<typeof inputStyle> & {
    label?: string;
    error?: string;
  };

export const Input = ({
  label,
  error,
  size,
  variant,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={clsx(inputWrapper)}>
      {label && <label className={inputLabel}>{label}</label>}
      <input
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
};
