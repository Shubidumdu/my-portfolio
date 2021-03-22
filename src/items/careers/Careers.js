import React, { useState } from 'react';
import ContentCarousel from '../../components/carousels/contentCarousel/ContentCarousel';
import { Card as Container } from '../../components/carousels/verticalCarousel/VerticalCarousel';
import Card from '../../contentCarousel/Card';
import Modal from '../../modal/Modal';
import Adcapsule from '../../modal/components/careers/Adcapsule';
import TheMong from '../../modal/components/careers/TheMong';

const cards = [
  {
    title: '애드캡슐소프트',
    desc: '웹 퍼블리싱 인턴',
    image: 'adcapsule.png',
    sub: '2018.06 ~ 2018.08',
    ModalInfo: Adcapsule,
  },
  {
    title: '더몽',
    desc: '풀스택 개발',
    image: 'themong.png',
    sub: '2020.05 ~ ',
    ModalInfo: TheMong,
  },
];

const Careers = () => {
  const [index, setIndex] = useState(0);
  const [openModal, setModal] = useState(false);
  const onClick = (idx) => {
    setIndex(idx);
    setModal((open) => !open);
  };
  const ModalInfo = cards[index].ModalInfo;

  return (
    <Container>
      <ContentCarousel noArrow>
        {cards.map(({ image, ...rest }, idx) => {
          const img = require(`../../../resources/images/careers/logos/${image}`)
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

export default Careers;
