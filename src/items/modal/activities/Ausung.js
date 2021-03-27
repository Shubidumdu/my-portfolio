import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import ModalBody from '../../../components/modal/ModalBody';

const imageSrcs = [...Array(3).keys()].map(
  (number) =>
    require(`../../../images/activities/ausung/${number}.jpg`).default,
);

const Ausung = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <ModalBody>
        - 국민대학교 밴드동아리 아우성에서 베이시스트 활동 <br /> - 2015년
        연출부장 및 총무
      </ModalBody>
    </div>
  );
};

export default Ausung;
