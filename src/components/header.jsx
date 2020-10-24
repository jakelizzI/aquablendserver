import { navigate } from 'gatsby';
import React from 'react';
import { Menu } from 'semantic-ui-react';

import Logo from './logo';

export default () => (
  <div>
    <Logo />
    <Menu widths={4}>
      <Menu.Item
        link
        onClick={
          () => navigate('/')
        }
      >
          Home
      </Menu.Item>
      <Menu.Item
        link
        onClick={
          () => navigate('/news')
        }
      >
          News
      </Menu.Item>
      <Menu.Item
        link
        onClick={
          () => navigate('/discography')
        }
      >
        Discography
      </Menu.Item>
      <Menu.Item
        link
        onClick={
          () => navigate('/contact')
        }
      >
        Contact
      </Menu.Item>
    </Menu>
  </div>
);
