import React, { useRef } from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';
import Card from './Card';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';

const StyledCarousel = styled(Carousel)`
  .slick-slide {
    border: none;
    outline: none;
  }
`;

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  draggable: false,
  swipeToSlide: false,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
};

const ContentCarousel = () => {
  const slick = useRef();

  return (
    <StyledCarousel ref={slick} {...settings}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledCarousel>
  );
};

export default ContentCarousel;
