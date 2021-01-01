import React from 'react';
import { Layout } from 'antd';

const { Content: C } = Layout;

const StyledContent = styled(C)`
  overscroll-behavior-y: contain;
`;

const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
