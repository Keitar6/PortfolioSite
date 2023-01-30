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

  clickedGameBlockIndex: number;
  setClickedGameBlockIndex: Dispatch<SetStateAction<number>>;
};

export const ModalsContext = createContext<contextModalType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  clickedGameBlockIndex: 0,
  setClickedGameBlockIndex: () => {},
});

export const ModalsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [clickedGameBlockIndex, setClickedGameBlockIndex] = useState<number>(0);

  const value = {
    isModalOpen,
    setIsModalOpen,

    clickedGameBlockIndex,
    setClickedGameBlockIndex,
  };

  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
};
