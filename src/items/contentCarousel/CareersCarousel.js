import React from 'react';
import ContentCarouselContainer from '../../components/carousels/contentCarousel/ContentCarouselContainer';
import ContentItem from '../../components/carousels/contentCarousel/ContentItem';
import ModalContainer from '../../components/modal/ModalContainer';
import useModalStates from '../../hooks/useItemModalStates';
import Adcapsule from '../modal/careers/Adcapsule';
import TheMong from '../modal/careers/TheMong';

const cards = [
  {
    title: '애드캡슐소프트',
    desc: '웹 퍼블리싱 인턴',
    image: 'adcapsule.png',
    sub: '2019.06 ~ 2019.08',
    ModalContent: Adcapsule,
  },
  {
    title: '더몽',
    desc: '풀스택 개발',
    image: 'themong.png',
    sub: '2020.05 ~ ',
    ModalContent: TheMong,
  },
];

const CareersCarousel = () => {
  const { index, modalOpen, onClick, onCancel } = useModalStates();
  const { title, ModalContent } = cards[index];

  return (
    <div>
      <ContentCarouselContainer noArrow>
        {cards.map(({ image, ...rest }, idx) => {
          const img = require(`../../images/careers/logos/${image}`).default;
          return (
            <ContentItem
              onClick={() => onClick(idx)}
              key={idx}
              image={img}
              {...rest}
            />
          );
        })}
      </ContentCarouselContainer>
      <ModalContainer title={title} visible={modalOpen} onCancel={onCancel}>
        <ModalContent />
      </ModalContainer>
    </div>
  );
};

export default CareersCarousel;
