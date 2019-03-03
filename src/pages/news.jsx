import React from 'react';
import { graphql } from 'gatsby';
import { Divider, Grid, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';

const News = ({ data }) => (
  <Layout>
    <Divider />
    <Grid divided centered>
      <Grid.Row>
        <Grid.Column width="10">
          <Header as="h1">Aqua Blend Server&#39;s News</Header>
        </Grid.Column>
      </Grid.Row>
      {data.allMarkdownRemark.edges.map(edge => (
        <Grid.Row>
          <Grid.Column width="3" textAlign="right">
            {edge.node.frontmatter.date}
            <br />
            {edge.node.frontmatter.type}
          </Grid.Column>
          <Grid.Column width="7">
            <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  </Layout>
);

News.propTypes = {
  data: PropTypes.isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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

export default News;
