import React, { useRef } from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';
import Card from './Card';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';
import Buttons from './Buttons';

const StyledCarousel = styled(Carousel)`
  .slick-list {
    transition: 0.3s;
  }
`;

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  draggable: false,
  swipe: false,
  swipeToSlide: false,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: 0,
  speed: 500,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        centerPadding: 0,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerPadding: 0,
      },
    },
  ],
};

const ContentCarousel = () => {
  const slick = useRef();
  const onBack = () => {
    slick.current.slickPrev();
  };
  const onNext = () => {
    slick.current.slickNext();
  };

  return (
    <>
      <StyledCarousel ref={slick} {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </StyledCarousel>
      <Buttons onBack={onBack} onNext={onNext} />
    </>
  );
};

export default ContentCarousel;
