import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            date
            type
          }
          html
        }
      }
    }
  }
`;

export default () => (
  <StaticQuery
    query={query}
    render={data => <div>{data.allMarkdownRemark.edges[0].node.html}</div>}
  />
);
