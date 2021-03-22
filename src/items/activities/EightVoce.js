import React from 'react';
import { ModalBody } from '../../Modal';
import ModalCarousel from '../../ModalCarousel';

const images = [...Array(3).keys()].map(
  (number) =>
    require(`../../../../resources/images/activities/8voce/${number}.jpg`)
      .default,
);

const EightVoce = ({}) => {
  return (
    <div>
      <ModalCarousel images={images} />
      <ModalBody>버스킹 밴드 팀 '8voce'의 베이시스트로 활동했습니다.</ModalBody>
    </div>
  );
};

export default EightVoce;
