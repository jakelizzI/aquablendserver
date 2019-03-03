import React from 'react';
import { graphql } from 'gatsby';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Carousel from '../components/carousel';
import Topics from '../components/topics';
import MyList from '../components/myList';

const Index = ({ data }) => (
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

Index.propTypes = {
  data: PropTypes.isRequired,
};

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

export default Index;
