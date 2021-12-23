import React from 'react';
import { List, Segment, Embed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import TokusetsuLayout from '../../layouts/tokusetsuLayout';

import '../../styles/sass/ec.scss';

// embedの情報やclassNameなどの情報
const meta = {
  className: {
    div: 'ec-base',
    container: 'ec-contents',
    jacket: 'ec-jacket',
  },
  embed: {
    id: 'TOOjLQ-RpGA',
    placeholder: 'https://img.youtube.com/vi/TOOjLQ-RpGA/mqdefault.jpg',
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
        body: 'Being Apple (original: Bad Apple!!)',
      },
      {
        key: '2',
        head: '02.',
        body: 'Fall Of The Light (original: 信仰は儚き人間の為に)',
      },
      {
        key: '3',
        head: '03.',
        body: '幻想の蛙、巫女と踊る (original: ネイティブフェイス)',
      },
      {
        key: '4',
        head: '04.',
        body: 'The Ruins of A Certain Kingdom(original: 亡き王女の為のセプテット)',
      },
      {
        key: '5',
        head: '05.',
        body: 'ハイ・アンド・ラウンド(original: エクステンドアッシュ　～ 蓬莱人)',
      },
      {
        key: '6',
        head: '06.',
        body: '8:09 p.m.(original: 厄神様の通り道　～ Dark Road & 運命のダークサイド)',
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
        body: '(Bass[1-6], Arrange[M2,5] , Design)',
      },
      {
        key: '2',
        head: 'm@ko',
        body: '(Piano[1-6],Arrange[M1,3-4,6])',
      },
      {
        key: '3',
        head: 'jakelizzi',
        body: '(Drums[1-6])',
      },
    ],
  },
  {// Special Thanks list
    title: 'Special Thanks',
    headSize: '3',
    list: [
      {
        key: '1',
        head: 'ちゃんゆう',
        body: '(Recording Engineer, Mastering Engineer)',
      },
      {
        key: '2',
        head: 'あやか',
        body: '(Mixing Engineer)',
      },
      {
        key: '3',
        head: '　',
        body: '　',
      },
      {
        key: '4',
        head: 'ぢせ',
        body: '(Illustration)',
      },
      {
        key: '5',
        head: '　',
        body: '　',
      },
      {
        key: '6',
        head: 'StudioTLive',
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

const EC = ({ data }) => (
  <TokusetsuLayout
    jacketImg={data.imageSharp.resize.src}
    details={details}
    meta={meta}
    embed={embed}
    inverted
  >
    <Segment vertical size="large">
      <p>
        Effulgent Compex
      </p>
      <p>
        凪たる朝に光あれ
      </p>
      <p>
        東方アレンジアルバム第7弾！
      </p>
      <List>
        <List.Header>頒布情報</List.Header>
        <List.Item>頒布日　　　2021.12.21(コミックマーケット99)</List.Item>
        <List.Item>頒布場所　　東ケ-43b [Aqua Blend Server]</List.Item>
        <List.Item>頒布価格　　1000円</List.Item>
      </List>
    </Segment>
  </TokusetsuLayout>
);

EC.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`
  query {
    imageSharp(resize: {originalName: {eq: "EC_jacket_mini.jpg"}}) {
      resize {
        src
      }
    }
  }
`;

export default EC;
