import { createContext, useEffect, useState } from 'react';

type ThemeProps = {
  children: React.ReactNode;
};

type Theme = 'light' | 'dark';

type ThemeContext = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export function ThemeContextProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;

    const removeTheme = theme === 'dark' ? 'light' : 'dark';

    root.classList.remove(removeTheme);
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
