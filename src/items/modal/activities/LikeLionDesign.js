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
        멋쟁이 사자처럼 디자인(크리에이티브) 1기로 활동하였습니다. Adobe XD를
        위주로 포토샵, 일러스트레이터, 프리미어와 같은 디자인 툴과 관련된 교육을
        들을 수 있었습니다.
      </ModalBody>
    </div>
  );
};

export default LikeLionDesign;
