import React, { useState } from 'react';
import { navigate } from 'gatsby';
import {
  Button, Grid, TextArea, Form, Header, Input, Icon, Divider, Message, Transition, Popup
} from 'semantic-ui-react';

import Layout from '../layouts/baseLayout';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [visibility, setVisibility] = useState(false);

  const sendMessage = () => {
    const data = { text: `email : ${email} \n ${message}` };
    const url = process.env.GATSBY_SLACK_API;

    // eslint-disable-next-line no-undef
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      navigate('/contactThanks');
    }).catch((err) => {
      setErrorMessage(err.message);
      setVisibility(true);
    });
  };

  return (
    <Layout>
      <Divider />
      <Transition visible={visibility}>
        <Message error>
          <Message.Header>メッセージの送信に失敗しました</Message.Header>
          <p>エラー：{errorMessage}</p>
        </Message>
      </Transition>
      <Form onSubmit={sendMessage}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column computer={12} tablet={16}>
              <Header as="h2">
                CONTACT
              </Header>
              <p>
                ご感想・ご要望、その他ご質問などございましたら下記のフォームより送信してください。
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={2} tablet={16} textAlign="right">
              <Popup content="必須項目です" position="top right" trigger={<Header as="h3">e-mail*</Header>} />
            </Grid.Column>
            <Grid.Column computer={10} tablet={16}>
              <Input iconPosition="left" placeholder="e-mail">
                <Icon name="at" />
                <input id="email" type="email" size="64" onChange={e => setEmail(e.target.value)} required />
              </Input>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={2} tablet={16} textAlign="right">
              <Popup content="必須項目です" position="bottom right" trigger={<Header as="h3">message*</Header>} />
            </Grid.Column>
            <Grid.Column computer={10} tablet={16}>
              <TextArea id="message" placeholder="tell us something..." onChange={e => setMessage(e.target.value)} required />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={12} tablet={16} textAlign="right">
              <Button type="submit">Send</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Layout>
  );
};

export default Contact;
