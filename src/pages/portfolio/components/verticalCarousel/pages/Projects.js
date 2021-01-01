import React, { useState } from 'react';
import ContentCarousel from '../../contentCarousel/ContentCarousel';
import { Card as Container } from '../VerticalCarousel';
import Card from '../../contentCarousel/Card';
import Modal from '../../modal/Modal';
import CopyCats from '../../modal/components/projects/CopyCats';
import HumanFace from '../../modal/components/projects/HumanFace';
import HyperFocus from '../../modal/components/projects/HyperFocus';
import FiveColor from '../../modal/components/projects/FiveColors';
import MingleTown from '../../modal/components/projects/MingleTown';

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

const Projects = () => {
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
          const img = require(`../../../resources/images/projects/logos/${image}`)
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

export default Projects;
