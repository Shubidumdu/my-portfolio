import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';

const imageSrcs = [...Array(3).keys()].map(
  (number) =>
    require(`../../../images/activities/ausung/${number}.jpg`).default,
);

const Ausung = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <div>
        국민대학교 밴드동아리 아우성에서 베이시스트로 활동했습니다. 2015년에는
        연출부장 및 총무를 겸했습니다.
      </div>
    </div>
  );
};

export default Ausung;
