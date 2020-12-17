import React from 'react';
import { Card as C } from 'antd';
import styled from 'styled-components';
import { transparentize } from 'polished';

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

  > .ant-card-body {
    position: relative;
  }
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

const Title = styled.div``;

const Period = styled.div`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.main};
`;

const Image = styled.img`
  border-radius: 1rem 1rem 0 0 !important;
`;

const Card = ({ onClick, image, title, desc, period }) => {
  return (
    <CardWrap>
      <StyledCard
        onClick={onClick}
        hoverable
        cover={<Image alt={title} src={image} />}
      >
        <StyledMeta
          title={
            <Title>
              {title} <Period>{period}</Period>
            </Title>
          }
          description={desc}
        />
      </StyledCard>
    </CardWrap>
  );
};

export default Card;
