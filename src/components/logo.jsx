import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Header } from 'semantic-ui-react';

export default () => (
  <StaticQuery
    query={graphql`{
        allImageSharp(filter: {original: {src: {regex: "/.*logo-sample-2/"}}}) {
          nodes {
            gatsbyImageData(height: 111, width: 246)
          }
        }
      }
    `}
    render={data => {
      const image = getImage(data.allImageSharp.nodes[0].gatsbyImageData);
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
