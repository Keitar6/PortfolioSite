import { FC } from 'react';
import { GameBlockContainer } from './gameBlock.styles';
import { GameBlockIcon } from './gameBlockIcons/gameBlock.Icons';
import { gameBlockIconType } from '../../../utils/gameBlock.utils';
import SomeModal from '../../modal/modal.component';

type GameBlockProps = {
  icon: gameBlockIconType;
};

export const GameBlock: FC<GameBlockProps> = ({ icon }) => {
  const { name, color } = icon;

  return (
    <>
      <GameBlockContainer>
        <SomeModal>

        <GameBlockIcon iconName={name} iconColor={color} />
        </SomeModal>
      </GameBlockContainer>
    </>
  );
};
