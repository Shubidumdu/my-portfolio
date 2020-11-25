import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { SlickContext } from '..';
import styled, { useTheme } from 'styled-components';

const { Header: H } = Layout;

const StyledHeader = styled(H)`
  background: ${({ theme }) => theme.colors.base};
  height: 64px;
  transition: 0.3s;

  & > ul > li {
    transition: 0.3s !important;
  }

  .ant-menu-horizontal {
    border-bottom: 0;
  }
`;

const categories = [
  'HOME',
  'PROFILE',
  'ACTIVITIES',
  'CAREERS',
  'PROJECTS',
  'CONTACT',
];

const Header = () => {
  const { index: slickIndex, ref: slick } = useContext(SlickContext);
  const { mode } = useTheme();

  return (
    <StyledHeader>
      <Menu
        selectedKeys={[slickIndex.toString()]}
        mode="horizontal"
        theme={mode}
        style={{ textAlign: 'center' }}
      >
        {categories.map((category, idx) => {
          const onClick = () => {
            slick.current.slickGoTo(idx);
          };

          return (
            <Menu.Item onClick={onClick} key={idx}>
              {category}
            </Menu.Item>
          );
        })}
      </Menu>
    </StyledHeader>
  );
};

export default Header;
