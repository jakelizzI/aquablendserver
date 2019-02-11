import React from 'react';
import Slider from 'react-slick';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const query = graphql`
  query CarouselQuery {
    placeholderImage: allFile(filter : {relativeDirectory : {eq : "slider"}}, sort: {fields: name, order: DESC}) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Slider {...settings}>
        {data.placeholderImage.edges.map(element => (
          <Link to={element.node.name} key={element.node.id}>
            <Img fluid={element.node.childImageSharp.fluid} />
          </Link>
        ))}
      </Slider>
    )}
  />
);
