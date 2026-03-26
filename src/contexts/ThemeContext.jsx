import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const getTimeBasedTheme = () => {
  const hour = new Date().getHours();
  return (hour >= 6 && hour < 18) ? 'light' : 'dark';
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('auto');
  const [autoTheme, setAutoTheme] = useState(getTimeBasedTheme);
  const [colorTheme, setColorTheme] = useState('blue');

  const theme = mode === 'auto' ? autoTheme : mode;

  useEffect(() => {
    if (mode !== 'auto') return;
    const update = () => setAutoTheme(getTimeBasedTheme());
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [mode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-color', colorTheme);
  }, [colorTheme]);

  const toggleTheme = () => {
    setMode(prev => {
      if (prev === 'auto') return 'light';
      if (prev === 'light') return 'dark';
      return 'auto';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme, colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
