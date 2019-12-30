import React from 'react';
import { graphql } from 'gatsby';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Layout from '../layouts/baseLayout';
import Carousel from '../components/carousel';
import Topics from '../components/topics';
import MyList from '../components/myList';
import Biography from '../components/biography';

const Index = ({ data }) => (
  <Layout>
    <Helmet>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Helmet>
    <Segment basic>
      <Carousel placeholderImage={data.placeholderImage} />
    </Segment>
    <Segment basic>
      <Topics allMarkdownRemark={data.allMarkdownRemark} />
    </Segment>
    <Segment basic>
      <MyList />
    </Segment>
    <Segment basic>
      <Biography />
    </Segment>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "news"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 1) {
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
    placeholderImage: allFile(filter : {relativeDirectory : {eq : "slider"}}, sort: {fields: name, order: DESC}) {
      edges {
        node {
          relativeDirectory
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
