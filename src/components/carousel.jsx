import React from 'react';
import Slider from 'react-slick';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import PropTypes from 'prop-types';

import '../styles/sass/carousel.scss';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = ({ placeholderImage }) => (
  <Slider {...settings}>
    {placeholderImage.nodes.map((node, index) => {
      const urName = node.name.slice(3);
      return (
        <a target="_blank" rel="noopener noreferrer" href={`/tokusetsu/${urName}`} key={index.toString()}>
          <GatsbyImage image={getImage(node.childrenImageSharp[0])} alt={urName} />
        </a>
      );
    })
    }
  </Slider>
);

Carousel.propTypes = {
  placeholderImage: PropTypes.object.isRequired,
};

export default Carousel;
