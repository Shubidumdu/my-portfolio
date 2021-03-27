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
      <EnterButton href="https://hyper-focus-time.herokuapp.com/" />
      <ModalBody>
        - 반복 집중 / 휴식 웹 타이머
        <br />
        - VanillaJS 기반으로 개발
        <TagList tags={stacks} />
      </ModalBody>
    </div>
  );
};

export default HyperFocus;
