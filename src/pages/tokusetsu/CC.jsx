import React from 'react';
import { List, Segment, Embed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import TokusetsuLayout from '../../layouts/tokusetsuLayout';

import '../../styles/sass/cc.scss';

// embedの情報やclassNameなどの情報
const meta = {
  className: {
    div: 'cc-base',
    container: 'cc-contents',
    jacket: 'cc-jacket',
  },
  embed: {
    id: '3vBpIaNOFfQ',
    placeholder: 'https://img.youtube.com/vi/3vBpIaNOFfQ/mqdefault.jpg',
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
        body: 'You Lose An Alarm Clock. (小さな小さな賢将)',
      },
      {
        key: '2',
        head: '02.',
        body: 'Flowering Oversleeping (フラワリングナイト)',
      },
      {
        key: '3',
        head: '03.',
        body: 'Feel like bein\' with you. (砕月)',
      },
      {
        key: '4',
        head: '04.',
        body: '1884 (明治十七年の上海アリス)',
      },
      {
        key: '5',
        head: '05.',
        body: 'Do I Have To Believe In Spring? (幽雅に咲かせ、墨染の桜　～ Border of Life)',
      },
    ],
  },
  {// Personnel list
    title: 'Personnel',
    headSize: '3',
    list: [
      {
        key: '1',
        head: 'たしろう',
        body: 'Bass[1-5],Arrange[1,2,5]',
      },
      {
        key: '2',
        head: 'm@ko',
        body: 'Piano[3-5],Arrange[3,4],Lyric[3]',
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
        body: 'Drums[2-5]',
      },
      {
        key: '2',
        head: 'H.O.',
        body: 'Alto sax[1,2,4]',
      },
      {
        key: '3',
        head: 'はな',
        body: 'Vocal[3]',
      },
      {
        key: '4',
        head: 'な↑なし',
        body: 'Guitar[3]',
      },
      {
        key: '5',
        head: '　',
        body: '　',
      },
      {
        key: '6',
        head: '東天紅',
        body: 'Design&Illustration',
      },
      {
        key: '7',
        head: '世田谷RECスタジオ',
        body: 'Recording[1-5],mixing[1-5]',
      },
      {
        key: '8',
        head: 'Studio Cinnamon',
        body: 'Mastering[1-5]',
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

const LU = ({ data }) => (
  <TokusetsuLayout
    jacketImg={data.imageSharp.resize.src}
    details={details}
    meta={meta}
    embed={embed}
    secondary
  >
    <Segment vertical size="large">
      <p>
        Crystal Complex
      </p>
      <p>
        Aqua Blend Serverによる東方アレンジアルバム第4弾！
      </p>
      <List>
        <List.Header>頒布情報</List.Header>
        <List.Item>頒布日１　　2017.10.15(秋季例大祭)</List.Item>
        <List.Item>頒布場所１　い-33a [Aqua Blend Server]</List.Item>
        <List.Item>頒布日２　　2017.10.22(東方紅楼夢)</List.Item>
        <List.Item>頒布場所２　Ｌ-11b [Aqua Blend Server]</List.Item>
        <List.Item>頒布価格　　500円</List.Item>
      </List>
    </Segment>
  </TokusetsuLayout>
);

LU.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`
  query {
    imageSharp: imageSharp(resolutions: {originalName: {eq: "cc_jacket_mini.jpg"}}) {
      resize(width: 600, height: 600) {
        src
      }
    }
  }
`;

export default LU;
