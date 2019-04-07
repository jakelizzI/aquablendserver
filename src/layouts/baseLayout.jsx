import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <title>Aqua Blend Server</title>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
    </Helmet>
    <Container>
      <Header />
      {children}
    </Container>
    <Footer secondary />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
