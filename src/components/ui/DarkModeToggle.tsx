import { useTheme } from '@/hooks/useTheme';

interface Props {
  close: () => void;
}

const DarkModeToggle = ({ close }: Props) => {
  const { isDark, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
    requestAnimationFrame(() => {
      close();
    });
  };

  return (
    <button type="button" onClick={handleClick}>
      {isDark ? '🌙 다크모드 해제' : '🌞 다크모드 적용'}
    </button>
  );
};

export default DarkModeToggle;
