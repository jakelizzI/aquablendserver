import React from 'react';
import Helmet from 'react-helmet';

import {
  Container, Embed, Grid, Image, List, Segment,
} from 'semantic-ui-react';

import Jacket from '../../images/etc/07_UR/Unconscious_Room_jacket_mini.jpg';

const UR = () => (
  <Container>
    <Helmet>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
    </Helmet>
    <Grid container>
      <Grid.Row>
        <Grid.Column centered>
          <Image
            src={Jacket}
            size="huge"
            centered
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row column={2}>
        <Grid.Column computer={6} tablet={16}>
          <Segment vertical>
            <Embed
              id="dAfsIPWKDK8"
              placeholder="http://img.youtube.com/vi/dAfsIPWKDK8/mqdefault.jpg"
              source="youtube"
            />
          </Segment>
        </Grid.Column>
        <Grid.Column computer={10} tablet={16}>
          <Segment vertical>
            <p>
              Unconscious Room 明りも美しい。蔭も美しい。
              <br />
              Aqua Blend Server による 東方アレンジアルバム第6弾!
              <br />
              ピアノとベースのデュオを中心に少人数編成でアレンジしました。
              <br />
              生演奏・一発録りです！！
              <br />
              <br />
              頒布情報
              <br />
              <br />
              <List>
                <List.Item>頒布日　　　2018.12.30(コミックマーケット95)</List.Item>
                <List.Item>頒布場所　　ロ-02b [Aqua Blend Server]</List.Item>
                <List.Item>頒布価格　　800円</List.Item>
              </List>
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default UR;
