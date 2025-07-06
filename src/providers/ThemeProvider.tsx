// src/providers/ThemeProvider.tsx
import { useEffect, useState } from 'react';
import { darkThemeClass, lightThemeClass } from '@/styles/theme.css';
import { ThemeContext } from '@/contexts/ThemeContext';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains(darkThemeClass)
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(isDark ? lightThemeClass : darkThemeClass);
    root.classList.add(isDark ? darkThemeClass : lightThemeClass);
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
