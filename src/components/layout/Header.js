import React from 'react';
import { Button, Drawer, Layout, Menu } from 'antd';
import styled from 'styled-components';
import { HiMenu } from 'react-icons/hi';

const { Header: H } = Layout;

const StyledHeader = styled(H)`
  width: 100%;
  position: fixed;
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.black : theme.colors.white};
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

  @media (max-width: 700px) {
    padding: 0;
  }
`;

const StyledMenu = styled(Menu)`
  margin: -2px;
  text-align: center;

  .ant-menu-horizontal {
    border-bottom: 0;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const StyledMenuItem = styled(Menu.Item)`
  margin: 0 !important;
  padding: 0 20px !important;
  top: 0 !important;
  font-weight: ${({ theme }) => (theme.mode === 'light' ? 'bold' : 'normal')};
`;

const MobileHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${({ theme }) => (theme.mode === 'light' ? 'bold' : 'normal')};

  @media (min-width: 700px) {
    display: none;
  }
`;

const PageTitle = styled.div`
  & > span {
    padding-bottom: 1px;
    font-size: 1rem;
  }
`;

const DrawerButton = styled(Button)`
  padding: 1rem;
  width: 66px;
  height: 66px;
`;

const DrawerMenu = styled(Menu)``;

const DrawerMenuItem = styled(Menu.Item)`
  margin: 0 !important;
  height: 66px !important;
  font-size: 1rem;
  display: flex !important;
  align-items: center !important;
  font-weight: ${({ theme }) => (theme.mode === 'light' ? 'bold' : 'normal')};
`;

const EmptyDiv = styled.div`
  width: 66px;
  height: 66px;
`;

const Header = ({
  slick,
  slickIndex,
  mode,
  categories,
  openDrawer,
  toggleDrawer,
  ...rest
}) => {
  const slickGoTo = (idx) => slick.current.slickGoTo(idx);
  return (
    <StyledHeader>
      <StyledMenu
        selectedKeys={[slickIndex.toString()]}
        mode="horizontal"
        theme={mode}
      >
        {categories.map((category, idx) => (
          <StyledMenuItem onClick={() => slickGoTo(idx)} key={idx}>
            {category}
          </StyledMenuItem>
        ))}
      </StyledMenu>
      <MobileHeaderWrap>
        <DrawerButton size="large" onClick={toggleDrawer} type="link">
          <HiMenu size="100%" />
        </DrawerButton>
        <PageTitle>
          <span>{categories[slickIndex]}</span>
        </PageTitle>
        <EmptyDiv />
      </MobileHeaderWrap>
      <Drawer visible={openDrawer} onClose={toggleDrawer} {...rest}>
        <DrawerMenu
          selectedKeys={[slickIndex.toString()]}
          mode="vertical"
          theme={mode}
        >
          {categories.map((category, idx) => (
            <DrawerMenuItem
              onClick={() => {
                slickGoTo(idx);
                toggleDrawer();
              }}
              key={idx}
            >
              {category}
            </DrawerMenuItem>
          ))}
        </DrawerMenu>
      </Drawer>
    </StyledHeader>
  );
};

export default Header;
