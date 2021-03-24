import React from 'react';
import VerticalCarouselCard from '../../components/carousels/verticalCarousel/VerticalCarouselCard';
import ActivitiesCarousel from '../contentCarousel/ActivitiesCarousel';

const ActivitiesSection = () => {
  return (
    <VerticalCarouselCard>
      <ActivitiesCarousel />
    </VerticalCarouselCard>
  );
};

export default ActivitiesSection;
