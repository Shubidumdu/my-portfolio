import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { SlickContext } from '..';

const { Header: H } = Layout;

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

  return (
    <H>
      <Menu
        selectedKeys={[slickIndex.toString()]}
        mode="horizontal"
        theme="dark"
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
    </H>
  );
};

export default Header;
