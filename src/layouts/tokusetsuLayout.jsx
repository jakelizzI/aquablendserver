import React from 'react';
import Helmet from 'react-helmet';
import {
  Container, Grid, Image, List, Segment, Header,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Footer from '../components/footer';

const TokusetsuLayout = (props) => {
  const {
    children, jacketImg, details, meta, inverted, secondary, embed,
  } = props;

  let segment;

  if (embed) {
    segment = (
      <Grid.Row centered>
        <Grid.Column computer={6} tablet={16}>
          <Segment vertical className="embed-height">
            {embed}
          </Segment>
        </Grid.Column>
        <Grid.Column computer={6} tablet={16}>
          {children}
        </Grid.Column>
      </Grid.Row>
    );
  } else {
    segment = (
      <Grid.Row centered>
        <Grid.Column computer={8} tablet={16}>
          {children}
        </Grid.Column>
      </Grid.Row>
    );
  }

  return (
    <div className={meta.className.div}>
      <Container className={meta.className.container}>
        <Helmet>
          <title>Aqua Blend Server</title>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
        </Helmet>
        <Grid container>
          <Grid.Row>
            <Grid.Column>
              <Image
                className={meta.className.jacket}
                src={jacketImg}
                centered
              />
            </Grid.Column>
          </Grid.Row>
          {segment}
        </Grid>
        {details.map(detail => (
          <div key={detail.title}>
            <Grid>
              <Grid.Row centered>
                <Grid.Column computer={12} mobile={16}>
                  <Header as="h2" inverted={inverted}>
                    {detail.title}
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid divided inverted={inverted}>
              <Grid.Row centered columns={2}>
                <Grid.Column computer={2} tablet={1} textAlign="right">
                </Grid.Column>
                <Grid.Column computer={12} tablet={15} mobile={16}>
                  <List inverted={inverted}>
                    {detail.list.map(content => (
                      <List.Item key={content.key}>
                        <List.Content>
                          <Grid>
                            <Grid.Row>
                              <Grid.Column computer={detail.headSize} tablet={detail.headSize} mobile={16}>
                                {content.head}
                              </Grid.Column>
                              <Grid.Column computer={16 - detail.headSize} tablet={16 - detail.headSize} mobile={16} verticalAlign="middle">
                                {content.body}
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </List.Content>
                      </List.Item>
                    ))}
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        ))}
        <Grid centered>
          <Grid.Row>
            <Grid.Column computer={10} tablet={15} mobile={16}>
              All Original Music Composed by ZUN(上海アリス幻樂団)
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Footer inverted={inverted} secondary={secondary} />
    </div>
  );
};

TokusetsuLayout.defaultProps = {
  inverted: false,
  secondary: false,
  embed: false,
};

TokusetsuLayout.propTypes = {
  children: PropTypes.node.isRequired,
  details: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  jacketImg: PropTypes.string.isRequired,
  meta: PropTypes.shape().isRequired,
  inverted: PropTypes.bool,
  secondary: PropTypes.bool,
  embed: PropTypes.node,
};

export default TokusetsuLayout;
