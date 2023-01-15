import { FC, useContext, useEffect } from 'react';
import { GameBlockContainer } from './gameBlock.styles';
import { GameBlockIcon } from './gameBlockIcons/gameBlock.Icons';
import { gameBlockIconType } from '../../../utils/gameBlock.utils';
import { ModalsContext } from '../../../contexts/modals.context';
import { GAME_BLOCK_BUTTONS_MODALS_CONTENT } from '../../modalsContents/getModalContent.function';

type GameBlockProps = {
  index: number;
  icon: gameBlockIconType;
};

export const GameBlock: FC<GameBlockProps> = ({ icon, index }) => {
  const { name, color } = icon;
  const { setIsModalOpen, setClickedGameBlockIndex } =
    useContext(ModalsContext);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setClickedGameBlockIndex(index);
  };

  return (
    <>
      <GameBlockContainer onClick={handleModalOpen}>
        <GameBlockIcon iconName={name} iconColor={color} />
      </GameBlockContainer>
    </>
  );
};
