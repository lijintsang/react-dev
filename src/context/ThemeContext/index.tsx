import { useLocalStorageState } from 'ahooks';
import React, { createContext, useContext, useEffect } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useLocalStorageState<Theme>('theme', {
    defaultValue: 'light',
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // 修改全局 HTML 的 `data-theme` 属性
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'light' ? 'dark' : 'light',
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme!);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme!, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
