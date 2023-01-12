import { gameBlockIcons } from '../../utils/gameBlock.utils';
import { GameBlocksWrapper, GameBlockWrapper } from './gameBlocks.styles';
import { GameBlock } from './gameBlocks/gameBlock.component';

export const GameBlocksContainer = () => {
  return (
    <GameBlocksWrapper>
      {(Object.keys(gameBlockIcons) as Array<keyof typeof gameBlockIcons>).map(
        (iconName, index) => {
          const whichEndToJustify = index % 2 === 0 ? 'start' : 'end';
          return (
            <GameBlockWrapper key={index} whichEndToJustify={whichEndToJustify}>
              <GameBlock key={index} icon={gameBlockIcons[iconName]} />
            </GameBlockWrapper>
          );
        }
      )}
    </GameBlocksWrapper>
  );
};
