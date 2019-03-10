import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import nicoIcon from '../images/icons/nc3132.jpg';

const MyList = () => (
  <Grid divided centered>
    <Grid.Row>
      <Grid.Column width="10">
        <Header as="h1">My List</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="10">
        <img
          src={nicoIcon}
          alt="ニコニコ動画"
        />
        ニコニコ動画
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default MyList;
