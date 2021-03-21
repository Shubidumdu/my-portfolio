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

const PageButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  transition: 0.3s;
  border-radius: 2px;

  background: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.white : theme.colors.sub};
  border: 1px solid
    ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.sub : theme.colors.white};
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.black : theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.main};
    border: 1px solid ${({ theme }) => theme.colors.main};
    background: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.white : theme.colors.sub};
  }

  &.slick-active {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.main};
    border: 1px solid ${({ theme }) => theme.colors.main};
  }
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
          <ImageWrap key={image}>
            <Image alt={image} key={idx} src={image} />
          </ImageWrap>
        ))}
      </Carousel>
    </CarouselWrap>
  );
};

export default ModalCarousel;
