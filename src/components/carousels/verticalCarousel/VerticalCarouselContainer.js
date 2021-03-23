import React from 'react';
import { useVerticalCarouselContext } from '../../../providers/SlickProvider';
import VerticalCarousel from './VerticalCarousel';

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

const VerticalCarouselContainer = ({ children }) => {
  const { ref: slick, index, setIndex, isStuck } = useVerticalCarouselContext();

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

  const props = {
    slick,
    beforeChange,
    onPrev,
    onNext,
    index,
    ...settings,
    ...stuckSettings,
  };

  return <VerticalCarousel {...props}>{children}</VerticalCarousel>;
};

export default VerticalCarouselContainer;
