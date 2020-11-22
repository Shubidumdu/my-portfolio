import React from 'react';
import { Layout, Menu } from 'antd';

const { Header: H } = Layout;

const categories = [
  'HOME',
  'INTRODUCTION',
  'ACTIVITIES',
  'CAREERS',
  'PROJECTS',
  'CONTACT',
];

const Header = () => {
  return (
    <H>
      <Menu mode="horizontal" theme="dark" style={{ textAlign: 'center' }}>
        {categories.map((category) => {
          return <Menu.Item key={category}>{category}</Menu.Item>;
        })}
      </Menu>
    </H>
  );
};

export default Header;
