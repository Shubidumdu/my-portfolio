import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';

const imageSrcs = ['0.png', '1.jpg'].map(
  (file) => require(`../../../images/careers/themong/${file}`).default,
);

const TheMong = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <div>
        인테리어 및 공간 임대 사업을 메인으로 하고 있는 기업 더몽에서 풀스택
        개발자로 일하는 중 입니다. 프로젝트 개발 및 유지보수를 담당하고
        있습니다.
      </div>
    </div>
  );
};

export default TheMong;
