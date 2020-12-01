import { useState } from 'react';

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

const initialState = {
  mode: 'light',
  colors: lightTheme,
};

export const useTheme = () => {
  const [theme, setTheme] = useState(initialState);
  const toggleTheme = () => {
    setTheme((theme) => ({
      ...theme,
      mode: theme.mode === 'light' ? 'dark' : 'light',
      colors: theme.mode === 'light' ? darkTheme : lightTheme,
    }));
  };

  return { theme, toggleTheme };
};
