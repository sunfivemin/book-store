import { useTheme } from '@/hooks/useTheme';

const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDark ? '🌙 다크모드 해제' : '🌞 다크모드 적용'}
    </button>
  );
};

export default DarkModeToggle;
