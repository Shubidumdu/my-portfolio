import React from 'react';
import { Modal as M } from 'antd';
import styled from 'styled-components';

const StyledModal = styled(M)``;

// const bodyStyle = {
//   width: 'calc(100% / 3)',
//   height: '100%',
// };

const settings = {};

const Modal = ({ children, ...rest }) => {
  return (
    <StyledModal {...settings} {...rest}>
      {children}
    </StyledModal>
  );
};

export default Modal;
