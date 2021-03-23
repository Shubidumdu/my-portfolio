import React from 'react';
import ContentCarousel from './ContentCarousel';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  draggable: false,
  swipe: false,
  swipeToSlide: false,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: 0,
  speed: 500,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        centerPadding: 0,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerPadding: 0,
      },
    },
  ],
};

const ContentCarouselContainer = ({ children, ...rest }) => {
  const slick = useRef();
  const onPrev = () => {
    slick.current.slickPrev();
  };
  const onNext = () => {
    slick.current.slickNext();
  };
  const props = {
    slick,
    onPrev,
    onNext,
    ...settings,
    ...rest,
  };

  return <ContentCarousel {...props}>{children}</ContentCarousel>;
};

export default ContentCarouselContainer;
