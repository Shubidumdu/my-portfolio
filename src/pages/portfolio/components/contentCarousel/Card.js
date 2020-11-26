import React from 'react';
import { Card as C } from 'antd';
import styled from 'styled-components';

const { Meta } = C;

const CardWrap = styled.div`
  width: calc(100vw / 3);
  height: calc(var(--vh, 1vh) * 100 - (64px * 2));
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(C)`
  background: #fff;
  width: 320px !important;
  height: auto;
`;

const Card = () => {
  return (
    <CardWrap>
      <StyledCard
        hoverable
        style={{ width: 240 }}
        cover={
          <img
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
