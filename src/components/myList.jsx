import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Grid, Header } from 'semantic-ui-react';

const MyList = ({ placeholderImage }) => (
  <Grid divided centered>
    <Grid.Row>
      <Grid.Column width="10">
        <Header as="h1">My List</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="10">
        {placeholderImage.edges.map((element) => {
          if (element.node.relativeDirectory === 'icons') {
            return (
              <a href="https://www.nicovideo.jp/mylist/54270948">
                <Img fixed={element.node.childImageSharp.fixed} />
                【ニコニコ動画】
              </a>
            );
          }
          return null;
        })
        }
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

MyList.propTypes = {
  placeholderImage: PropTypes.isRequired,
};

export default MyList;
