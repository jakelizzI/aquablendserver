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
      <MyList placeholderImage={data.placeholderImage} />
    </Segment>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 1) {
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
    placeholderImage: allFile(filter : {relativeDirectory : {in : ["icons","slider"]}}, sort: {fields: name, order: DESC}) {
      edges {
        node {
          relativeDirectory
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

export default Index;
