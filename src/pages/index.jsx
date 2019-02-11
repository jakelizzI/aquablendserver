import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'semantic-ui-react';

import Layout from '../components/Layout';
import Carousel from '../components/Carousel';

export default () => (
  <Layout>
    <br />
    <Carousel />
    <br />
    <Link to="/news">
      <Button secondary>news</Button>
    </Link>
  </Layout>
);
