import React from 'react';
import ContentCarousel from '../../contentCarousel/ContentCarousel';
import { Card as Container } from '../VerticalCarousel';
import Card from '../../contentCarousel/Card';

const cards = [
  // {
  //   title: '롯데뮤지엄',
  //   desc: '애드캡슐소프트 인턴 과제',
  //   image: 'lottemuseum.png',
  //   sub: '2019',
  // },
  {
    title: '카피캣츠',
    desc: 'SNS형 성대모사 플랫폼',
    image: 'copycats.png',
    sub: '2019',
  },
  {
    title: '인간안면보고서',
    desc: '얼굴이미지 분석 웹 앱',
    image: 'facereport.png',
    sub: '2020',
  },
  {
    title: '절대집중시간',
    desc: '반복 집중/휴식 웹 타이머',
    image: 'hyperfocus.png',
    sub: '2020',
  },
  {
    title: '밍글타운',
    desc: '쉐어하우스 플랫폼',
    image: 'mingletown.png',
    sub: '2020',
  },
  {
    title: '오깔라',
    desc: '옷 색깔 조합 추천 웹 앱',
    image: '5color.png',
    sub: '2020',
  },
];

const Projects = () => {
  return (
    <Container>
      <ContentCarousel>
        {cards.map(({ image, ...rest }) => {
          const img = require(`../../../resources/images/projects/logos/${image}`)
            .default;
          return <Card key={image} image={img} {...rest} />;
        })}
      </ContentCarousel>
    </Container>
  );
};

export default Projects;
