import React from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { Button } from 'antd';

const StyledCarousel = styled(Carousel)`
  .slick-slide {
    border: none;
    outline: none;
  }
`;

const resizeHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
window.addEventListener('resize', resizeHeight);

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

const CarouselWrap = styled.div`
  position: relative;
  width: 100%;
  padding-top: 64px;
  height: 100%;
`;

const UpArrow = styled.div`
  position: absolute;
  top: calc(0.5rem + 64px);
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.main};

  @media (max-width: 700px) {
    top: 64px;
  }
`;

const DownArrow = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.main};

  @media (max-width: 700px) {
    bottom: 0;
  }
`;

const VerticalCarousel = ({
  children,
  slick,
  beforeChange,
  onPrev,
  onNext,
  index,
  ...rest
}) => {
  return (
    <CarouselWrap>
      <StyledCarousel ref={slick} beforeChange={beforeChange} {...rest}>
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
