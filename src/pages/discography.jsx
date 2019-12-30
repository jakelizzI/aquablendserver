import React from 'react';
import { Container, Grid, Header, Divider, List, Segment, Label } from 'semantic-ui-react';

import Layout from '../layouts/baseLayout';

const Discography = ({ data }) => (
  <Layout>
    <Container>
      <Divider />
      <Grid columns="1">
        <Grid.Row centered>
          <Grid.Column width="13">
            { data.allMarkdownRemark.edges.map( (edge, index) => (
              <Segment raised>
                { index == 0 ? <Label as='a' color='red' ribbon="right">NEW!</Label> : "" }
                <Grid columns="2" >
                  <Grid.Row key={ index }>
                    <Grid.Column width="6" textAlign="center">
                      <img src={ edge.node.frontmatter.image.childImageSharp.fixed.src } />
                    </Grid.Column>
                    <Grid.Column width="10">
                      <Header as="h2">{ edge.node.frontmatter.title }</Header>
                      <Divider />
                      <Container text textAlign="left">
                        <List ordered>
                          { edge.node.frontmatter.tracks.map( (track, index) => (
                            <List.Item>{track}</List.Item>
                          )) }
                        </List>
                      </Container>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            )) }
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
            image {
              childImageSharp {
                fixed(width: 256) {
                  src
                }
              }
            }
            tracks
          }
          html
        }
      }
    }
  }
`;

export default Discography;
