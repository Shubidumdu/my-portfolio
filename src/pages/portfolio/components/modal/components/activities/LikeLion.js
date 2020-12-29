import React from 'react';
import { ModalBody } from '../../Modal';
import ModalCarousel from '../../ModalCarousel';

const images = [...Array(6).keys()].map(
  (number) =>
    require(`../../../../resources/images/activities/likelion/${number}.jpg`)
      .default,
);

const LikeLion = ({}) => {
  return (
    <div>
      <ModalCarousel images={images} />
      <ModalBody>
        전국 연합 웹 개발 동아리 '멋쟁이 사자처럼' 6기로 활동하였습니다.
      </ModalBody>
    </div>
  );
};

export default LikeLion;
