import React from 'react';
import { Switch } from 'antd';
import styled from 'styled-components';
import { useToggleThemeContext } from '../../providers/StyleProvider';

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

const mode = localStorage.getItem('theme');

const ThemeSwitch = () => {
  const { toggleTheme } = useToggleThemeContext();
  return (
    <StyledSwitch
      defaultChecked={mode === 'dark'}
      onChange={toggleTheme}
      {...settings}
    />
  );
};

export default ThemeSwitch;
