import React from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';

const CarouselWrap = styled.div`
  .slick-list {
    transition: 0.3s;
  }

  & ul {
    list-style-type: none;
    display: flex !important;
    justify-content: center;
    padding: 0;
  }
`;

const ModalCarousel = ({ children, ...rest }) => {
  return (
    <CarouselWrap>
      <Carousel {...rest}>{children}</Carousel>
    </CarouselWrap>
  );
};

export default ModalCarousel;
