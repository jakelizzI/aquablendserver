import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'semantic-ui-react';

import Header from './Header';
import Footer from './Footer';

export default (props) => {
  const { children } = props;
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>
      <Container>
        <Header />
        {children}
      </Container>
      <Footer />
    </div>
  );
};
