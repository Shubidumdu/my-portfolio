import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import ModalBody from '../../../components/modal/ModalBody';

const imageSrcs = [...Array(2).keys()].map(
  (number) =>
    require(`../../../images/activities/likelion-design/${number}.jpg`).default,
);

const LikeLionDesign = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <ModalBody>
        - 멋쟁이 사자처럼 크리에이티브 1기
        <br />
        - Adobe 디자인 툴 교육 동아리
        <br />
        - Adobe XD를 위주로 각종 Adobe 툴 교육 수료
        <br />- 국민대/숙명여대/성균관대 디자인 세미나 개최
      </ModalBody>
    </div>
  );
};

export default LikeLionDesign;
