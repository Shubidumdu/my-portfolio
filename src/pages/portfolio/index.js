import React from 'react';
import { Layout as L } from 'antd';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import ThemeSwitch from './components/ThemeSwitch';
import styled from 'styled-components';
import SlickProvider from './SlickProvider';
import VerticalCarousel from './components/verticalCarousel/VerticalCarousel';
import Profile from './components/verticalCarousel/pages/Profile';
import Home from './components/verticalCarousel/pages/Home';
import Activities from './components/verticalCarousel/pages/Activities';
import Careers from './components/verticalCarousel/pages/Careers';
import Projects from './components/verticalCarousel/pages/Projects';
import Contact from './components/verticalCarousel/pages/Contact';

const StyledLayout = styled(L)`
  background: ${({ theme }) => theme.colors.base};
`;

const Portfolio = () => {
  return (
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
  );
};

export default Portfolio;
