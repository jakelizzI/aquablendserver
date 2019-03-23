import React from 'react';
import Helmet from 'react-helmet';
import BackgroundImage from 'gatsby-background-image';
import {
  Container, Embed, Grid, Image, List, Segment, Header,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import '../../styles/sass/ur.scss';

const UR = ({ data }) => (
  <div className="ur-base">
    <Container className="ur-contents">
      <Helmet>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
      </Helmet>
      <Grid container>
        <Grid.Row>
          <Grid.Column centered>
            <Image
              src={data.imageSharp.resize.src}
              centered
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row column={2} centered>
          <Grid.Column computer={6} tablet={16}>
            <Segment vertical>
              <Embed
                id="dAfsIPWKDK8"
                placeholder="http://img.youtube.com/vi/dAfsIPWKDK8/mqdefault.jpg"
                source="youtube"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column computer={6} tablet={16}>
            <Segment vertical>
              <p>
                Unconscious Room 明りも美しい。蔭も美しい。
              </p>
              <p>
                Aqua Blend Server による 東方アレンジアルバム第6弾!
              </p>
              <p>
                ピアノとベースのデュオを中心に少人数編成でアレンジしました。
              </p>
              <p>
                生演奏・一発録りです！！
              </p>
              <List>
                <List.Header>頒布情報</List.Header>
                <List.Item>頒布日　　　2018.12.30(コミックマーケット95)</List.Item>
                <List.Item>頒布場所　　ロ-02b [Aqua Blend Server]</List.Item>
                <List.Item>頒布価格　　800円</List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h3">
              Track
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <List ordered>
              <List.Item>Third Time's The Charm(少女さとり　～ 3rd eye)</List.Item>
              <List.Item>Cheer Together(死体旅行　～ Be of good cheer!)</List.Item>
              <List.Item>華かく散りぬれど(華のさかづき大江山)</List.Item>
              <List.Item>Daker Than Green(緑眼のジェラシー)</List.Item>
              <List.Item>One By Two(旧地獄街道を行く)</List.Item>
              <List.Item>Dear E.W.V.(ラストリモート)</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

UR.propTypes = {
  data: PropTypes.string.isRequired,
};

export const query = graphql`
  query {
    imageSharp: imageSharp(resolutions: {originalName: {eq: "Unconscious_Room_jacket_mini.jpg"}}) {
      resize(width: 600, height: 600) {
        src
      }
    }
  }
`;

export default UR;
