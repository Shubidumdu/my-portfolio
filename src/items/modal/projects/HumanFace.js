import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import EnterButton from '../../../components/modal/EnterButton';
import TagList from '../../../components/modal/TagList';

const stacks = [
  'TypeScript',
  'React',
  'Node.js',
  'Redux',
  'Redux-thunk',
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
      <div>
        네이버 Clova API를 이용한 얼굴 이미지 분석 웹 애플리케이션
        인간안면보고서를 개발했습니다.
        <TagList tags={stacks} />
      </div>
    </div>
  );
};

export default HumanFace;
