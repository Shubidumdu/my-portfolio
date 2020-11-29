import React from 'react';
import { Card as C } from 'antd';
import styled from 'styled-components';

const { Meta } = C;

const CardWrap = styled.div`
  width: calc(100vw / 3);
  height: calc(var(--vh, 1vh) * 100 - (64px * 2));
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: calc(100vw / 2);
    height: calc(var(--vh, 1vh) * 100 - (64px * 2));
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100 - (64px * 2));
  }
`;

const StyledCard = styled(C)`
  position: relative;
  background: #fff;
  width: 100% !important;
  margin: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 1rem 1rem 1rem
    ${({ theme }) => (theme.mode === 'light' ? theme.colors.sub : '#000')};

  &:hover {
    box-shadow: 0.2rem 0.2rem 0.5rem
      ${({ theme }) => (theme.mode === 'light' ? theme.colors.sub : '#000')};
  }
`;

const Image = styled.img`
  border-radius: 1rem 1rem 0 0 !important;
`;

const Card = () => {
  return (
    <CardWrap>
      <StyledCard
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </StyledCard>
    </CardWrap>
  );
};

export default Card;
