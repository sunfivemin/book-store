// Vanilla Extract로 직접 스타일 정의 (style({}))
import { button } from './variants';
import clsx from 'clsx';
import type { VariantProps } from 'tailwind-variants';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export const Button = ({ intent, size, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(button({ intent, size }), className)} {...props} />
  );
};
