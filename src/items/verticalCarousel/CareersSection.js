import React from 'react';
import { Card as Container } from '../../components/carousels/verticalCarousel/VerticalCarousel';
import CareersCarousel from '../contentCarousel/CareersCarousel';

const CareersSection = () => {
  return (
    <Container>
      <CareersCarousel />
    </Container>
  );
};

export default CareersSection;
