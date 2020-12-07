import React from 'react';
import { Layout } from 'antd';

const { Content: C } = Layout;

const Content = ({ children }) => {
  return <C>{children}</C>;
};

export default Content;
