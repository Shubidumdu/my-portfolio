import React from 'react';
import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  main: '#E94231',
  sub: '#9296A1',
  base: '#E8E5E6',
  white: '#fff',
  black: '#192425',
};

const darkTheme = {
  main: '#E94231',
  sub: '#272224',
  base: '#192425',
  white: '#fff',
  black: '#000',
};

const mode = localStorage.getItem('theme') || 'light';

const initialState = {
  mode,
  colors: mode === 'light' ? lightTheme : darkTheme,
};

const ToggleThemeContext = createContext(null);

export const useToggleThemeContext = () => {
  const toggleTheme = useContext(ToggleThemeContext);
  return toggleTheme;
};

const StyleProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState);
  const toggleTheme = () => {
    setTheme((theme) => {
      const mode = theme.mode === 'light' ? 'dark' : 'light';
      const colors = theme.mode === 'light' ? darkTheme : lightTheme;
      localStorage.setItem('theme', mode);
      return {
        ...theme,
        mode,
        colors,
      };
    });
  };
  const context = {
    theme,
    toggleTheme,
  };

  return (
    <ToggleThemeContext.Provider value={context}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ToggleThemeContext.Provider>
  );
};

export default StyleProvider;
