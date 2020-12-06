import React, { useContext } from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';
import { SlickContext } from '../..';
import ContentCarousel from '../contentCarousel/ContentCarousel';

const settings = {
  dots: false,
  accessibility: false,
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
    outline: none;
  }
`;

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

export const Card = styled.div`
  width: 100%;
  position: relative;
  border: none;
  color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.white : theme.colors.black};
  // 64px => Header's height
  height: calc(100vh - 64px);
  height: calc(var(--vh, 1vh) * 100 - 64px);
  background: ${({ theme }) => theme.colors.base};
  transition: 0.3s;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const VerticalCarousel = () => {
  const { ref, setIndex, isStuck } = useContext(SlickContext);
  const beforeChange = (_, idx) => {
    setIndex(idx);
  };
  const stuckSettings = isStuck
    ? {
        draggable: false,
        verticalSwiping: false,
        swipeToSlide: false,
        touchMove: false,
      }
    : {};

  return (
    <StyledCarousel
      ref={ref}
      beforeChange={beforeChange}
      {...settings}
      {...stuckSettings}
    >
      <Card>
        <ContentCarousel />
      </Card>
      <Card>안녕하세요2</Card>
      <Card>안녕하세요3</Card>
      <Card>안녕하세요4</Card>
      <Card>안녕하세요5</Card>
      <Card>안녕하세요6</Card>
    </StyledCarousel>
  );
};

export default VerticalCarousel;
