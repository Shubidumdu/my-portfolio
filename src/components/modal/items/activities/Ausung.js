import React from 'react';
import { ModalBody } from '../../Modal';
import ModalCarousel from '../../ModalCarousel';

const images = [...Array(3).keys()].map(
  (number) =>
    require(`../../../../resources/images/activities/ausung/${number}.jpg`)
      .default,
);

const Ausung = ({}) => {
  return (
    <div>
      <ModalCarousel images={images} />
      <ModalBody>
        국민대학교 밴드동아리 아우성에서 베이시스트로 활동했습니다. 2015년에는
        연출부장 및 총무를 겸했습니다.
      </ModalBody>
    </div>
  );
};

export default Ausung;
