import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const year = new Date().getFullYear();

const Footer = (props) => {
  const { inverted, secondary } = props;
  return (
    <Segment textAlign="center" inverted={inverted} secondary={secondary}>
      {`copyright (c) 2015-${year}  Aqua Blend Server  all rights reserved.`}
    </Segment>
  );
};

Footer.defaultProps = {
  inverted: false,
  secondary: false,
};

Footer.propTypes = {
  inverted: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Footer;
