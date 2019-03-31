import React from 'react';
import Helmet from 'react-helmet';
import {
  Container, Embed, Grid, Image, List, Segment, Header,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import BackGroundImage from 'gatsby-background-image';

import Footer from './footer';
import BGImage from '../images/etc/06_ENET/ENET_background3.jpg';

const TokusetsuLayout = (props) => {
  const {
    children, data, details, meta, inverted, secondary,
  } = props;
  return (
    <BackGroundImage
      fluid={BGImage}
    >
      <div className={meta.className.div}>
        <Container className={meta.className.container}>
          <Helmet>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
          </Helmet>
          <Grid container>
            <Grid.Row>
              <Grid.Column centered>
                <Image
                  className={meta.className.jacket}
                  src={data.imageSharp.resize.src}
                  centered
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row column={2} centered>
              <Grid.Column computer={6} tablet={16}>
                <Segment vertical>
                  <Embed
                    id={meta.embed.id}
                    placeholder={meta.embed.placeholder}
                    source={meta.embed.source}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column computer={6} tablet={16}>
                {children}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {details.map(detail => (
            <>
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
                    <List celled inverted={inverted}>
                      {detail.list.map(content => (
                        <List.Item>
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
            </>
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
    </BackGroundImage>
  );
};

TokusetsuLayout.defaultProps = {
  inverted: false,
  secondary: false,
};

TokusetsuLayout.propTypes = {
  children: PropTypes.node.isRequired,
  details: PropTypes.shape.isRequired,
  data: PropTypes.string.isRequired,
  meta: PropTypes.shape.isRequired,
  inverted: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default TokusetsuLayout;
