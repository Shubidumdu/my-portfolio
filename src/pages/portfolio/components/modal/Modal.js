import React, { useEffect } from 'react';
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
      text-align: center;
      background: ${({ theme }) =>
        theme.mode === 'light'
          ? theme.colors.white
          : theme.colors.sub} !important;
      border-bottom: 1px solid
        ${({ theme }) =>
          theme.mode === 'light' ? theme.colors.base : theme.colors.black};

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

export const ModalBody = styled.div`
  padding: 1.5rem;
`;

const settings = {
  footer: null,
  bodyStyle: {
    padding: 0,
  },
  maskClosable: true,
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
