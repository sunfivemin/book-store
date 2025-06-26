import { card } from './variants';
import { cardStyle } from './card.css';
import clsx from 'clsx';
import type { VariantProps } from 'tailwind-variants';

type CardVariantProps = VariantProps<typeof card>;

type CardProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  keyof CardVariantProps
> &
  CardVariantProps;

export const Card = ({
  variant,
  padding,
  shadow,
  rounded,
  interactive,
  className,
  ...rest
}: CardProps) => {
  return (
    <div
      className={clsx(
        cardStyle,
        card({ variant, padding, shadow, rounded, interactive }),
        className
      )}
      {...rest}
    />
  );
};
