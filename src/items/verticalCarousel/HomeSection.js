import React from 'react';
import styled from 'styled-components';
import VerticalCarouselCard from '../../components/carousels/verticalCarousel/VerticalCarouselCard';
import VerticalCarouselInner from '../../components/carousels/verticalCarousel/VerticalCarouselInner';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.white : theme.colors.sub};
  border-radius: 1rem;
  box-shadow: 1px 1px 6px
    ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.sub : theme.colors.black};
  flex-direction: column;
  text-align: center;
  word-break: keep-all;

  @media (max-width: 550px) {
    border-radius: 0;
    box-shadow: none;
  }
`;

const IntroWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Border = styled.div`
  height: 0;
  width: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 2px;
  margin: 1rem;
`;

const MediumTitle = styled.div`
  font-weight: ${({ theme }) => (theme.mode === 'light' ? 'bold' : 'normal')};
  font-size: 1rem;

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const LargeTitle = styled.div`
  font-weight: ${({ theme }) => (theme.mode === 'light' ? 'bold' : 'normal')};
  font-size: 1.5rem;

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const HomeSection = () => {
  return (
    <VerticalCarouselCard>
      <VerticalCarouselInner>
        <Container>
          <IntroWrap>
            <LargeTitle>안녕하세요</LargeTitle>
            <Border />
            <MediumTitle>한 걸음씩 성장하는 개발자 서원교입니다</MediumTitle>
          </IntroWrap>
        </Container>
      </VerticalCarouselInner>
    </VerticalCarouselCard>
  );
};

export default HomeSection;
