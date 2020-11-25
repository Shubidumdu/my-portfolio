import React, { createContext } from 'react';
import Portfolio from './pages/portfolio';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './theme/hooks';

export const ToggleThemeContext = createContext(null);

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        <Portfolio />
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
