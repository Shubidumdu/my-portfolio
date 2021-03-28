import React from 'react';
import TagList from '../../../components/modal/TagList';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import EnterButton from '../../../components/modal/EnterButton';
import ModalBody from '../../../components/modal/ModalBody';

const stacks = [
  'TypeScript',
  'React',
  'React-Router',
  'Node.js',
  'Redux',
  'Redux-thunk',
  'Styled-components',
  'Express.js',
  'Ant Design',
  'Jest',
  'Testing-library/React',
  'postgreSQL',
  'AWS S3',
  'AWS CloudFront',
  'AWS Elastic Beanstalk',
];

const imageSrcs = [...Array(3).keys()].map(
  (number) =>
    require(`../../../images/projects/mingletown/${number}.png`).default,
);

const MingleTown = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <EnterButton href="https://www.mingletown.co.kr" />
      <ModalBody>
        - 더몽의 쉐어하우스 플랫폼
        <TagList tags={stacks} />
      </ModalBody>
    </div>
  );
};

export default MingleTown;
