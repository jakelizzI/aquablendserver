import React from 'react';
import { graphql } from 'gatsby';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Layout from '../layouts/baseLayout';
import Carousel from '../components/carousel';
import Information from '../components/information';
import Shop from '../components/shop';
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
    <Segment vertical>
      <Information allMarkdownRemark={data.allMarkdownRemark} />
    </Segment>
    <Segment vertical>
      <Shop />
    </Segment>
    <Segment vertical>
      <MyList />
    </Segment>
    <Segment vertical>
      <Biography />
    </Segment>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.array,
    placeholderImage: PropTypes.object,
  }).isRequired,
};

export const query = graphql`{
  allMarkdownRemark(
    filter: {frontmatter: {category: {eq: "news"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    edges {
      node {
        frontmatter {
          title
          open
          date
          type
        }
        html
      }
    }
  }
  placeholderImage: allFile(
    filter: {relativeDirectory: {eq: "slider"}}
    sort: {fields: name, order: DESC}
  ) {
    nodes {
      id
      relativeDirectory
      name
      childrenImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
}
`;

export default Index;
