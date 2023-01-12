import {
  createContext,
  useState,
  FC,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from 'react';

type contextModalType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const ModalsContext = createContext<contextModalType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export const ModalsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const value = {
    isModalOpen,
    setIsModalOpen,
  };

  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
};
