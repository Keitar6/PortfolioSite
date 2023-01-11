import { createContext, useState, FC, PropsWithChildren } from 'react';

export const ModalsContext = createContext({
  isGameBlockOpen: false,
});

export const ModalsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isGameBlockOpen, setIsGameBlockOpen] = useState(false);

  const value = {
    isGameBlockOpen,
    setIsGameBlockOpen,
  };

  return <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>;
};
