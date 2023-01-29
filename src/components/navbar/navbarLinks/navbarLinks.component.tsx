import { FC, useContext } from 'react';

import { TextLink } from '../../../global.styles';
import { ModalsContext } from '../../../contexts/modals.context';

type NavbarLinksProps = {
  index: number;
  text: string;
};

export const NavbarLinks: FC<NavbarLinksProps> = ({ index, text }) => {
  const { setIsModalOpen, setClickedGameBlockIndex } =
    useContext(ModalsContext);

  function onClickHandler(index: number) {
    setClickedGameBlockIndex(index);
    setIsModalOpen(true);
  }

  return (
    <>
      {text !== 'Education' ? (
        <TextLink onClick={() => onClickHandler(index)} to='/'>
          {text}
        </TextLink>
      ) : null}
    </>
  );
};
