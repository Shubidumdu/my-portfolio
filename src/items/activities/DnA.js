import React from 'react';
import { ModalBody } from '../../Modal';
import ModalCarousel from '../../ModalCarousel';

const images = ['0.jpg', '1.png'].map(
  (file) =>
    require(`../../../../resources/images/activities/dna/${file}`).default,
);

const DnA = ({}) => {
  return (
    <div>
      <ModalCarousel images={images} />
      <ModalBody>
        국민대학교 빅데이터경영통계학회 D&A ML Session에 참여, 활동했습니다.
        머신러닝 교육과 함께 학회 자체적인 컴티피션을 경험했습니다.
      </ModalBody>
    </div>
  );
};

export default DnA;
