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
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => (theme.mode === 'light' ? 'bold' : 'normal')};

  @media (max-width: 550px) {
    border-radius: 0;
    box-shadow: none;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (orientation: portrait) {
    width: 100%;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  width: 32rem;
  height: auto;
  grid-template-columns: 30% auto;
  grid-gap: 1rem;

  @media (orientation: portrait) {
    width: 100%;
    grid-template-columns: 30% auto;
  }
`;

const InfoHead = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;

  > span {
    padding-bottom: 0.25rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.main};
  }

  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

const InfoDesc = styled.div`
  font-size: 1rem;
  word-break: keep-all;

  @media (max-width: 550px) {
    font-size: 0.8rem;

    & > span {
      font-size: 0.8rem;
    }
  }
`;

const ProfileSection = () => {
  return (
    <VerticalCarouselCard>
      <VerticalCarouselInner>
        <Container>
          <InfoWrap>
            <InfoGrid>
              <InfoHead>
                <span>이름</span>
              </InfoHead>
              <InfoDesc>서원교</InfoDesc>
              <InfoHead>
                <span>생년월일</span>
              </InfoHead>
              <InfoDesc>95.08.12</InfoDesc>
              <InfoHead>
                <span>거주지</span>
              </InfoHead>
              <InfoDesc>서울특별시 관악구</InfoDesc>
              <InfoHead>
                <span>학력</span>
              </InfoHead>
              <InfoDesc>
                <span>국민대학교 빅데이터경영통계 심화전공</span>
              </InfoDesc>
              <InfoHead></InfoHead>
              <InfoDesc>
                <span>국민대학교 소프트웨어 부전공</span>
              </InfoDesc>
            </InfoGrid>
          </InfoWrap>
        </Container>
      </VerticalCarouselInner>
    </VerticalCarouselCard>
  );
};

export default ProfileSection;
