import { Button, Image } from 'antd';
import React, { useRef } from 'react';
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

const ImageWrap = styled.div`
  cursor: pointer;
  transition: 0.3s;
  :hover {
    filter: brightness(1.1);
  }
`;

const ModalCarousel = ({ children }) => {
  return (
    <CarouselWrap>
      <Carousel {...settings}>{children}</Carousel>
    </CarouselWrap>
  );
};

export default ModalCarousel;
