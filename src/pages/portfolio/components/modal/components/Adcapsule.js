import React from 'react';
import styled from 'styled-components';
import ModalCarousel from '../ModalCarousel';
import src from '../../../resources/images/careers/logos/adcapsule.png';

const images = [''];

const Adcapsule = ({}) => {
  return (
    <div>
      <ModalCarousel images={[src]} />
    </div>
  );
};

export default Adcapsule;
