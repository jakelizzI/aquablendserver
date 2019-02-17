import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

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
      <Link to="/">
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </Link>
    )}
  />
);
