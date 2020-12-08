import React from 'react';
import { Layout, Menu } from 'antd';
import styled, { useTheme } from 'styled-components';
import { useVerticalSlickContext } from '../../SlickProvider';

const { Header: H } = Layout;

const StyledHeader = styled(H)`
  background: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.white : theme.colors.sub};
  transition: 0.3s;
  z-index: 1;
  box-shadow: 0px 1px 6px
    ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.sub : theme.colors.black};

  & > ul > li {
    transition: 0.3s !important;
  }

  .ant-menu-horizontal {
    border-bottom: 0;
  }
`;

const StyledMenu = styled(Menu)`
  margin: -2px;

  .ant-menu-horizontal {
    border-bottom: 0;
  }
`;

const StyledMenuItem = styled(Menu.Item)`
  margin: 0 !important;
  padding: 0 20px !important;
  top: 0 !important;
  font-weight: 400;
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
  const { index: slickIndex, ref: slick } = useVerticalSlickContext();
  const { mode } = useTheme();

  return (
    <StyledHeader>
      <StyledMenu
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
            <StyledMenuItem onClick={onClick} key={idx}>
              {category}
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </StyledHeader>
  );
};

export default Header;
