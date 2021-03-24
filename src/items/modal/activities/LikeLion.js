import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';

const imageSrcs = [...Array(6).keys()].map(
  (number) =>
    require(`../../../images/activities/likelion/${number}.jpg`).default,
);

const LikeLion = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <div>
        전국 연합 웹 개발 동아리 &quot;멋쟁이 사자처럼&quot; 6기로
        활동하였습니다. 웹 개발에 처음으로 눈 뜰 수 있었던 소중한 경험입니다.
      </div>
    </div>
  );
};

export default LikeLion;
