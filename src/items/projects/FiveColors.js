import React from 'react';
import { EnterButton, ModalBody, Tag, TagWrap } from '../../Modal';
import ModalCarousel from '../../ModalCarousel';

const stacks = [
  'JavaScript',
  'React',
  'Node.js',
  'React-Router',
  'Redux',
  'Redux-Thunk',
  'Styled-components',
  'Bulma',
  'AWS S3',
  'AWS CloudFront',
  'AWS API GateWay',
  'AWS Lambda',
];

const images = [...Array(4).keys()].map(
  (number) =>
    require(`../../../../resources/images/projects/5color/${number}.png`)
      .default,
);

const FiveColor = () => {
  return (
    <div>
      <ModalCarousel images={images} />
      <EnterButton href="https://d1ys81f4zruh8t.cloudfront.net/" />
      <ModalBody>
        옷 색깔 조합 추천 PWA '오깔라'를 개발했습니다.
        <TagWrap>
          {stacks.map((stack) => (
            <Tag key={stack}>{stack}</Tag>
          ))}
        </TagWrap>
      </ModalBody>
    </div>
  );
};

export default FiveColor;
