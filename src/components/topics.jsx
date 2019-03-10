import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Topics = ({ allMarkdownRemark }) => (
  <Grid divided centered>
    <Grid.Row>
      <Grid.Column computer={10} tablet={16}>
        <Header as="h1">Aqua Blend Server&#39;s Topics</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column computer={3} tablet={6} textAlign="right">
        {allMarkdownRemark.edges[0].node.frontmatter.date}
        <br />
        {allMarkdownRemark.edges[0].node.frontmatter.type}
      </Grid.Column>
      <Grid.Column computer={7} tablet={10}>
        <div dangerouslySetInnerHTML={{ __html: allMarkdownRemark.edges[0].node.html }} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

Topics.propTypes = {
  allMarkdownRemark: PropTypes.isRequired,
};

export default Topics;
