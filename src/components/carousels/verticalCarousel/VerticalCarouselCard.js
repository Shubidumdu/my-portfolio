import styled from 'styled-components';

const VerticalCarouselCard = styled.div`
  width: 100%;
  position: relative;
  border: none;
  color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.white : theme.colors.black};
  // 64px => Header's height
  height: calc(100vh - 64px);
  height: calc(var(--vh, 1vh) * 100 - 64px);
  background: ${({ theme }) => theme.colors.base};
  transition: 0.3s;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

export default VerticalCarouselCard;
