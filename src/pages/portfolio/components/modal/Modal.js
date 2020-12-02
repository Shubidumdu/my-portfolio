import React from 'react';
import { Modal as M } from 'antd';
import styled from 'styled-components';

const StyledModal = styled(M)``;

const settings = {
  footer: null,
  bodyStyle: {
    padding: 0,
  },
};

const Modal = ({ children, ...rest }) => {
  return (
    <StyledModal {...settings} {...rest}>
      {children}
    </StyledModal>
  );
};

export default Modal;
