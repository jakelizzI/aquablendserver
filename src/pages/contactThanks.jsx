import React from 'react';
import { Divider, Header } from 'semantic-ui-react';

import Layout from '../layouts/baseLayout';

const contactThanks = () => (
  <Layout>
    <Header as="h2">
      ご連絡ありがとうございます
    </Header>
    <Divider />
    <p>返答には２，３日程度掛かる可能性がございます。</p>
    <p>また、必ずしもご返答できるとは限りません。ご理解の程、よろしくお願いいたします。</p>
  </Layout>
);

export default contactThanks;
