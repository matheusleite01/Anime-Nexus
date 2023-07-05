import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <GlobalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};
