import React, { useState } from 'react';
import { Card as C } from 'antd';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import { transparentize } from 'polished';
import ModalCarousel from '../modal/ModalCarousel';

const { Meta } = C;

const CardWrap = styled.div`
  width: calc(100vw / 3);
  height: calc(var(--vh, 1vh) * 100 - (70px));
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: calc(100vw / 2);
    height: calc(var(--vh, 1vh) * 100 - (70px));
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100 - (70px));
  }
`;

const StyledCard = styled(C)`
  position: relative;
  background: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.white : theme.colors.sub};
  width: 100% !important;
  margin: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 1rem 1rem 1rem
    ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.sub : theme.colors.black};

  &:hover {
    box-shadow: 0.2rem 0.2rem 0.5rem
      ${({ theme }) =>
        theme.mode === 'light' ? theme.colors.sub : theme.colors.black};
  }

  border: 1px solid
    ${({ theme }) => (theme.mode === 'light' ? '#fff' : theme.colors.sub)};
  transition: 0.3s;
`;

const StyledMeta = styled(Meta)`
  .ant-card-meta-title {
    color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.black : theme.colors.white};
  }

  .ant-card-meta-description {
    color: ${({ theme }) =>
      transparentize(
        0.4,
        theme.mode === 'light' ? theme.colors.black : theme.colors.white,
      )};
  }
`;

const Image = styled.img`
  border-radius: 1rem 1rem 0 0 !important;
`;

const Card = () => {
  const [isOpen, setOpen] = useState(false);
  const onClick = () => {
    setOpen((open) => !open);
  };
  const images = [
    'https://image.freepik.com/free-vector/light-blue-project-management-concept_23-2147782704.jpg',
    'https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/b9ed772579c3f5465ad7b2f6bf62c74d1ca45d29.jpeg',
  ];

  return (
    <CardWrap>
      <StyledCard
        onClick={onClick}
        hoverable
        cover={
          <Image
            alt="example"
            src="https://image.freepik.com/free-vector/light-blue-project-management-concept_23-2147782704.jpg"
          />
        }
      >
        <StyledMeta
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </StyledCard>
      <Modal title="Europe Street beat" visible={isOpen} onCancel={onClick}>
        <ModalCarousel images={images} />
      </Modal>
    </CardWrap>
  );
};

export default Card;
