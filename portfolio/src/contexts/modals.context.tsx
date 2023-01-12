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
  modalContent: string;
  setModalContent: Dispatch<SetStateAction<string>>;
};

const modalContentInit = `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            accumsan odio enim, non pharetra est ultrices et.

`;

export const ModalsContext = createContext<contextModalType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  modalContent: modalContentInit,
  setModalContent: () => {},
});

export const ModalsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>(modalContentInit);

  const value = {
    isModalOpen,
    setIsModalOpen,
    modalContent,
    setModalContent,
  };

  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
};
