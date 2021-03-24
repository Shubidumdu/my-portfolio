import styled from 'styled-components';
import { Layout as L } from 'antd';

const Layout = styled(L)`
  background: ${({ theme }) => theme.colors.base};
`;

export default Layout;
