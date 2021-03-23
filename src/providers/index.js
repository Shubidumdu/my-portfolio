import React from 'react';
import { ThemeProvider } from 'styled-components';
import SlickProvider from './SlickProvider';

const Provider = ({ children }) => {
  return (
    <ThemeProvider>
      <SlickProvider>
        <ModalProvider>{children}</ModalProvider>
      </SlickProvider>
    </ThemeProvider>
  );
};

export default Provider;
