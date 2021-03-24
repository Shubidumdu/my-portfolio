import React, { useState } from 'react';
import { useVerticalCarouselContext } from '../../providers/SlickProvider';
import { useToggleThemeContext } from '../../providers/StyleProvider';
import Header from './Header';

const categories = [
  'HOME',
  'PROFILE',
  'CAREERS',
  'PROJECTS',
  'ACTIVITIES',
  'CONTACT',
];

const settings = {
  bodyStyle: {
    padding: '0',
  },
  height: 'auto',
  placement: 'top',
  closable: false,
};

const HeaderContainer = () => {
  const { index: slickIndex, ref: slick } = useVerticalCarouselContext();
  const { theme } = useToggleThemeContext();
  const [openDrawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer((isOpen) => !isOpen);
  };
  const props = {
    slick,
    slickIndex,
    mode: theme.mode,
    categories,
    openDrawer,
    toggleDrawer,
    ...settings,
  };

  return <Header {...props} />;
};

export default HeaderContainer;
