import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import ModalBody from '../../../components/modal/ModalBody';

const imageSrcs = ['0.png', '1.jpg'].map(
  (file) => require(`../../../images/careers/themong/${file}`).default,
);

const TheMong = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <ModalBody>
        - 프로젝트 개발 및 유지 및 보수 <br />
        - 쉐어하우스 플랫폼 &apos;밍글타운&apos; 개발 <br />
        - 자사 웹사이트 리뉴얼 <br />- 자체 서비스 예약 모듈 개발
      </ModalBody>
    </div>
  );
};

export default TheMong;
