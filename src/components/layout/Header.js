import React, { useState } from 'react';
import { Button, Drawer, Layout, Menu } from 'antd';
import styled, { useTheme } from 'styled-components';
import { HiMenu } from 'react-icons/hi';
import { useVerticalCarouselContext } from '../../providers/SlickProvider';

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
  font-weight: 400;
`;

const MobileHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
`;

const EmptyDiv = styled.div`
  width: 66px;
  height: 66px;
`;

const categories = [
  'HOME',
  'PROFILE',
  'CAREERS',
  'PROJECTS',
  'ACTIVITIES',
  'CONTACT',
];

const drawerSettings = {
  bodyStyle: {
    padding: '0',
  },
  height: 'auto',
  placement: 'top',
  closable: false,
};

const Header = () => {
  const { index: slickIndex, ref: slick } = useVerticalCarouselContext();
  const { mode } = useTheme();
  const [openDrawer, setDrawer] = useState(false);
  const toggleDrawer = (e) => {
    setDrawer((isOpen) => !isOpen);
  };

  return (
    <StyledHeader>
      <StyledMenu
        selectedKeys={[slickIndex.toString()]}
        mode="horizontal"
        theme={mode}
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
      <MobileHeaderWrap>
        <DrawerButton size="large" onClick={toggleDrawer} type="link">
          <HiMenu size="100%" />
        </DrawerButton>
        <PageTitle>
          <span>{categories[slickIndex]}</span>
        </PageTitle>
        <EmptyDiv />
      </MobileHeaderWrap>
      <Drawer visible={openDrawer} onClose={toggleDrawer} {...drawerSettings}>
        <DrawerMenu
          selectedKeys={[slickIndex.toString()]}
          mode="vertical"
          theme={mode}
        >
          {categories.map((category, idx) => {
            const onClick = () => {
              slick.current.slickGoTo(idx);
              toggleDrawer();
            };

            return (
              <DrawerMenuItem onClick={onClick} key={idx}>
                {category}
              </DrawerMenuItem>
            );
          })}
        </DrawerMenu>
      </Drawer>
    </StyledHeader>
  );
};

export default Header;
