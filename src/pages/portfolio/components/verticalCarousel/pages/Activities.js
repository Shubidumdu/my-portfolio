import React from 'react';
import ContentCarousel from '../../contentCarousel/ContentCarousel';
import { Card as Container } from '../VerticalCarousel';
import Card from '../../contentCarousel/Card';

const cards = [
  {
    title: '아우성',
    desc: '국민대학교 밴드 동아리',
    image: 'ausung.jpg',
    period: '2014.12 ~ 2020.02',
  },
  {
    title: '멋쟁이 사자처럼',
    desc: '웹 프로그래밍 연합 동아리',
    image: 'likelion.png',
    period: '2018.03 ~ 2018.12',
  },
  {
    title: '8voce',
    desc: '버스킹 밴드',
    image: '8voce.jpg',
    period: '2018.04 ~ 2019.08',
  },
  {
    title: 'D&A ML Session',
    desc: '국민대학교 빅데이터경영통계 학회',
    image: 'dna.png',
    period: '2018.08 ~ 2018.12',
  },
  {
    title: '멋쟁이 사자처럼 디자인',
    desc: '디자인 교육 연합 동아리',
    image: 'likelion_design.png',
    period: '2019.07 ~ 2019.12',
  },
];

const Activities = () => {
  return (
    <Container>
      <ContentCarousel>
        {cards.map(({ image, ...rest }) => {
          const img = require(`../../../resources/images/activities/logos/${image}`)
            .default;
          return <Card key={image} image={img} {...rest} />;
        })}
      </ContentCarousel>
    </Container>
  );
};

export default Activities;
