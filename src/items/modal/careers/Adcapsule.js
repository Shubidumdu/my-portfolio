import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import ModalBody from '../../../components/modal/ModalBody';

const imageSrcs = [...Array(3).keys()].map(
  (number) =>
    require(`../../../images/careers/adcapsule/${number}.png`).default,
);

const Adcapsule = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <ModalBody>
        - UI 개발 부서 인턴 <br />- 웹 퍼블리싱 작업 및 코드 리뷰
      </ModalBody>
    </div>
  );
};

export default Adcapsule;
