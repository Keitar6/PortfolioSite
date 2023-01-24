import { FC, useContext } from 'react';
import { GameBlockContainer } from './gameBlock.styles';
import { GameBlockIcon } from './gameBlockIcons/gameBlock.Icons';
import { gameBlockIconType } from '../../../utils/gameBlock/gameBlock.utils';
import { ModalsContext } from '../../../contexts/modals.context';
import { arrowHelper } from '../../../functions/arrowsHelper.function';

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
    <GameBlockContainer id={arrowHelper(index)} onClick={handleModalOpen}>
      <GameBlockIcon iconName={name} iconColor={color} />
    </GameBlockContainer>
  );
};
