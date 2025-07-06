// src/components/common/Title.tsx
import { titleColorStyle, titleSizeStyle } from './title.css';

interface Props {
  children: React.ReactNode;
  size: keyof typeof titleSizeStyle;
  color: keyof typeof titleColorStyle;
}

function Title({ children, size, color }: Props) {
  return (
    <h1 className={`${titleSizeStyle[size]} ${titleColorStyle[color]}`}>
      {children}
    </h1>
  );
}

export default Title;
