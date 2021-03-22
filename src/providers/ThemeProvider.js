import { createContext, useContext } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

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

export const useTheme = () => {
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

  return { theme, toggleTheme };
};

const ToggleThemeContext = createContext(null);

export const useThemeContext = () => {
  const toggleTheme = useContext(ToggleThemeContext);
  return toggleTheme;
};

const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Provider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </Provider>
  );
};

export default ThemeProvider;
