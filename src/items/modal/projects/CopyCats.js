import React from 'react';
import ModalImageCarousel from '../../../components/carousels/modalCarousel/ModalImageCarousel';
import ModalBody from '../../../components/modal/ModalBody';
import TagList from '../../../components/modal/TagList';

const stacks = [
  'JavaScript',
  'React',
  'Node.js',
  'Apollo',
  'GraphQL',
  'SASS/SCSS',
  'Redux',
  'Kakao API',
  'Heroku',
];

const imageSrcs = [...Array(3).keys()].map(
  (number) =>
    require(`../../../images/projects/copycats/${number}.png`).default,
);

const CopyCats = () => {
  return (
    <div>
      <ModalImageCarousel imageSrcs={imageSrcs} />
      <ModalBody>
        - 성대모사 SNS 플랫폼 <br />- 불안정한 측면이 많아 배포 진행하지 않았음
        <TagList tags={stacks} />
      </ModalBody>
    </div>
  );
};

export default CopyCats;
