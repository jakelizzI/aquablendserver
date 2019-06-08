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

      <meta property="og:title" content="Aqua Blend Server" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="東方JazzアレンジサークルのAquaBlendServerの公式ホームページです。Official website of Aqua Blend Server" />
      <meta property="og:url" content="https://aquablendserver.work" />
      <meta property="og:site_name" content="Aqua Blend Server公式ホームページ" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@AquaBlendServer" />
      <meta name="twitter:url" content="https://aquablendserver.work" />
      <meta name="twitter:title" content="Aqua Blend Server公式ホームページ" />
      <meta name="twitter:description" content="東方JazzアレンジサークルのAquaBlendServerの公式ホームページです。Official website of Aqua Blend Server" />
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
