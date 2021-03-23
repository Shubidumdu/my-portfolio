import React, { createContext, useState } from 'react';

const ModalContext = createContext(null);

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  return modalContext;
};

const ModalProvider = ({ children }) => {
  const [ModalInner, setModalInner] = useState(null);
  const [isOpen, setModalOpen] = useState(null);
  const contextValue = {
    ModalInner,
    setModalInner,
    isOpen,
    setModalOpen,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
