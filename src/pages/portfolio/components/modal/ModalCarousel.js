import React, { useRef, useState } from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';

const DotButton = styled.button``;

const Dots = styled.div``;

const Dot = ({ onClick, active, children }) => {
  return (
    <DotButton active={active} onClick={onClick}>
      {children}
    </DotButton>
  );
};

const CarouselWrap = styled.div``;

const settings = {
  adaptiveHeight: true,
  // draggable: false,
  // touchMove: false,
  // swipe: false,
  // swipeToSlide: false,
  arrows: false,
  dots: false,
};

const ModalCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const slider = useRef();
  const beforeChange = (_, idx) => {
    setIndex(idx);
  };

  return (
    <CarouselWrap>
      <Carousel beforeChange={beforeChange} ref={slider} {...settings}>
        {images.map((image, idx) => (
          <img alt={image} key={idx} src={image} />
        ))}
      </Carousel>
      <Dots>
        {images.map((image, idx) => {
          const onClick = (e) => {
            e.preventDefault();
            slider.current.slickGoTo(idx);
          };
          return (
            <Dot key={idx} active={idx === index} onClick={onClick}>
              {idx}
            </Dot>
          );
        })}
      </Dots>
    </CarouselWrap>
  );
};

export default ModalCarousel;
