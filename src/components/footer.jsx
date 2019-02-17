import React from 'react';
import { Segment } from 'semantic-ui-react';

const year = new Date().getFullYear();

export default () => (
  <Segment textAlign="center" secondary>
    {`copyright (c) ${year}  &quot;Aqua Blend Server&quot;  all rights reserved.`}
  </Segment>
);
