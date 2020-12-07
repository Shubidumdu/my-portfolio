import { Button } from 'antd';
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

const PageButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  transition: 0.3s;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

const settings = {
  adaptiveHeight: true,
  arrows: false,
  dots: true,
  dotsClass: 'dot-buttons',
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (origin) => {
    const dots = origin.map(
      ({
        props: {
          className,
          children: {
            props: { onClick },
          },
        },
      }) => ({
        className,
        onClick,
      }),
    );

    return (
      <Dots>
        {dots.map(({ className, onClick }, index) => (
          <PageButton
            size="small"
            type={className === 'slick-active' ? 'primary' : 'default'}
            key={index}
            className={className}
            onClick={onClick}
          >
            {index + 1}
          </PageButton>
        ))}
      </Dots>
    );
  },
};

const ModalCarousel = ({ images }) => {
  const slider = useRef();

  return (
    <CarouselWrap>
      <Carousel ref={slider} {...settings}>
        {images.map((image, idx) => (
          <img alt={image} key={idx} src={image} />
        ))}
      </Carousel>
    </CarouselWrap>
  );
};

export default ModalCarousel;
