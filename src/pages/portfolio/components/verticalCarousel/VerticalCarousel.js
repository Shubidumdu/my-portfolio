import React from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';
import { useVerticalSlickContext } from '../../SlickProvider';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { Button } from 'antd';

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

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;

  @media (max-width: 550px) {
    padding: 0;
  }
`;

const CarouselWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const UpArrow = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.main};

  @media (max-width: 700px) {
    top: 0;
  }
`;

const DownArrow = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.main};

  @media (max-width: 700px) {
    bottom: 0;
  }
`;

const VerticalCarousel = ({ children }) => {
  const { ref: slick, index, setIndex, isStuck } = useVerticalSlickContext();
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

  const onPrev = () => {
    slick.current.slickPrev();
  };

  const onNext = () => {
    slick.current.slickNext();
  };

  return (
    <CarouselWrap>
      <StyledCarousel
        ref={slick}
        beforeChange={beforeChange}
        {...settings}
        {...stuckSettings}
      >
        {children}
      </StyledCarousel>
      {index !== 0 ? (
        <UpArrow>
          <Button onClick={onPrev} type="link">
            <HiChevronUp size="2rem" />
          </Button>
        </UpArrow>
      ) : null}
      {index !== 5 ? (
        <DownArrow>
          <Button onClick={onNext} type="link">
            <HiChevronDown size="2rem" />
          </Button>
        </DownArrow>
      ) : null}
    </CarouselWrap>
  );
};

export default VerticalCarousel;
