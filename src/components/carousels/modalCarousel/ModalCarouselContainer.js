import React from 'react';
import ModalCarousel from './ModalCarousel';
import Paginations from './Paginations';

const settings = {
  adaptiveHeight: true,
  arrows: false,
  dots: true,
  dotsClass: 'dot-buttons',
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: function Dots(origin) {
    return <Paginations origin={origin} />;
  },
};

// 기존 inner
//
// images.map((image, idx) => (
//   <ImageWrap key={image}>
//     <Image alt={image} key={idx} src={image} />
//   </ImageWrap>
// ));

const ModalCarouselContainer = ({ children, ...rest }) => {
  return (
    <ModalCarousel {...settings} {...rest}>
      {children}
    </ModalCarousel>
  );
};

export default ModalCarouselContainer;
