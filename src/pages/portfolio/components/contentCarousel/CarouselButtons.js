import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import {
  HiArrowLeft as LeftIcon,
  HiArrowRight as RightIcon,
} from 'react-icons/hi';

const styleSettings = {
  size: 'large',
  type: 'primary',
  shape: 'circle',
  style: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6px',
  },
};

const ButtonWrap = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: absolute;
  pointer-events: none;
  width: 100%;
  bottom: 50%;
  padding: 0 1rem;
`;

const StyledButton = styled(Button)`
  pointer-events: visible;
`;

const CarouselButtons = ({ onPrev, onNext }) => {
  return (
    <ButtonWrap>
      <StyledButton
        icon={<LeftIcon size="40px" />}
        onClick={onPrev}
        {...styleSettings}
      />
      <StyledButton
        icon={<RightIcon size="40px" />}
        onClick={onNext}
        {...styleSettings}
      />
    </ButtonWrap>
  );
};

export default CarouselButtons;
