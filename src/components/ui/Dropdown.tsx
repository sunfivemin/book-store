// src/components/ui/Dropdown.tsx
import { useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import * as styles from './Dropdown.css';

interface Props {
  items: {
    label: React.ReactNode;
    value?: string | number;
    onClick?: () => void;
  }[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  label?: React.ReactNode;
}

function Dropdown({ items, value, onChange, label }: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: Props['items'][number]) => {
    if (item.onClick) item.onClick();
    if (item.value !== undefined && onChange) {
      onChange(item.value);
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen(prev => !prev)}
      >
        {label || '선택'}
      </button>
      {open && (
        <ul className={styles.menu}>
          {items.map((item, idx) => (
            <li
              key={idx}
              className={clsx(
                styles.item,
                item.value === value && styles.active
              )}
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
