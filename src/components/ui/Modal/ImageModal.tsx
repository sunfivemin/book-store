// src/components/ui/Modal/ImageModal.tsx
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { modal } from './variants';
import { modalContent } from './modal.css';
import clsx from 'clsx';
import { X } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
}

const modalRoot = document.getElementById('modal-root')!;

export const ImageModal = ({ open, onClose, src, alt }: Props) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className={modal({ backdrop: 'dark' })}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={clsx(modalContent, 'relative max-w-3xl w-full')}
        onClick={e => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute top-2 right-2 text-white bg-black/40 rounded-full p-1 hover:bg-black/70"
          onClick={onClose}
          aria-label="닫기"
        >
          <X size={20} />
        </button>

        {/* 이미지 */}
        <img
          src={src}
          alt={alt}
          className="w-full max-h-[80vh] object-contain rounded"
        />
      </div>
    </div>,
    modalRoot
  );
};
