import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import EnterButton from '../../../components/modal/EnterButton';
import ModalBody from '../../../components/modal/ModalBody';
import TagList from '../../../components/modal/TagList';

const stacks = [
  'TypeScript',
  'React',
  'Node.js',
  'Redux',
  'Redux-Thunk',
  'Styled-components',
  'Express.js',
  'Naver Clova API',
  'Heroku',
];

const imageSrcs = [...Array(3).keys()].map(
  (number) =>
    require(`../../../images/projects/humanface/${number}.png`).default,
);

const HumanFace = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <EnterButton href="https://human-face-report.herokuapp.com/" />
      <ModalBody>
        - 얼굴 이미지 분석 웹 앱 <br />- Naver Clova API를 활용
        <TagList tags={stacks} />
      </ModalBody>
    </div>
  );
};

export default HumanFace;
