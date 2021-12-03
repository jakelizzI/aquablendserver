import React from 'react';
import { graphql } from 'gatsby';
import { Divider, Grid, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Layout from '../layouts/baseLayout';

const News = ({ data }) => (
  <Layout>
    <Divider />
    <Grid divided>
      <Grid.Row>
        <Grid.Column width={10}>
          <Header as="h2">Aqua Blend Server&#39;s News</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid divided centered>
      {data.allMarkdownRemark.edges.map(edge => (
        <>
          <Grid.Row>
            <Grid.Column computer={3} only="computer" textAlign="right">
              {edge.node.frontmatter.date}
              <br />
              {edge.node.frontmatter.type}
            </Grid.Column>
            <Grid.Column only="tablet mobile" tablet={16} mobile={16}>
              <Divider horizontal>
                {edge.node.frontmatter.date}
                {edge.node.frontmatter.type}
              </Divider>
            </Grid.Column>
            <Grid.Column computer={7} tablet={16} mobile={16}>
              <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            </Grid.Column>
          </Grid.Row>
          <Divider />
        </>
      ))}
    </Grid>
  </Layout>
);

News.propTypes = {
  data: PropTypes.isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "news"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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
