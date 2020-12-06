import React, { useContext, useEffect } from 'react';
import { Modal as M } from 'antd';
import styled from 'styled-components';
import { SlickContext } from '../..';

const StyledModal = styled(M)``;

const settings = {
  footer: null,
  bodyStyle: {
    padding: 0,
  },
  maskClosable: false,
  destroyOnClose: true,
};

const Modal = ({ children, visible, ...rest }) => {
  const { setStuck } = useContext(SlickContext);
  useEffect(() => {
    setStuck(visible);
  }, [visible]);

  return (
    <StyledModal visible={visible} {...settings} {...rest}>
      {children}
    </StyledModal>
  );
};

export default Modal;
