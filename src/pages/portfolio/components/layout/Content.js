import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Content: C } = Layout;

const Content = ({ children }) => {
  return <C>{children}</C>;
};

export default Content;
