import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

import nicoIcon from '../images/icons/nc3132.jpg';

const MyList = () => (
  <Grid centered>
    <Grid.Row>
      <Grid.Column computer={10} tablet={16}>
        <Header as="h1">My List</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
      <Grid.Column computer={5} tablet={16} verticalAlign="middle">
        <a
          href="https://www.nicovideo.jp/mylist/54270948"
          target="brank"
        >
          <img
            src={nicoIcon}
            alt="ニコニコ動画"
          />
          ニコニコ動画
        </a>
      </Grid.Column>
      <Grid.Column computer={5} tablet={16} verticalAlign="middle">
        <a
          href="https://www.youtube.com/channel/UCySTj7H39uXSJhz5EKxdu4g/featured"
          target="brank"
        >
          <Icon name="youtube" size="huge" />
          Aqua Blend Server
        </a>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default MyList;
