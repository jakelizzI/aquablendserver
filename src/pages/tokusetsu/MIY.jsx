import React from 'react';
import { List, Segment, Embed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BackGroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

import TokusetsuLayout from '../../layouts/tokusetsuLayout';

import '../../styles/sass/miy.scss';

// embedの情報やclassNameなどの情報
const meta = {
  className: {
    div: 'miy-base',
    container: 'miy-contents',
    jacket: 'miy-jacket',
  },
  embed: {
    id: 'Y-u5xhcV_Mk',
    placeholder: 'https://img.youtube.com/vi/Y-u5xhcV_Mk/mqdefault.jpg',
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
        body: 'My Tiny Moon　(千年幻想郷　～ History of the Moon)',
      },
      {
        key: '2',
        head: '02.',
        body: '綿津見に映る　(月時計　～ ルナ・ダイアル)',
      },
      {
        key: '3',
        head: '03.',
        body: 'Im Mondlicht　(月まで届け、不死の煙)',
      },
      {
        key: '4',
        head: '04.',
        body: '女神、窓辺にて　(逆転するホイールオブフォーチュン)',
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
        body: 'Bass[1-4],Arrange[1,2]',
      },
      {
        key: '2',
        head: 'm@ko',
        body: 'Piano[1-4],Arrange[3,4]',
      },
    ],
  },
  {// Special Thanks list
    title: 'Special Thanks',
    headSize: '3',
    list: [
      {
        key: '1',
        head: 'しぇぱ',
        body: 'Violin[2]',
      },
      {
        key: '2',
        head: 'jakelizzi',
        body: 'Drums[1,3,4]',
      },
      {
        key: '3',
        head: 'H.O.',
        body: 'Alto sax[1,3,4]',
      },
      {
        key: '4',
        head: '　',
        body: '　',
      },
      {
        key: '5',
        head: '中壱',
        body: 'Design&Illustration',
      },
      {
        key: '6',
        head: 'StudioTLive\n(田島克洋)',
        body: 'Recording[1-4],mixing[1-4]',
      },
      {
        key: '7',
        head: 'Studio Cinnamon',
        body: 'Mastering[1-4]',
      },
    ],
  },
];

const embed = (
  <Iframe
    width="312"
    height="176"
    url="https://ext.nicovideo.jp/thumb/sm30248496"
  >
    <a href="https://www.nicovideo.jp/watch/sm30248496">【C91】 Midnight In Yourself / Aqua Blend Server 【XFD】</a>
  </Iframe>
);

const ENET = ({ data }) => {
  const jacketImg = data.allImageSharp.nodes.find(node => node.resize.src.includes('miy_jacket_mini'));
  const bgImg = data.allImageSharp.nodes.find(node => node.resize.src.includes('miy_back'));

  const bgImageComponent = convertToBgImage(getImage(bgImg.gatsbyImageData));

  return (
    <BackGroundImage
      Tag="section"
      {...bgImageComponent}
      className="miy-background"
      alt={bgImg.resize.src}
    >
      <TokusetsuLayout
        jacketImg={jacketImg.resize.src}
        details={details}
        meta={meta}
        embed={embed}
        inverted
      >
        <Segment vertical size="large">
          <p>
            Midnight In Yourself
          </p>
          <p>
            Aqua Blend Serverによる東方アレンジアルバム第3弾！
          </p>
          <p>
            銀髪＆月に縁のあるキャラでまとめてみました。
          </p>
          <p>
            ジャズアレンジは生演奏・一発録りです！！
          </p>
          <List>
            <List.Header>頒布情報</List.Header>
            <List.Item>頒布日　　　2016.12.29(コミックマーケット91)</List.Item>
            <List.Item>頒布場所　　レ-41a [Aqua Blend Server]</List.Item>
            <List.Item>頒布価格　　500円</List.Item>
          </List>
        </Segment>
      </TokusetsuLayout>
    </BackGroundImage>
  );
};

ENET.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`
  query {allImageSharp(
      filter: {resize: {originalName: {in: ["miy_jacket_mini.jpg", "miy_back.jpg"]}}}
    ) {
      nodes {
        resize {
          src
        }
        gatsbyImageData
      }
    }
  }
`;

export default styled(ENET)`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
