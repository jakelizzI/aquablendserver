import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Container, Grid, Header, Divider, List, Segment, Label } from 'semantic-ui-react';

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
            {data.allMarkdownRemark.nodes.map((node, index) => (
              <Segment raised key={index}>
                {index == 0 ? <Label color='red' ribbon='right'>NEW!</Label> : ''}
                <Label color='black' attached='top left'>{node.frontmatter.date} release</Label>
                <Grid columns={2} >
                  <Grid.Row>
                    <Grid.Column computer={6} tablet={16} mobile={16} textAlign='center'>
                      {console.log(JSON.stringify(node.frontmatter.image.childImageSharp))}
                      {node.frontmatter.shortName !== 'DEMO' ? (
                        <GatsbyImage
                          as='a'
                          image={getImage(node.frontmatter.image.childImageSharp)}
                          href={`/tokusetsu/${node.frontmatter.shortName}`}
                          target='_brank'
                          alt={node.frontmatter.shortName}
                        />
                      ) : <GatsbyImage image={getImage(node.frontmatter.image.childImageSharp)} alt={node.frontmatter.shortName} />
                      }
                    </Grid.Column>
                    <Grid.Column computer={10} tablet={16} mobile={16}>
                      <Header as='h2' textAlign='center'>{node.frontmatter.title}</Header>
                      <Divider />
                      <Container text textAlign='left' >
                        <List ordered size={windowGlobal.innerWidth < mobileWindowSize ? 'mini' : 'small'} >
                          {node.frontmatter.tracks.map((track, index2) => (
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

export const query = graphql`{
  allMarkdownRemark(
    filter: {frontmatter: {category: {eq: "discography"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      frontmatter {
        date
        category
        title
        shortName
        image {
          childImageSharp {
            gatsbyImageData(width: 360)
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
`;

export default Discography;
