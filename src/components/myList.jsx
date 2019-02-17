import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default () => (
  <Grid divided centered>
    <Grid.Row>
      <Grid.Column width="10">
        <Header as="h1">My List</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="10">
        マイリスト
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
