import React from 'react';
import posed from 'react-pose';
import PropTypes from 'prop-types';
//import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
import Figure from 'react-bootstrap/Figure';

const ItemContainer = posed.div({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
});

const Item = ({ title, description, url }) => (
  <ItemContainer>
    <Figure>
      <a href={url}>
        <Title>{title}</Title>
      </a>
      <Figure.Caption>
        <Copy>{description}</Copy>
      </Figure.Caption>
    </Figure>
  </ItemContainer>
);

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  //  image: PropTypes.object.isRequired,
};

export default Item;
