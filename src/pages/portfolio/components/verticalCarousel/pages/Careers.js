import React from 'react';
import ContentCarousel from '../../contentCarousel/ContentCarousel';
import { Card as Container } from '../VerticalCarousel';
import Card from '../../contentCarousel/Card';

const cards = [
  {
    title: '애드캡슐소프트',
    desc: '웹 퍼블리싱 인턴',
    image: 'adcapsule.png',
    sub: '2018.06 ~ 2018.08',
  },
  {
    title: '더몽',
    desc: '풀스택 개발',
    image: 'themong.png',
    sub: '2020.05 ~ ',
  },
];

const Careers = () => {
  return (
    <Container>
      <ContentCarousel noArrow>
        {cards.map(({ image, ...rest }) => {
          const img = require(`../../../resources/images/careers/logos/${image}`)
            .default;
          return <Card key={image} image={img} {...rest} />;
        })}
      </ContentCarousel>
    </Container>
  );
};

export default Careers;
