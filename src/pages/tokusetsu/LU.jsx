import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import TokusetsuLayout from '../../components/tokusetsuLayout';

import '../../styles/sass/lu.scss';

// embedの情報やclassNameなどの情報
const meta = {
  className: {
    div: 'lu-base',
    container: 'lu-contents',
    jacket: 'lu-jacket',
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
        body: '有識と無意識のフェリチタ (ハルトマンの妖怪少女)',
      },
      {
        head: '02.',
        body: 'アイストルマリン (おてんば恋娘)',
      },
      {
        head: '03.',
        body: 'かえりみち (U.N.オーエンは彼女なのか？)',
      },
    ],
  },
  {// Personnel list
    title: 'Personnel',
    headSize: '3',
    list: [
      {
        head: 'たしろう',
        body: 'Bass[2-3],Arrange[1-3],Lyrics[1,3],mixing[1-3]',
      },
      {
        head: 'm@ko',
        body: 'Piano[1-3]',
      },
      {
        head: 'な↑なし',
        body: 'Guitar[2]',
      },
    ],
  },
  {// Special Thanks list
    title: 'Special Thanks',
    headSize: '3',
    list: [
      {
        head: 'lamie*(Aliesrite*)',
        body: 'Vocal[1,3]',
      },
      {
        head: 'しぇぱ',
        body: 'Violin[1,3]',
      },
      {
        head: '　',
        body: '　',
      },
      {
        head: '雪',
        body: 'Design&Illustration',
      },
      {
        head: 'Studio Cinnamon',
        body: 'Mastering[1-3]',
      },
    ],
  },
];

const LU = ({ data }) => (
  <TokusetsuLayout
    data={data}
    details={details}
    meta={meta}
    secondary
  >
    <Segment vertical size="large">
      <p>
        Like an Undine
      </p>
      <p>
        Aqua Blend Serverによる東方アレンジアルバム第2.5弾！
      </p>
      <p>
        AR●A風東方アレンジ
      </p>
      <List>
        <List.Header>頒布情報</List.Header>
        <List.Item>頒布日　　　2016.10.16(博麗神社 秋季例大祭)</List.Item>
        <List.Item>頒布場所　　て-18a [Aqua Blend Server]</List.Item>
        <List.Item>頒布価格　　500円</List.Item>
      </List>
    </Segment>
  </TokusetsuLayout>
);

LU.propTypes = {
  data: PropTypes.string.isRequired,
};

export const query = graphql`
  query {
    imageSharp: imageSharp(resolutions: {originalName: {eq: "lu_jacket_mini.jpg"}}) {
      resize(width: 600, height: 600) {
        src
      }
    }
  }
`;

export default LU;
