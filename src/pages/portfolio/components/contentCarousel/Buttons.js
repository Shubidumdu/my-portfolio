import { Button } from 'antd';
import React, { useRef } from 'react';
import styled from 'styled-components';
import {
  HiArrowLeft as LeftIcon,
  HiArrowRight as RightIcon,
} from 'react-icons/hi';

const styleSettings = {
  ghost: true,
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
  width: 100%;
  bottom: 2rem;
  padding: 0 2rem;
`;

const Buttons = ({ onBack, onNext }) => {
  return (
    <ButtonWrap>
      <Button
        icon={<LeftIcon size="40px" />}
        onClick={onBack}
        {...styleSettings}
      />
      <Button
        icon={<RightIcon size="40px" />}
        onClick={onNext}
        {...styleSettings}
      />
    </ButtonWrap>
  );
};

export default Buttons;
