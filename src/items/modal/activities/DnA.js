import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import ModalBody from '../../../components/modal/ModalBody';

const imageSrcs = ['0.jpg', '1.png'].map(
  (file) => require(`../../../images/activities/dna/${file}`).default,
);

const DnA = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <ModalBody>
        국민대학교 빅데이터경영통계학회 D&A ML Session에 참여, 활동했습니다.
        머신러닝 교육과 함께 학회 자체적인 컴티피션을 경험했습니다.
      </ModalBody>
    </div>
  );
};

export default DnA;
