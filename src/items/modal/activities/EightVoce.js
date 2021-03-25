import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import ModalBody from '../../../components/modal/ModalBody';

const imageSrcs = [...Array(3).keys()].map(
  (number) => require(`../../../images/activities/8voce/${number}.jpg`).default,
);

const EightVoce = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <ModalBody>버스킹 밴드 팀 8voce의 베이시스트로 활동했습니다.</ModalBody>
    </div>
  );
};

export default EightVoce;
