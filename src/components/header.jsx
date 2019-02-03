import { navigate, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Menu } from 'semantic-ui-react';

export default ( {data} ) => (
  <div>
    <Img fixed={ data.file.childImageSharp.fixed } />
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
    file(relativePath: { eq: "logo-sample.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
