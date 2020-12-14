import React from 'react';
import ContentCarousel from '../../contentCarousel/ContentCarousel';
import { Card as Container } from '../VerticalCarousel';
import Card from '../../contentCarousel/Card';

const cards = [
  {
    title: '아우성',
    desc: '국민대학교 밴드 동아리',
    image: 'ausung.jpg',
  },
  {
    title: '멋쟁이 사자처럼 6기',
    desc: '웹 프로그래밍 연합 동아리',
    image: 'likelion.png',
  },
  {
    title: 'D&A ML Session',
    desc: '국민대학교 빅데이터경영통계 학회',
    image: 'dna.png',
  },
  {
    title: '8voce',
    desc: '밴드',
    image: '8voce.jpg',
  },
  {
    title: '멋쟁이 사자처럼 디자인 1기',
    desc: '디자인 교육 연합 동아리',
    image: 'likelion_design.png',
  },
];

const Activities = () => {
  return (
    <Container>
      <ContentCarousel>
        {cards.map(({ title, desc, image }) => {
          const img = require(`../../../resources/images/activities/logos/${image}`)
            .default;
          return <Card key={image} title={title} desc={desc} image={img} />;
        })}
      </ContentCarousel>
    </Container>
  );
};

export default Activities;
