import { navigate, graphql } from 'gatsby';
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

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "logo-sample.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
