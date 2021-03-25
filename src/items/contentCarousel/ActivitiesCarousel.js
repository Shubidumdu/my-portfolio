import React from 'react';
import ContentCarouselContainer from '../../components/carousels/contentCarousel/ContentCarouselContainer';
import ContentItem from '../../components/carousels/contentCarousel/ContentItem';
import ModalContainer from '../../components/modal/ModalContainer';
import useModalStates from '../../hooks/useItemModalStates';
import Ausung from '../modal/activities/Ausung';
import DnA from '../modal/activities/DnA';
import EightVoce from '../modal/activities/EightVoce';
import LikeLion from '../modal/activities/LikeLion';
import LikeLionDesign from '../modal/activities/LikeLionDesign';

const cards = [
  {
    title: '아우성',
    desc: '국민대학교 밴드 동아리',
    image: 'ausung.jpg',
    sub: '2014.12 ~ 2020.02',
    ModalContent: Ausung,
  },
  {
    title: '멋쟁이 사자처럼',
    desc: '웹 프로그래밍 연합 동아리',
    image: 'likelion.png',
    sub: '2018.03 ~ 2018.12',
    ModalContent: LikeLion,
  },
  {
    title: '8voce',
    desc: '버스킹 밴드',
    image: '8voce.jpg',
    sub: '2018.04 ~ 2019.08',
    ModalContent: EightVoce,
  },
  {
    title: 'D&A ML Session',
    desc: '국민대학교 빅데이터경영통계 학회',
    image: 'dna.png',
    sub: '2018.08 ~ 2018.12',
    ModalContent: DnA,
  },
  {
    title: '멋쟁이 사자처럼 디자인',
    desc: '디자인 교육 연합 동아리',
    image: 'likelion_design.png',
    sub: '2019.07 ~ 2019.12',
    ModalContent: LikeLionDesign,
  },
];

const ActivitiesCarousel = () => {
  const { index, modalOpen, onClick, onCancel } = useModalStates();
  const { title, ModalContent } = cards[index];

  return (
    <div>
      <ContentCarouselContainer>
        {cards.map(({ image, ...rest }, idx) => {
          const img = require(`../../images/activities/logos/${image}`).default;
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

export default ActivitiesCarousel;
