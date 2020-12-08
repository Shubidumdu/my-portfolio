import React from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';
import { useVerticalSlickContext } from '../../SlickProvider';

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

const VerticalCarousel = ({ children }) => {
  const { ref, setIndex, isStuck } = useVerticalSlickContext();
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
      {children}
    </StyledCarousel>
  );
};

export default VerticalCarousel;
