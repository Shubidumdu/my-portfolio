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
        - 이용자의 위치를 기반으로 근처의 쉐어하우스들을 카드 리스트 형태로 제공
        <br />
        - 카카오 지도 API를 활용한 위치 데이터 핸들링
        <TagList tags={stacks} />
      </ModalBody>
    </div>
  );
};

export default MingleTown;
