import { Image } from 'antd';
import React from 'react';
import styled from 'styled-components';
import ModalCarouselContainer from './ModalCarouselContainer';

const ImageWrapper = styled.div`
  cursor: pointer;
  transition: 0.3s;
  :hover {
    filter: brightness(1.05);
  }
`;

const ModalImageCarousel = ({ imageSrcs }) => {
  return (
    <ModalCarouselContainer>
      {imageSrcs.map((imageSrc, idx) => (
        <ImageWrapper key={idx}>
          <Image alt={imageSrc} src={imageSrc} />
        </ImageWrapper>
      ))}
    </ModalCarouselContainer>
  );
};

export default ModalImageCarousel;
