import React, { createContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [modalType, setModalType] = useState("");
  const [modalState, setModalState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modalType,
        setModalType,
        modalState,
        setModalState,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };
