import React from 'react';
import { EnterButton, ModalBody, Tag, TagWrap } from '../../Modal';
import ModalCarousel from '../../ModalCarousel';

const stacks = [
  'ExpressJS',
  'Node.js',
  'ejs',
  'HTML',
  'CSS',
  'Javascript',
  'Heroku',
];

const images = [...Array(4).keys()].map(
  (number) =>
    require(`../../../../resources/images/projects/hyperfocus/${number}.png`)
      .default,
);

const HyperFocus = () => {
  return (
    <div>
      <ModalCarousel images={images} />
      <EnterButton href="https://hyper-focus-time.herokuapp.com/" />
      <ModalBody>
        개인적으로 이용할 목적으로 반복 집중 / 휴식 웹 타이머 "절대집중시간"을
        개발했습니다. 라이브러리의 사용을 최소화하고자 했습니다.
        <TagWrap>
          {stacks.map((stack) => (
            <Tag key={stack}>{stack}</Tag>
          ))}
        </TagWrap>
      </ModalBody>
    </div>
  );
};

export default HyperFocus;
