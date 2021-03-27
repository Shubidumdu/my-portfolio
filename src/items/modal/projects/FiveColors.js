import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import EnterButton from '../../../components/modal/EnterButton';
import ModalBody from '../../../components/modal/ModalBody';
import TagList from '../../../components/modal/TagList';

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

const imageSrcs = [...Array(4).keys()].map(
  (number) => require(`../../../images/projects/5color/${number}.png`).default,
);

const FiveColor = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <EnterButton href="https://d1ys81f4zruh8t.cloudfront.net/" />
      <ModalBody>
        - 옷 색깔 조합 추천 PWA <br />- ETRI API와 Colormind API를 활용
        <TagList tags={stacks} />
      </ModalBody>
    </div>
  );
};

export default FiveColor;
