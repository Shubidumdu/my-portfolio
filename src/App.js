import React, { createContext } from 'react';
import SlickProvider from './providers/SlickProvider';
import { Content, Header } from 'antd/lib/layout/layout';
import ThemeProvider from './providers/ThemeProvider';

export const ToggleThemeContext = createContext(null);

const StyledLayout = styled(L)`
  background: ${({ theme }) => theme.colors.base};
`;

const App = () => {
  return (
    <ThemeProvider>
      <SlickProvider>
        <StyledLayout>
          <Header />
          <Content>
            <VerticalCarousel>
              <Home />
              <Profile />
              <Careers />
              <Projects />
              <Activities />
              <Contact />
            </VerticalCarousel>
          </Content>
          <ThemeSwitch />
        </StyledLayout>
      </SlickProvider>
    </ThemeProvider>
  );
};

export default App;
