import { card } from './variants';
import { cardStyle } from './card.css';
import clsx from 'clsx';
import type { VariantProps } from 'tailwind-variants';

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof card>;

export const Card = ({ variant, className, ...props }: CardProps) => {
  return (
    <div className={clsx(cardStyle, card({ variant }), className)} {...props} />
  );
};
