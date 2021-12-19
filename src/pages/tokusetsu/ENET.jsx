import React from 'react';
import { List, Segment, Embed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BackGroundImage from 'gatsby-background-image';
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

import TokusetsuLayout from '../../layouts/tokusetsuLayout';

import '../../styles/sass/enet.scss';

// embedの情報やclassNameなどの情報
const meta = {
  className: {
    div: 'enet-base',
    container: 'enet-contents',
    jacket: 'enet-jacket',
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
        body: 'Inner Emotion (ラクトガール　～ 少女密室)',
      },
      {
        key: '2',
        head: '02.',
        body: 'Restart The Adolescent Mission (恋色マスタースパーク)',
      },
      {
        key: '3',
        head: '03.',
        body: 'Half And Half (東方妖々夢　～ Ancient Temple)',
      },
      {
        key: '4',
        head: '04.',
        body: 'Catch The Star In The Moon (星の器　～ Casket of Star)',
      },
      {
        key: '5',
        head: '05.',
        body: '追憶の館 (上海紅茶館　～ Chinese Tea)',
      },
      {
        key: '6',
        head: '06.',
        body: 'The Shadow Walker (レトロスペクティブ京都)',
      },
      {
        key: '7',
        head: '07.',
        body: '物の怪のから騒ぎ (幽霊楽団　～ Phantom Ensemble)',
      },
      {
        key: '8',
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
        key: '1',
        head: '宮森たしろう',
        body: '(Bass[1-4,6-8],Arrange[1-4,6,8],Lyric[1,6],Mixing[1-8],Design)',
      },
      {
        key: '2',
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
        key: '1',
        head: 'はな',
        body: '(Vocal[1,6])<HP: http://forest.lovepop.jp/ >',
      },
      {
        key: '2',
        head: 'jakelizzi',
        body: '(Drums[2,3,4,7,8])',
      },
      {
        key: '3',
        head: 'H.O.',
        body: '(Alto sax[1-4,7,8])',
      },
      {
        key: '4',
        head: 'しぇぱ',
        body: '(Violin[2])',
      },
      {
        key: '5',
        head: '　',
        body: '　',
      },
      {
        key: '6',
        head: '息吹のつ',
        body: '(Illustration)<HP: https://www.pixiv.net/member.php?id=7013 >',
      },
      {
        key: '7',
        head: '　',
        body: '　',
      },
      {
        key: '8',
        head: 'StudioTLive\n(田島克洋)',
        body: '(Recording[1-6])',
      },
      {
        key: '9',
        head: '世田谷RECスタジオ',
        body: '(Recording[4,8])',
      },
      {
        key: '10',
        head: 'Studio Cinnamon',
        body: '(Mastering[1-8])',
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

const ENET = ({ data }) => {
  const jacketImg = data.allImageSharp.nodes.find(node => node.resize.src.includes('ENET_jacket_mini'));
  const bgImg = data.allImageSharp.nodes.find(node => node.resize.src.includes('ENET_background3'));

  const temp = getImage(bgImg.gatsbyImageData);
  const bgImageComponent = convertToBgImage(temp);

  console.log(JSON.stringify(temp));
  console.log("=====");
  console.log(JSON.stringify(bgImageComponent));

  return (
    <BackGroundImage
      Tag="section"
      {...bgImageComponent}
      className="enet-background"
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
            Each Night Each Tale
          </p>
          <p>
            みんな、それぞれの夜を持っている。――
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
    </BackGroundImage>
  );
};

ENET.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`
  query {
    allImageSharp(
      filter: {resize: {originalName: {in: ["ENET_jacket_mini.jpg", "ENET_background3.jpg"]}}}
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

export default ENET;
