import React from 'react';
import { ModalBody, Tag, TagWrap } from '../../Modal';
import ModalCarousel from '../../ModalCarousel';

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

const images = [...Array(3).keys()].map(
  (number) =>
    require(`../../../../resources/images/projects/copycats/${number}.png`)
      .default,
);

const CopyCats = () => {
  return (
    <div>
      <ModalCarousel images={images} />
      <ModalBody>
        SNS형 성대모사 플랫폼을 만들어 보고자했던 프로젝트 카피캣츠입니다.
        여러모로 부족한 점이 많지만 처음으로 혼자서 시행착오도 많이 겪으며
        꾸역꾸역 만들어냈다는 점에서 애착이 가는 프로젝트입니다.
        <TagWrap>
          {stacks.map((stack) => (
            <Tag key={stack}>{stack}</Tag>
          ))}
        </TagWrap>
      </ModalBody>
    </div>
  );
};

export default CopyCats;
