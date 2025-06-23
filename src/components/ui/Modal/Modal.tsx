import clsx from 'clsx';
import { modal } from './variants';
import { modalContent } from './modal.css';

type ModalProps = {
  open: boolean;
  backdrop?: 'dark' | 'light';
  children: React.ReactNode;
  className?: string;
};

export const Modal = ({
  open,
  backdrop = 'dark',
  children,
  className,
}: ModalProps) => {
  if (!open) return null;

  return (
    <div className={modal({ backdrop })}>
      <div className={clsx(modalContent, className)}>{children}</div>
    </div>
  );
};
