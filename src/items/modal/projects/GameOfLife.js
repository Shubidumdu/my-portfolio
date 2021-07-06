import React from 'react';
import styled from 'styled-components';
import exampleMov from '../../../images/projects/gameoflife/example.mov';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import EnterButton from '../../../components/modal/EnterButton';
import ModalBody from '../../../components/modal/ModalBody';
import TagList from '../../../components/modal/TagList';

const Video = styled.video`
  width: 100%;
`;

const stacks = [
  'JavaScript',
  'Web Assembly',
  'Rust',
  'Three.js',
  'Webpack',
  'Github Pages',
];

const FiveColor = () => {
  return (
    <div>
      <Video src={exampleMov} controls />
      <EnterButton href="https://shubidumdu.github.io/game-of-life-client/" />
      <ModalBody>
        - 개인적인 학습 목적으로 진행한 토이 프로젝트 <br />
        - "콘웨이의 생명게임"을 Rust 기반의 Web Assembly로 구현 <br />
        - Three.js를 통한 canvas 3D 그래픽 작업
        <TagList tags={stacks} />
      </ModalBody>
    </div>
  );
};

export default FiveColor;
