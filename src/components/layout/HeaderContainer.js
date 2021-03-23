import React from 'react';
import { useToggleThemeContext } from '../../providers/ThemeProvider';
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
  const { mode } = useToggleThemeContext();
  const [openDrawer, setDrawer] = useState(false);
  const toggleDrawer = (e) => {
    setDrawer((isOpen) => !isOpen);
  };
  const props = {
    slick,
    slickIndex,
    mode,
    categories,
    openDrawer,
    toggleDrawer,
    ...settings,
  };

  return <Header {...props} />;
};

export default HeaderContainer;
