import React from 'react';
import { Layout } from 'antd';
import VerticalCarousel from './verticalCarousel/VerticalCarousel';

const { Content: C } = Layout;

const Content = () => {
  return (
    <C>
      <VerticalCarousel></VerticalCarousel>
    </C>
  );
};

export default Content;
