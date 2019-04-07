import React from 'react';
import {
  List, Segment, Header, Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Iframe from 'react-iframe';

import TokusetsuLayout from '../../layouts/tokusetsuLayout';

import '../../styles/sass/fc.scss';

// embedの情報やclassNameなどの情報
const meta = {
  className: {
    div: 'fc-base',
    container: 'fc-contents',
    jacket: 'fc-jacket',
  },
  embed: {
    id: '3vBpIaNOFfQ',
    placeholder: 'http://img.youtube.com/vi/3vBpIaNOFfQ/mqdefault.jpg',
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
        body: 'Liebe macht blind. (恋色マスタースパーク)',
      },
      {
        key: '2',
        head: '02.',
        body: 'Magical City And Witch (the Grimoire of Alice)',
      },
      {
        key: '3',
        head: '03.',
        body: 'まどろみの中に誘われて (少女さとり ～ 3rd eye)',
      },
      {
        key: '4',
        head: '04.',
        body: 'liked girl (ラクトガール ～ 少女密室)',
      },
      {
        key: '5',
        head: '05.',
        body: 'The Dream Of Fusing Me (霊知の太陽信仰 ～ Nuclear Fusion)',
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
        body: 'Bass[1-5],Arrange[2,3,5],mixing[3]',
      },
      {
        key: '2',
        head: 'm@ko',
        body: 'Piano[1-5],Arrange[1]',
      },
      {
        key: '3',
        head: 'な↑なし',
        body: 'Guitar[1-2,4-5],Arrange[4],mixing[4]',
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
        body: 'Drums[1-3,5]',
      },
      {
        key: '2',
        head: 'H.O.',
        body: 'Alto sax[1,2]',
      },
      {
        key: '3',
        head: 'しぇぱ',
        body: 'Violin[3]',
      },
      {
        key: '4',
        head: '　',
        body: '　',
      },
      {
        key: '5',
        head: '東天紅',
        body: 'Design&Illustration',
      },
      {
        key: '6',
        head: 'StudioABR',
        body: 'Recording[1-3,5],mixing[1,2,5]',
      },
      {
        key: '7',
        head: 'Studio Cinnamon',
        body: 'Mastering[1-5]',
      },
    ],
  },
];

const embed = (
  <Iframe
    width="312"
    height="176"
    url="https://ext.nicovideo.jp/thumb/sm29416115"
  >
    <a href="https://www.nicovideo.jp/watch/sm29416115">【東方】Fragmentary Complex / Aqua Blend Server【XFD】</a>
  </Iframe>
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
      <Header as="h2">
        Fragmentary Complex
      </Header>
      <p>
        Aqua Blend Serverによる東方アレンジアルバム第2弾！
      </p>
      <p>
        明るめジャズ系、生演奏、一発撮りです。
      </p>
      <List>
        <List.Header>頒布情報</List.Header>
        <List.Item>頒布日　　　2016.08.13</List.Item>
        <List.Item>書店委託　　メロンブックス様</List.Item>
        <List.Item>
          <a
            href="https://www.melonbooks.co.jp/detail/detail.php?product_id=178787"
            alt="メロンブックス"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="https://www.melonbooks.co.jp/user_data/bnr/banner_200x40.gif" />
          </a>
        </List.Item>
      </List>
    </Segment>
  </TokusetsuLayout>
);

LU.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`
  query {
    imageSharp: imageSharp(resolutions: {originalName: {eq: "Fragmentary_Complex_mini.jpg"}}) {
      resize(width: 600, height: 600) {
        src
      }
    }
  }
`;

export default LU;
