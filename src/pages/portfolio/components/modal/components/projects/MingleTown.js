import React from 'react';
import { EnterButton, ModalBody, Tag, TagWrap } from '../../Modal';
import ModalCarousel from '../../ModalCarousel';

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
  'passport.js',
  'AWS S3',
  'AWS CloudFront',
  'AWS Elastic Beanstalk',
];

const images = [...Array(3).keys()].map(
  (number) =>
    require(`../../../../resources/images/projects/mingletown/${number}.png`)
      .default,
);

const MingleTown = () => {
  return (
    <div>
      <ModalCarousel images={images} />
      <EnterButton href="https://www.mingletown.co.kr" />
      <ModalBody>
        (주)더몽의 쉐어하우스 중개 플랫폼 "밍글타운"을 개발했습니다.
        <TagWrap>
          {stacks.map((stack) => (
            <Tag key={stack}>{stack}</Tag>
          ))}
        </TagWrap>
      </ModalBody>
    </div>
  );
};

export default MingleTown;
