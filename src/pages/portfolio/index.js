import React, { createContext, useContext } from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Content from './components/Content';
import { useSlick } from './components/verticalCarousel/hooks';

export const SlickContext = createContext(null);

const Portfolio = () => {
  const slick = useSlick();

  return (
    <SlickContext.Provider value={slick}>
      <Layout>
        <Header />
        <Content />
      </Layout>
    </SlickContext.Provider>
  );
};

export default Portfolio;
