import React from 'react';
import Modal from './Modal';
import { useVerticalCarouselContext } from '../../providers/SlickProvider';

const settings = {
  footer: null,
  bodyStyle: {
    padding: 0,
  },
  maskClosable: true,
  destroyOnClose: true,
};

const ModalContainer = () => {
  const { setStuck } = useVerticalCarouselContext();

  useEffect(() => {
    setStuck(visible);
  }, [visible]);

  return <Modal></Modal>;
};

export default ModalContainer;
