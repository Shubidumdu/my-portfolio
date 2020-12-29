import React, { useState } from 'react';
import ContentCarousel from '../../contentCarousel/ContentCarousel';
import { Card as Container } from '../VerticalCarousel';
import Card from '../../contentCarousel/Card';
import Modal from '../../modal/Modal';
import Ausung from '../../modal/components/activities/Ausung';
import LikeLion from '../../modal/components/activities/LikeLion';
import EightVoce from '../../modal/components/activities/EightVoce';

const cards = [
  {
    title: '아우성',
    desc: '국민대학교 밴드 동아리',
    image: 'ausung.jpg',
    sub: '2014.12 ~ 2020.02',
    ModalInfo: Ausung,
  },
  {
    title: '멋쟁이 사자처럼',
    desc: '웹 프로그래밍 연합 동아리',
    image: 'likelion.png',
    sub: '2018.03 ~ 2018.12',
    ModalInfo: LikeLion,
  },
  {
    title: '8voce',
    desc: '버스킹 밴드',
    image: '8voce.jpg',
    sub: '2018.04 ~ 2019.08',
    ModalInfo: EightVoce,
  },
  {
    title: 'D&A ML Session',
    desc: '국민대학교 빅데이터경영통계 학회',
    image: 'dna.png',
    sub: '2018.08 ~ 2018.12',
  },
  {
    title: '멋쟁이 사자처럼 디자인',
    desc: '디자인 교육 연합 동아리',
    image: 'likelion_design.png',
    sub: '2019.07 ~ 2019.12',
  },
];

const Activities = () => {
  const [index, setIndex] = useState(0);
  const [openModal, setModal] = useState(false);
  const onClick = (idx) => {
    setIndex(idx);
    setModal((open) => !open);
  };
  const ModalInfo = cards[index].ModalInfo;

  return (
    <Container>
      <ContentCarousel>
        {cards.map(({ image, ...rest }, idx) => {
          const img = require(`../../../resources/images/activities/logos/${image}`)
            .default;
          return (
            <Card
              onClick={() => onClick(idx)}
              key={image}
              image={img}
              {...rest}
            />
          );
        })}
      </ContentCarousel>
      <Modal
        title={cards[index].title}
        onCancel={() => setModal(false)}
        visible={openModal}
      >
        <ModalInfo />
      </Modal>
    </Container>
  );
};

export default Activities;
