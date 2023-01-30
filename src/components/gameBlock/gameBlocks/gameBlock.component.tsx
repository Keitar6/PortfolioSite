import { FC, useContext } from 'react';
import { GameBlockContainer } from './gameBlock.styles';
import { GameBlockIcon } from './gameBlockIcons/gameBlock.Icons';
import { gameBlockIconType } from '../../../utils/gameBlock/gameBlock.utils';
import { ModalsContext } from '../../../contexts/modals.context';
import { arrowHelper } from '../../../functions/arrowsHelper.function';
import { RESPO_SCALES } from '../../../utils/mobileStyles/respoScales.utils';
import { GlobalContext } from '../../../contexts/global.context';

type GameBlockProps = {
  index: number;
  icon: gameBlockIconType;
};

export const GameBlock: FC<GameBlockProps> = ({ icon, index }) => {
  const { name, color } = icon;
  const { setIsModalOpen, setClickedGameBlockIndex } =
    useContext(ModalsContext);

  const { matches } = useContext(GlobalContext);
  const width = matches
    ? RESPO_SCALES.LOGO_GAMEBLOCK_Mobile.gameBlock.blockSize
    : RESPO_SCALES.LOGO_GAMEBLOCK_Regular.gameBlock.blockSize;
  const iconWidth = (width - 0.5) * 16;

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setClickedGameBlockIndex(index);
  };

  return (
    <GameBlockContainer
      width={width}
      id={arrowHelper(index)}
      onClick={handleModalOpen}
    >
      <GameBlockIcon iconWidth={iconWidth} iconName={name} iconColor={color} />
    </GameBlockContainer>
  );
};
