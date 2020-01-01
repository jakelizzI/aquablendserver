import React from 'react';
import { List, Segment, Embed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import TokusetsuLayout from '../../layouts/tokusetsuLayout';

import '../../styles/sass/ur.scss';

// embedの情報やclassNameなどの情報
const meta = {
  className: {
    div: 'ur-base',
    container: 'ur-contents',
    jacket: 'ur-jacket',
  },
  embed: {
    id: 'dAfsIPWKDK8',
    placeholder: 'http://img.youtube.com/vi/dAfsIPWKDK8/mqdefault.jpg',
    source: 'youtube',
  },
};

// 詳細情報
const details = [
  {// Track list
    title: 'Track',
    headSize: '1',
    list: [
      {
        key: '1',
        head: '01.',
        body: 'Third Time\'s The Charm(少女さとり　～ 3rd eye)',
      },
      {
        key: '2',
        head: '02.',
        body: 'Cheer Together(死体旅行　～ Be of good cheer!)',
      },
      {
        key: '3',
        head: '03.',
        body: '華かく散りぬれど(華のさかづき大江山)',
      },
      {
        key: '4',
        head: '04.',
        body: 'Daker Than Green(緑眼のジェラシー)',
      },
      {
        key: '5',
        head: '05.',
        body: 'One By Two(旧地獄街道を行く)',
      },
      {
        key: '6',
        head: '06.',
        body: 'Dear E.W.V.(ラストリモート)',
      },
    ],
  },
  {// Personnel list
    title: 'Personnel',
    headSize: '3',
    list: [
      {
        key: '1',
        head: '宮森たしろう',
        body: '(Bass[1-2,4-6], Arrange[2,4,6] , Design)',
      },
      {
        key: '2',
        head: 'm@ko',
        body: '(Piano[1-3,5-6],Arrange[1,3,5])',
      },
    ],
  },
  {// Special Thanks list
    title: 'Special Thanks',
    headSize: '3',
    list: [
      {
        key: '1',
        head: 'jakelizzi',
        body: '(Drums[3-4,6])',
      },
      {
        key: '2',
        head: 'H.O.',
        body: '(Alto sax[4,6])',
      },
      {
        key: '3',
        head: '　',
        body: '　',
      },
      {
        key: '4',
        head: '息吹のつ',
        body: '(Illustration)<HP: https://www.pixiv.net/member.php?id=7013 >',
      },
      {
        key: '5',
        head: '　',
        body: '　',
      },
      {
        key: '6',
        head: 'StudioTLive\n(田島克洋)',
        body: '(Recording[1-6])',
      },
    ],
  },
];

const embed = (
  <Embed
    id={meta.embed.id}
    placeholder={meta.embed.placeholder}
    source={meta.embed.source}
  />
);

const UR = ({ data }) => (
  <TokusetsuLayout
    jacketImg={data.imageSharp.resize.src}
    details={details}
    meta={meta}
    embed={embed}
    inverted
  >
    <Segment vertical size="large">
      <p>
        Unconscious Room
      </p>
      <p>
        明りも美しい。蔭も美しい。
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
  </TokusetsuLayout>
);

UR.propTypes = {
  data: PropTypes.shape().isRequired,
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
