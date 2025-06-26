import { titleColorStyle, titleSizeStyle } from './title.css';
import type { HeadingSize, TitleColorKey } from '@/styles/theme.css';

interface Props {
  children: React.ReactNode;
  size: HeadingSize;
  color: TitleColorKey;
}

function Title({ children, size, color }: Props) {
  return (
    <h1 className={`${titleSizeStyle[size]} ${titleColorStyle[color]}`}>
      {children}
    </h1>
  );
}

export default Title;
