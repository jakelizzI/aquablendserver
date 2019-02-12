import React from 'react';
import Slider from 'react-slick';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default ({ placeholderImage }) => (
  <Slider {...settings}>
    {placeholderImage.edges.map(element => (
      <Link to={element.node.name} key={element.node.id}>
        <Img fluid={element.node.childImageSharp.fluid} />
      </Link>
    ))}
  </Slider>
);
