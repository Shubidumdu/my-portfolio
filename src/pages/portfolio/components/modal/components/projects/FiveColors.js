import React from 'react';
import { ModalBody, Tag, TagWrap } from '../../Modal';
import ModalCarousel from '../../ModalCarousel';

const stacks = [
  'React',
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