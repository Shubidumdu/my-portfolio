import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import EnterButton from '../../../components/modal/EnterButton';
import ModalBody from '../../../components/modal/ModalBody';
import TagList from '../../../components/modal/TagList';

const stacks = ['HTML', 'CSS', 'Javascript'];

const imageSrcs = [...Array(4).keys()].map(
  (number) =>
    require(`../../../images/projects/hyperfocus/${number}.png`).default,
);

const HyperFocus = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <EnterButton href="https://shubidumdu.github.io/hyper-focus-time/" />
      <ModalBody>
        - 추가적인 라이브러리 및 번들러 없이 VanillaJS만 사용 <br />
        - Custom Element + Shadow DOM를 통한 웹 컴포넌트 단위 개발
        <TagList tags={stacks} />
      </ModalBody>
    </div>
  );
};

export default HyperFocus;
