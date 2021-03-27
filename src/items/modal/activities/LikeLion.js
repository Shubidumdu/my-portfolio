import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import ModalBody from '../../../components/modal/ModalBody';

const imageSrcs = [...Array(6).keys()].map(
  (number) =>
    require(`../../../images/activities/likelion/${number}.jpg`).default,
);

const LikeLion = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <ModalBody>
        - 웹 개발 입문
        <br />
        - HTML / CSS / JS / Ruby on Rails
        <br />
        - 몇 차례 해커톤 경험
        <br />
      </ModalBody>
    </div>
  );
};

export default LikeLion;
