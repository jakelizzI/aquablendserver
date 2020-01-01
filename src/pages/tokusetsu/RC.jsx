import React from 'react';
import { List, Segment, Embed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BackGroundImage from 'gatsby-background-image';

import TokusetsuLayout from '../../layouts/tokusetsuLayout';

import '../../styles/sass/rc.scss';

// embedの情報やclassNameなどの情報
const meta = {
  className: {
    div: 'rc-base',
    container: 'rc-contents',
    jacket: 'rc-jacket',
  },
  embed: {
    id: 'Y-u5xhcV_Mk',
    placeholder: 'http://img.youtube.com/vi/Y-u5xhcV_Mk/mqdefault.jpg',
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
        body: 'eine Fantasie für Sie「神々が恋した幻想郷」',
      },
      {
        key: '2',
        head: '02.',
        body: '時速60分殺人事件「天空のグリニッジ」',
      },
      {
        key: '3',
        head: '03.',
        body: '紫烟「ネクロファンタジア」',
      },
      {
        key: '4',
        head: '04.',
        body: '紅白巫女は渦と殻の夢を見る「二色蓮花蝶～Red And White」',
      },
      {
        key: '5',
        head: '05.',
        body: 'Re:Desired Life「デザイアドライブ」「古きユアンシェン」',
      },
    ],
  },
  {// Personnel list
    title: 'Personnel',
    headSize: '3',
    list: [
      {
        key: '1',
        head: 'な↑なし',
        body: '(Guitar[1-5],Arrange&Lyrics[3,5])',
      },
      {
        key: '2',
        head: 'm@ko',
        body: '(Piano[1-5],Arrange[1])',
      },
      {
        key: '3',
        head: '宮森たしろう',
        body: '(Bass[1-5],Arrange[2,4])',
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
        body: '(Drums[1,2,4])',
      },
      {
        key: '2',
        head: 'あーさー',
        body: '(Drums[3,5])',
      },
      {
        key: '3',
        head: '　',
        body: '　',
      },
      {
        key: '4',
        head: '東天紅',
        body: 'Design&Illustration',
      },
      {
        key: '5',
        head: 'げいほ',
        body: 'Mix&Mastering[1,3,5]',
      },
    ],
  },
];

const ENET = ({ data }) => {
  const jacketImg = data.imageSharp.edges.filter(edge => edge.node.resize.src.includes('Relaxin_Complex'));
  const bgImg = data.imageSharp.edges.filter(edge => edge.node.resize.src.includes('rc_BackGround'));

  return (
    <BackGroundImage
      Tag="section"
      fluid={bgImg[0].node.fluid}
      className="rc-background"
    >
      <TokusetsuLayout
        jacketImg={jacketImg[0].node.resize.src}
        details={details}
        meta={meta}
      >
        <Segment vertical size="large">
          <p>
            Relaxin&#39; Complex
          </p>
          <List>
            <List.Header>頒布情報</List.Header>
            <List.Item>頒布日　　　2015.12.30(コミックマーケット89)</List.Item>
            <List.Item>頒布場所　　西う-43b [Aqua Blend Server]</List.Item>
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
  query {
    imageSharp: allImageSharp(filter: {resolutions: {originalName: {in: ["Relaxin_Complex.jpg","rc_BackGround.jpg"]}}}) {
      edges {
        node {
          resize(width: 600, height: 600) {
            src
          }
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

export default ENET;
