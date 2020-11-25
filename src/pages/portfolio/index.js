import React, { createContext } from 'react';
import { Layout as L } from 'antd';
import Header from './components/Header';
import Content from './components/Content';
import { useSlick } from './components/verticalCarousel/hooks';
import ThemeSwitch from './components/ThemeSwitch';
import styled from 'styled-components';

const StyledLayout = styled(L)`
  background: ${({ theme }) => theme.colors.base};
`;

export const SlickContext = createContext(null);

const Portfolio = () => {
  const slick = useSlick();

  return (
    <SlickContext.Provider value={slick}>
      <StyledLayout>
        <Header />
        <Content />
        <ThemeSwitch />
      </StyledLayout>
    </SlickContext.Provider>
  );
};

export default Portfolio;
