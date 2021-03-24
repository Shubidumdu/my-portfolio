import React from 'react';
import ModalProvider from './ModalProvider';
import SlickProvider from './SlickProvider';
import StyleProvider from './ThemeProvider';

const Provider = ({ children }) => {
  return (
    <StyleProvider>
      <SlickProvider>
        <ModalProvider>{children}</ModalProvider>
      </SlickProvider>
    </StyleProvider>
  );
};

export default Provider;
