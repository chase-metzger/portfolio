import React from 'react';
import PropTypes from 'prop-types';
//import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, description }) => (
  <figure>
    {/* <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} /> */}
    <figcaption>
      <Title>{title}</Title>
      <Copy>{description}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  //  image: PropTypes.object.isRequired,
};

export default Item;
