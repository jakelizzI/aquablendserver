import React from 'react';
import { graphql } from 'gatsby';
import { Segment } from 'semantic-ui-react';

import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import Topics from '../components/Topics';
import MyList from '../components/MyList';

export default ({ data }) => (
  <Layout>
    <Segment basic>
      <Carousel placeholderImage={data.placeholderImage} />
    </Segment>
    <Segment basic>
      <Topics allMarkdownRemark={data.allMarkdownRemark} />
    </Segment>
    <Segment basic>
      <MyList />
    </Segment>
  </Layout>
);


export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            date
            type
          }
          rawMarkdownBody
        }
      }
    }
    placeholderImage: allFile(filter : {relativeDirectory : {eq : "slider"}}, sort: {fields: name, order: DESC}) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
