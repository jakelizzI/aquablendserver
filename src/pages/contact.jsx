import React from 'react';
import {
  Button, Grid, TextArea, Form, Header, Input, Icon, Divider,
} from 'semantic-ui-react';

import Layout from '../layouts/baseLayout';

const sendMail = () => {
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const data = { text: `email : ${email} \n ${message}` };
  const url = process.env.SLACK_API;

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    alert(`success : ${process.env.SLACK_API}`);
    console.log(res);
  }).catch((err) => {
    alert(err);
    console.log(err);
  });
};

const Contact = () => (
  <Layout>
    <Divider />
    <Form>
      <Grid>
        <Grid.Row centered>
          <Grid.Column computer={12} tablet={16}>
            <p>
              ご感想・ご要望、その他ご質問などございましたら下記のフォームより送信してください。|{process.env.SLACK_API}|
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column computer={2} tablet={16} textAlign="right">
            <Header as="h3">e-mail</Header>
          </Grid.Column>
          <Grid.Column computer={10} tablet={16}>
            <Input iconPosition="left" placeholder="e-mail">
              <Icon name="at" />
              <input id="email" type="email" size="64" />
            </Input>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column computer={2} tablet={16} textAlign="right">
            <Header as="h3">message</Header>
          </Grid.Column>
          <Grid.Column computer={10} tablet={16}>
            <TextArea id="message" placeholder="tell us something..." />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column computer={12} tablet={16} textAlign="right">
            <Button onClick={sendMail}>Send</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  </Layout>
);

export default Contact;
