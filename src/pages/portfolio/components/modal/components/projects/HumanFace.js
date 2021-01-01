import React from 'react';
import { ModalBody, Tag, TagWrap } from '../../Modal';
import ModalCarousel from '../../ModalCarousel';

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

const images = [...Array(3).keys()].map(
  (number) =>
    require(`../../../../resources/images/projects/humanface/${number}.png`)
      .default,
);

const HumanFace = () => {
  return (
    <div>
      <ModalCarousel images={images} />
      <ModalBody>
        네이버 Clova API를 이용한 얼굴 이미지 분석 웹 애플리케이션
        "인간안면보고서"를 개발했습니다.
        <TagWrap>
          {stacks.map((stack) => (
            <Tag key={stack}>{stack}</Tag>
          ))}
        </TagWrap>
      </ModalBody>
    </div>
  );
};

export default HumanFace;
