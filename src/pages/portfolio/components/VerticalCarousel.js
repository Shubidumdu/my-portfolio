import React, { useEffect, useRef } from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  draggable: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  vertical: true,
  verticalSwiping: true,
  swipeToSlide: true,
};

const StyledCarousel = styled(Carousel)`
  .slick-slide {
    border: none;
  }
`;

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const Card = styled.div`
  width: 100%;
  // 64px => Header's height
  height: calc(100vh - 64px);
  height: calc(var(--vh, 1vh) * 100 - 64px);
  background: #fff;
  cursor: grab;
`;

const VerticalCarousel = () => {
  const slick = useRef(null);
  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      e.preventDefault();
      e.deltaY > 0 ? slick.current.slickNext() : slick.current.slickPrev();
    });
  }, []);

  return (
    <StyledCarousel ref={slick} {...settings}>
      <Card>안녕하세요1</Card>
      <Card>안녕하세요2</Card>
      <Card>안녕하세요3</Card>
    </StyledCarousel>
  );
};

export default VerticalCarousel;
