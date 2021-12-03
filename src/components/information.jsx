import React from 'react';
import { Grid, Header, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Information = ({ allMarkdownRemark }) => (
  <>
    <Grid divided>
      <Grid.Row>
        <Grid.Column computer={10} tablet={16}>
          <Header as="h2">Information</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid divided centered>
      {allMarkdownRemark.edges.map((edge, index) => (
        <Grid.Row key={index}>
          <Grid.Column computer={3} textAlign="right" only="computer">
            <Header as="h3">
              {edge.node.frontmatter.date}
              <br />
              {edge.node.frontmatter.type}
            </Header>
          </Grid.Column>
          <Grid.Column tablet={16} textAlign="left" only="tablet mobile">
            <Header as="h3">
              {edge.node.frontmatter.date}
              <br />
              {edge.node.frontmatter.type}
            </Header>
            <Divider />
          </Grid.Column>
          <Grid.Column computer={7} tablet={16}>
            <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  </>
);

Information.propTypes = {
  allMarkdownRemark: PropTypes.isRequired,
};

export default Information;
