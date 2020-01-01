import React from 'react';
import { Grid, Header, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Shop = ({ allMarkdownRemark }) => (
  <Grid divided centered>
    <Grid.Row>
      <Grid.Column computer={10} tablet={16}>
        <Header as="h2">Store</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign="center">
        <Header as="h3">
          <a href="https://www.melonbooks.co.jp/search/search.php?mode=search&search_disp=&category_id=0&text_type=&text_type=all&name=aqua+blend+server" border="0" target="_blank">
            <img src="https://www.melonbooks.co.jp/user_data/bnr/banner_200x40.gif" width="200" height="40" alt="メロンブックス" />
          </a>
        </Header>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

Shop.propTypes = {
  allMarkdownRemark: PropTypes.isRequired,
};

export default Shop;
