import React from 'react';
import styled from 'styled-components';
import ModalCarousel from '../../ModalCarousel';
import { ModalBody } from '../../Modal';

const images = [...Array(4).keys()].map(
  (number) =>
    require(`../../../../resources/images/careers/adcapsule/${number}.png`)
      .default,
);

console.log(images);

const Adcapsule = ({}) => {
  return (
    <div>
      <ModalCarousel images={images} />
      <ModalBody>애드캡슐소프트</ModalBody>
    </div>
  );
};

export default Adcapsule;
