import React, { useContext } from 'react';
import { Switch } from 'antd';
import { ToggleThemeContext } from '../../../App';
import styled from 'styled-components';

const StyledSwitch = styled(Switch)`
  z-index: 1;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

const settings = {
  unCheckedChildren: 'Light',
  checkedChildren: 'Dark',
};

const ThemeSwitch = () => {
  const toggleTheme = useContext(ToggleThemeContext);

  return <StyledSwitch onChange={toggleTheme} {...settings} />;
};

export default ThemeSwitch;