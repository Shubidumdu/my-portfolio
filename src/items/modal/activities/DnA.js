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
        - 국민대 빅데이터경영통계학회 D&A <br />- ML Session에 참여하여 활동
        <br />- 머신러닝 교육 및 스터디 진행
        <br />- 데이터 예측 컴피티션
      </ModalBody>
    </div>
  );
};

export default DnA;
