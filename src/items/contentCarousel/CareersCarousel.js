import React from 'react';
import ContentCarouselContainer from '../../components/carousels/contentCarousel/ContentCarouselContainer';
import ContentItem from '../../components/carousels/contentCarousel/ContentItem';
import { useModalContext } from '../../providers/ModalProvider';
import Adcapsule from '../modal/careers/Adcapsule';
import TheMong from '../modal/careers/TheMong';

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

const CareersCarousel = () => {
  const { setTitle, setModalContent, setModalOpen } = useModalContext();
  const onClick = (idx) => {
    const { title, ModalContent } = cards[idx];
    setTitle(title);
    setModalContent(ModalContent);
    setModalOpen(true);
  };

  return (
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
  );
};

export default CareersCarousel;
