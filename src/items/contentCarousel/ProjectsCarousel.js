import React from 'react';
import ContentCarouselContainer from '../../components/carousels/contentCarousel/ContentCarouselContainer';
import ContentItem from '../../components/carousels/contentCarousel/ContentItem';
import { useModalContext } from '../../providers/ModalProvider';
import CopyCats from '../modal/projects/CopyCats';
import FiveColor from '../modal/projects/FiveColors';
import HumanFace from '../modal/projects/HumanFace';
import HyperFocus from '../modal/projects/HyperFocus';
import MingleTown from '../modal/projects/MingleTown';

const cards = [
  {
    title: '카피캣츠',
    desc: 'SNS형 성대모사 플랫폼',
    image: 'copycats.png',
    sub: '2019',
    ModalInfo: CopyCats,
  },
  {
    title: '인간안면보고서',
    desc: '얼굴이미지 분석 웹 앱',
    image: 'facereport.png',
    sub: '2020',
    ModalInfo: HumanFace,
  },
  {
    title: '절대집중시간',
    desc: '반복 집중/휴식 웹 타이머',
    image: 'hyperfocus.png',
    sub: '2020',
    ModalInfo: HyperFocus,
  },
  {
    title: '밍글타운',
    desc: '쉐어하우스 중개 플랫폼',
    image: 'mingletown.png',
    sub: '2020',
    ModalInfo: MingleTown,
  },
  {
    title: '오깔라',
    desc: '옷 색깔 조합 추천 웹 앱',
    image: '5color.png',
    sub: '2020',
    ModalInfo: FiveColor,
  },
];

const ProjectsCarousel = () => {
  const { setTitle, setModalContent, setModalOpen } = useModalContext();
  const onClick = (idx) => {
    const { title, ModalContent } = cards[idx];
    setTitle(title);
    setModalContent(ModalContent);
    setModalOpen(true);
  };

  return (
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
  );
};

export default ProjectsCarousel;
