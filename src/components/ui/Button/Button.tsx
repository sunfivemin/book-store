import clsx from 'clsx';

const intentClass = {
  primary: 'bg-blue-500 text-white',
  ghost: 'bg-transparent',
  elevated: 'bg-white border border-gray-200 shadow text-gray-900',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: 'primary' | 'ghost' | 'elevated';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = ({ intent = 'elevated', size = 'md', className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        intentClass[intent],
        size === 'sm' && 'px-2 py-1 text-sm',
        size === 'md' && 'px-3 py-1.5 text-base',
        size === 'lg' && 'px-4 py-2 text-lg',
        'rounded transition',
        className
      )}
      {...props}
    />
  );
};
