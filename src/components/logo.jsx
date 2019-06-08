import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Header } from 'semantic-ui-react';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logos/logo-sample-2.png" }) {
          childImageSharp {
            fixed(width: 246, height: 111) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Header as="h1">
        <Link to="/">
          <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="Aqua Blend Server" />
        </Link>
      </Header>
    )}
  />
);
