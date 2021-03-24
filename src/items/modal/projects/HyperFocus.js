import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import EnterButton from '../../../components/modal/EnterButton';
import TagList from '../../../components/modal/TagList';

const stacks = [
  'ExpressJS',
  'Node.js',
  'ejs',
  'HTML',
  'CSS',
  'Javascript',
  'Heroku',
];

const imageSrcs = [...Array(4).keys()].map(
  (number) =>
    require(`../../../images/projects/hyperfocus/${number}.png`).default,
);

const HyperFocus = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <EnterButton href="https://hyper-focus-time.herokuapp.com/" />
      <div>
        개인적으로 이용할 목적으로 반복 집중 / 휴식 웹 타이머
        &quot;절대집중시간&quot;을 개발했습니다. 라이브러리의 사용을
        최소화하고자 했습니다.
        <TagList tags={stacks} />
      </div>
    </div>
  );
};

export default HyperFocus;
