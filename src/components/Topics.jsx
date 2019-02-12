import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default ({ allMarkdownRemark }) => (
  <Grid divided centered>
    <Grid.Row>
      <Grid.Column width="10">
        <Header as="h1">Aqua Blend Server's Topics</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="3" textAlign="right">
        {allMarkdownRemark.edges[0].node.frontmatter.date}
        <br />
        {allMarkdownRemark.edges[0].node.frontmatter.type}
      </Grid.Column>
      <Grid.Column width="7">
        {allMarkdownRemark.edges[0].node.html}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
