import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { SlickContext } from '..';
import styled, { useTheme } from 'styled-components';

const { Header: H } = Layout;

const StyledHeader = styled(H)`
  background: ${({ theme }) => theme.colors.base};
  transition: 0.3s;
  z-index: 1;

  & > ul > li {
    transition: 0.3s !important;
  }

  .ant-menu-horizontal {
    border-bottom: 0;
  }
`;

const StyledMenu = styled(Menu)`
  .ant-menu-horizontal {
    border-bottom: 0;
  }
`;

const StyledMenuItem = styled(Menu.Item)`
  margin: 0 !important;
  padding: 0 20px !important;
  top: 0 !important;
  font-weight: 400;

  /* &:hover {
    background: ${({ theme }) => theme.colors.main} !important;
    color: ${({ theme }) => theme.colors.white} !important;
  }

  &.ant-menu-item-selected {
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.white} !important;

    &:hover {
      color: ${({ theme }) => theme.colors.white} !important;
    }
  } */
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
