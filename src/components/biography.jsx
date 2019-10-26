import React from 'react';
import {
  Grid, Header, Icon, Card, List,
} from 'semantic-ui-react';

const Biography = () => (
  <Grid centered>
    <Grid.Row>
      <Grid.Column computer={10} tablet={16}>
        <Header as="h2">Member</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
      <Grid.Column computer={5} tablet={16}>
        <Card>
          <Card.Content>
            <Card.Header>
              <a
                href="https://twitter.com/m_tashirou"
                target="blank"
              >
                たしろう
                <Icon name="twitter" size={48} />
              </a>
            </Card.Header>
            <Card.Meta>ベース</Card.Meta>
            <Card.Description>
              <List bulleted>
                <List.Item>サークル代表(という名の雑用係)</List.Item>
                <List.Item>演奏する人</List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column computer={5} tablet={16}>
        <Card>
          <Card.Content>
            <Card.Header>
              <a
                href="https://twitter.com/Doppel_Kreuz"
                target="blank"
              >
                m@ko
                <Icon name="twitter" size={48} />
              </a>
            </Card.Header>
            <Card.Meta>ピアノ</Card.Meta>
            <Card.Description>
              <List bulleted>
                <List.Item>演奏する人</List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
      <Grid.Column computer={5} tablet={16}>
        <Card>
          <Card.Content>
            <Card.Header>
              <a
                href="https://twitter.com/jakelizzi"
                target="blank"
              >
                jakelizzi
                <Icon name="twitter" size={48} />
              </a>
            </Card.Header>
            <Card.Meta>ドラム</Card.Meta>
            <Card.Description>
              <List bulleted>
                <List.Item>ホームページを動かしている人</List.Item>
                <List.Item>演奏する人</List.Item>
                <List.Item>運営する人</List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column computer={5} tablet={16} />
    </Grid.Row>
  </Grid>
);

export default Biography;
