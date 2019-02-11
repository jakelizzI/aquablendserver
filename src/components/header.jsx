import { navigate } from 'gatsby';
import React from 'react';
import { Menu } from 'semantic-ui-react';

import Logo from './Logo';

export default () => (
  <div>
    <Logo />
    <Menu widths={4}>
      <Menu.Item
        link
        onClick={
          () => navigate('/news')
        }
      >
          news
      </Menu.Item>
      <Menu.Item
        link
        onClick={
          () => navigate('/blog')
        }
      >
        blog
      </Menu.Item>
      <Menu.Item
        link
        onClick={
          () => navigate('/discography')
        }
      >
        discography
      </Menu.Item>
      <Menu.Item
        link
        onClick={
          () => navigate('/contact')
        }
      >
        contact
      </Menu.Item>
    </Menu>
  </div>
);
