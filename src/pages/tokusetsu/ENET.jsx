import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import TokusetsuLayout from '../../components/tokusetsuLayout';

import '../../styles/sass/enet.scss';

// embedの情報やclassNameなどの情報
const meta = {
  className: {
    div: 'enet-base',
    container: 'enet-contents',
    jacket: 'enet-jacket',
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
        head: '01.',
        body: 'Inner Emotion (ラクトガール　～ 少女密室)',
      },
      {
        head: '02.',
        body: 'Restart The Adolescent Mission (恋色マスタースパーク)',
      },
      {
        head: '03.',
        body: 'Half And Half (東方妖々夢　～ Ancient Temple)',
      },
      {
        head: '04.',
        body: 'Catch The Star In The Moon (星の器　～ Casket of Star)',
      },
      {
        head: '05.',
        body: '追憶の館 (上海紅茶館　～ Chinese Tea)',
      },
      {
        head: '06.',
        body: 'The Shadow Walker (レトロスペクティブ京都)',
      },
      {
        head: '07.',
        body: '物の怪のから騒ぎ (幽霊楽団　～ Phantom Ensemble)',
      },
      {
        head: '08.',
        body: 'My Favorite Rebel Night (メイガスナイト)',
      },
    ],
  },
  {// Personnel list
    title: 'Personnel',
    headSize: '3',
    list: [
      {
        head: '宮森たしろう',
        body: '(Bass[1-4,6-8],Arrange[1-4,6,8],Lyric[1,6],Mixing[1-8],Design)',
      },
      {
        head: 'm@ko',
        body: '(Piano[1-8],Arrange[5,7])',
      },
    ],
  },
  {// Special Thanks list
    title: 'Special Thanks',
    headSize: '3',
    list: [
      {
        head: 'はな',
        body: '(Vocal[1,6])<HP: http://forest.lovepop.jp/ >',
      },
      {
        head: 'jakelizzi',
        body: '(Drums[2,3,4,7,8])',
      },
      {
        head: 'H.O.',
        body: '(Alto sax[1-4,7,8])',
      },
      {
        head: 'しぇぱ',
        body: '(Violin[2])',
      },
      {
        head: '　',
        body: '　',
      },
      {
        head: '息吹のつ',
        body: '(Illustration)<HP: https://www.pixiv.net/member.php?id=7013 >',
      },
      {
        head: '　',
        body: '　',
      },
      {
        head: 'StudioTLive\n(田島克洋)',
        body: '(Recording[1-6])',
      },
      {
        head: '世田谷RECスタジオ',
        body: '(Recording[4,8])',
      },
      {
        head: 'Studio Cinnamon',
        body: '(Mastering[1-8])',
      },
    ],
  },
];

const ENET = ({ data }) => (
  <TokusetsuLayout
    data={data}
    details={details}
    meta={meta}
    inverted
  >
    <Segment vertical size="large">
      <p>
        Each Night Each Tale みんな、それぞれの夜を持っている。――
      </p>
      <p>
        Aqua Blend Server による 東方アレンジアルバム第5弾!
      </p>
      <p>
        インストJazzからボーカルPopsまで幅広い範囲を網羅！
      </p>
      <p>
        ジャズアレンジは生演奏・一発録りです！！
      </p>
      <List>
        <List.Header>頒布情報</List.Header>
        <List.Item>頒布日　　　2017.12.29(コミックマーケット93)</List.Item>
        <List.Item>頒布場所　　う-02b [Aqua Blend Server]</List.Item>
        <List.Item>頒布価格　　1000円</List.Item>
        <List.Item>　</List.Item>
        <List.Item>
          書店委託
          <a href="https://www.melonbooks.co.jp/detail/detail.php?product_id=320333" target="_blank" rel="noopener noreferrer">
          　　メロンブックス様
          </a>
        </List.Item>
      </List>
    </Segment>
  </TokusetsuLayout>
);

ENET.propTypes = {
  data: PropTypes.string.isRequired,
};

export const query = graphql`
  query {
    imageSharp: imageSharp(resolutions: {originalName: {eq: "ENET_jacket_mini.jpg"}}) {
      resize(width: 600, height: 600) {
        src
      }
    }
  }
`;

export default ENET;
