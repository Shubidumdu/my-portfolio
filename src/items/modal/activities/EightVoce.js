import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';

const imageSrcs = [...Array(3).keys()].map(
  (number) => require(`../../../images/activities/8voce/${number}.jpg`).default,
);

const EightVoce = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <div>버스킹 밴드 팀 8voce의 베이시스트로 활동했습니다.</div>
    </div>
  );
};

export default EightVoce;
