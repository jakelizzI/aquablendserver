import React from 'react';
import { Container, Grid, Header, Divider, List, Segment, Label, Image } from 'semantic-ui-react';

import Layout from '../layouts/baseLayout';

const windowGlobal = typeof window !== 'undefined' && window
const mobileWindowSize = 768;

const Discography = ({ data }) => (
  <Layout>
    <Container>
      <Divider />
      <Grid columns={1}>
        <Grid.Row centered>
          <Grid.Column computer={13} tablet={16} mobile={16}>
            {data.allMarkdownRemark.edges.map((edge, index) => (
              <Segment raised key={index}>
                {index == 0 ? <Label color='red' ribbon='right'>NEW!</Label> : ''}
                <Label color='black' attached='top left'>{edge.node.frontmatter.date} release</Label>
                <Grid columns={2} >
                  <Grid.Row>
                    <Grid.Column computer={6} tablet={16} mobile={16} textAlign='center'>
                      {edge.node.frontmatter.shortName !== 'DEMO' ? (
                        <Image
                          as='a'
                          src={edge.node.frontmatter.image.childImageSharp.fixed.src}
                          href={`/tokusetsu/${edge.node.frontmatter.shortName}`}
                          target='_brank'
                        />
                      ) : <Image src={edge.node.frontmatter.image.childImageSharp.fixed.src} />
                      }
                    </Grid.Column>
                    <Grid.Column computer={10} tablet={16} mobile={16}>
                      <Header as='h2' textAlign='center'>{edge.node.frontmatter.title}</Header>
                      <Divider />
                      <Container text textAlign='left' >
                        <List ordered size={windowGlobal.innerWidth < mobileWindowSize ? 'mini' : 'small'} >
                          {edge.node.frontmatter.tracks.map((track, index2) => (
                            <List.Item key={index2} >
                              <List.Content>{track?.name}</List.Content>
                              <List.Description>原曲：{track?.original}</List.Description>
                            </List.Item>
                          ))}
                        </List>
                      </Container>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark (filter: {frontmatter: {category: {eq: "discography"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
            type
            shortName
            image {
              childImageSharp {
                fixed(width: 360) {
                  src
                }
              }
            }
            tracks {
              name
              original
            }
          }
          html
        }
      }
    }
  }
`;

export default Discography;
