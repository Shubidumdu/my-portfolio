import React, { createContext } from 'react';
import { Content, Header } from 'antd/lib/layout/layout';
import Provider from './providers';

export const ToggleThemeContext = createContext(null);

const StyledLayout = styled(L)`
  background: ${({ theme }) => theme.colors.base};
`;

const App = () => {
  return (
    <Provider>
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
    </Provider>
  );
};

export default App;
