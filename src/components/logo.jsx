import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Header } from 'semantic-ui-react';

export default () => (
  <StaticQuery
    query={graphql`{
        imageSharp(fixed: {originalName: {eq: "logo-sample-2.png"}}) {
          gatsbyImageData(layout: FIXED, width: 246, height: 111)
        }
      }
    `}
    render={data => {
      const image = getImage(data.imageSharp);
      return (
        <Header as="h1">
          <Link to="/">
            <GatsbyImage
              image={image}
              alt="Aqua Blend Server" />
          </Link>
        </Header>
      );
    }}
  />
);
