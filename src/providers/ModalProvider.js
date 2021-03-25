import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext(null);

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  console.log(modalContext);
  return modalContext;
};

const ModalProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [ModalContent, setModalContent] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);
  const contextValue = {
    title,
    setTitle,
    ModalContent,
    setModalContent,
    modalOpen,
    setModalOpen,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
