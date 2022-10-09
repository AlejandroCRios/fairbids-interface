import { createContext, useContext, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

export const StateContext = createContext();

export const useStateInfo = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
  const {
    isOpen: isOpenSel,
    onOpen: onOpenSel,
    onClose: onCloseSel,
  } = useDisclosure();

  return (
    <StateContext.Provider
      value={{
        isOpenSel,
        onOpenSel,
        onCloseSel,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
