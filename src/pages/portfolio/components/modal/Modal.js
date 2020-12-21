import React, { useContext, useEffect } from 'react';
import { Modal as M } from 'antd';
import styled from 'styled-components';
import { useVerticalSlickContext } from '../../SlickProvider';

const StyledModal = styled(M)`
  > .ant-modal-content {
    background: ${({ theme }) =>
      theme.mode === 'light'
        ? theme.colors.white
        : theme.colors.sub} !important;

    .ant-modal-close-x {
      color: ${({ theme }) =>
        theme.mode === 'light'
          ? theme.colors.sub
          : theme.colors.white} !important;
    }

    > .ant-modal-header {
      background: ${({ theme }) =>
        theme.mode === 'light'
          ? theme.colors.white
          : theme.colors.sub} !important;

      > .ant-modal-title {
        color: ${({ theme }) =>
          theme.mode === 'light'
            ? theme.colors.black
            : theme.colors.white} !important;
      }
    }

    > .ant-modal-body {
      color: ${({ theme }) =>
        theme.mode === 'light'
          ? theme.colors.black
          : theme.colors.white} !important;
    }
  }
`;

const settings = {
  footer: null,
  bodyStyle: {
    padding: 0,
  },
  maskClosable: false,
  destroyOnClose: true,
};

const Modal = ({ children, visible, ...rest }) => {
  const { setStuck } = useVerticalSlickContext();

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
