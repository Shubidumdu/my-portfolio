import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Content from './components/Content';

const { Footer, Sider } = Layout;

const Portfolio = () => {
  return (
    <Layout>
      <Header />
      <Content />
    </Layout>
  );
};

export default Portfolio;
