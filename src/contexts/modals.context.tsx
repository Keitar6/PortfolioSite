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

  modalContent: any;
  setModalContent: Dispatch<SetStateAction<any>>;

  modalContentTitle: string;
  setModalContentTitle: Dispatch<SetStateAction<string>>;

  clickedGameBlockIndex: number;
  setClickedGameBlockIndex: Dispatch<SetStateAction<number>>;

  modalContentImage: string;
  setModalContentImage: Dispatch<SetStateAction<string>>;
};

const modalInit = {
  title: 'Title',
  content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            accumsan odio enim, non pharetra est ultrices et.

`,
  image: '',
};

export const ModalsContext = createContext<contextModalType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  modalContent: modalInit.content,
  setModalContent: () => {},
  modalContentTitle: modalInit.title,
  setModalContentTitle: () => {},
  modalContentImage: modalInit.image,
  setModalContentImage: () => {},
  clickedGameBlockIndex: -1,
  setClickedGameBlockIndex: () => {},
});

export const ModalsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>(modalInit.content);
  const [modalContentTitle, setModalContentTitle] = useState<string>(
    modalInit.title
  );
  const [modalContentImage, setModalContentImage] = useState<string>(
    modalInit.image
  );
  const [clickedGameBlockIndex, setClickedGameBlockIndex] =
    useState<number>(-1);

  const value = {
    isModalOpen,
    setIsModalOpen,

    modalContent,
    setModalContent,

    modalContentTitle,
    setModalContentTitle,

    modalContentImage,
    setModalContentImage,

    clickedGameBlockIndex,
    setClickedGameBlockIndex,
  };

  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
};
