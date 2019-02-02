import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'semantic-ui-react';

import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">
      <Button secondary>Click to page-2</Button>
    </Link>
  </Layout>
);
