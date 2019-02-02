import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';

export default (props) => {
  const { children } = props;
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
      </Helmet>
      <Header />
      <div id="contents">
        {children}
      </div>
      <Footer />
    </div>
  );
}
