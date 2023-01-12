import { FC, useContext } from 'react';
import { GameBlockContainer } from './gameBlock.styles';
import { GameBlockIcon } from './gameBlockIcons/gameBlock.Icons';
import { gameBlockIconType } from '../../../utils/gameBlock.utils';
import { ModalsContext } from '../../../contexts/modals.context';

type GameBlockProps = {
  icon: gameBlockIconType;
};

export const GameBlock: FC<GameBlockProps> = ({ icon }) => {
  const { name, color } = icon;
  const { setIsModalOpen } = useContext(ModalsContext);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <GameBlockContainer onClick={handleModalOpen}>
        <GameBlockIcon iconName={name} iconColor={color} />
      </GameBlockContainer>
    </>
  );
};
