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
        웹 에이전시 기업인 애드캡슐소프트에서 두 달 동안 UI 개발 부서의 인턴으로
        활동했습니다. 주요 업무는 웹 퍼블리싱이었으며, 롯데 뮤지엄의 웹 디자인을
        구현해보는 과제를 맡았습니다.
      </ModalBody>
    </div>
  );
};

export default Adcapsule;
