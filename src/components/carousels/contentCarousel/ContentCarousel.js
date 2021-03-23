import React from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';
import CarouselButtons from './CarouselButtons';

const StyledCarousel = styled(Carousel)`
  .slick-list {
    transition: 0.3s;
  }
`;

const ArrowWrap = styled.div`
  display: ${({ noArrow }) => (noArrow ? 'none' : 'block')};
  @media (max-width: 480px) {
    display: block;
  }
`;

const ContentCarousel = ({
  children,
  noArrow = false,
  slick,
  onPrev,
  onNext,
  ...rest
}) => {
  return (
    <div>
      <StyledCarousel ref={slick} {...rest}>
        {children}
      </StyledCarousel>
      <ArrowWrap noArrow={noArrow}>
        <CarouselButtons onPrev={onPrev} onNext={onNext} />
      </ArrowWrap>
    </div>
  );
};

export default ContentCarousel;
