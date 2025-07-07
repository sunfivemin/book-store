// src/components/common/Title.tsx
import { titleColorStyle, titleSizeStyle, titleWeightStyle } from './title.css';

interface Props {
  children: React.ReactNode;
  size: keyof typeof titleSizeStyle;
  color: keyof typeof titleColorStyle;
  weight?: keyof typeof titleWeightStyle; // optional
}

function Title({ children, size, color, weight = 'regular' }: Props) {
  return (
    <h1
      className={`${titleSizeStyle[size]} ${titleColorStyle[color]} ${titleWeightStyle[weight]}`}
    >
      {children}
    </h1>
  );
}

export default Title;
