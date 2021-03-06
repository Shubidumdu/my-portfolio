import React from 'react';
import ContentCarouselContainer from '../../components/carousels/contentCarousel/ContentCarouselContainer';
import ContentItem from '../../components/carousels/contentCarousel/ContentItem';
import ModalContainer from '../../components/modal/ModalContainer';
import useModalStates from '../../hooks/useItemModalStates';
import CopyCats from '../modal/projects/CopyCats';
import FiveColor from '../modal/projects/FiveColors';
import HumanFace from '../modal/projects/HumanFace';
import HyperFocus from '../modal/projects/HyperFocus';
import MingleTown from '../modal/projects/MingleTown';
import GameOfLife from '../modal/projects/GameOfLife';

const cards = [
  {
    title: '카피캣츠',
    desc: '성대모사 SNS',
    image: 'copycats.png',
    sub: '2019',
    ModalContent: CopyCats,
  },
  {
    title: '인간안면보고서',
    desc: '얼굴이미지 분석 웹 앱',
    image: 'facereport.png',
    sub: '2020',
    ModalContent: HumanFace,
  },
  {
    title: '절대집중시간',
    desc: '반복 집중/휴식 웹 타이머',
    image: 'hyperfocus.png',
    sub: '2020',
    ModalContent: HyperFocus,
  },
  {
    title: '밍글타운',
    desc: '쉐어하우스 플랫폼',
    image: 'mingletown.png',
    sub: '2020',
    ModalContent: MingleTown,
  },
  {
    title: '오깔라',
    desc: '옷 색깔 조합 추천 PWA',
    image: '5color.png',
    sub: '2020',
    ModalContent: FiveColor,
  },
  {
    title: "Conway's game of life in 3D",
    desc: '콘웨이의 생명게임',
    image: 'gameoflife.png',
    sub: '2021',
    ModalContent: GameOfLife,
  },
];

const ProjectsCarousel = () => {
  const { index, modalOpen, onClick, onCancel } = useModalStates();
  const { title, ModalContent } = cards[index];

  return (
    <div>
      <ContentCarouselContainer>
        {cards.map(({ image, ...rest }, idx) => {
          const img = require(`../../images/projects/logos/${image}`).default;
          return (
            <ContentItem
              onClick={() => onClick(idx)}
              key={image}
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

export default ProjectsCarousel;
