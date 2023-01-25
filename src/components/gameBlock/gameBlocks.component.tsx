import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import { Colors } from '../../global.styles';
import { gameBlockIcons } from '../../utils/gameBlock/gameBlock.utils';
import { GameBlocksWrapper, GameBlockWrapper } from './gameBlocks.styles';
import { GameBlock } from './gameBlocks/gameBlock.component';

export const GameBlocksContainer = () => {
  const arrow = useXarrow();

  return (
    <GameBlocksWrapper>
      <Xwrapper>
        {(
          Object.keys(gameBlockIcons) as Array<keyof typeof gameBlockIcons>
        ).map((iconName, index) => {
          const whichEndToJustify = index % 2 === 0 ? 'start' : 'end';

          return (
            <GameBlockWrapper key={index} whichEndToJustify={whichEndToJustify}>
              <GameBlock index={index} icon={gameBlockIcons[iconName]} />
            </GameBlockWrapper>
          );
        })}
        <Xarrow
          color={Colors.arrowsColor}
          start='elem1'
          end='elem2'
          animateDrawing={true}
          endAnchor='left'
          path='grid'
          dashness={false}
        />
        <Xarrow
          color={Colors.arrowsColor}
          start='elem2'
          end='elem3'
          animateDrawing={true}
          startAnchor='right'
          path='grid'
          gridBreak='-1%'
          dashness={false}
        />
        <Xarrow
          color={Colors.arrowsColor}
          start='elem3'
          end='elem4'
          animateDrawing={true}
          startAnchor='left'
          gridBreak='-1%'
          path='grid'
          dashness={false}
        />
      </Xwrapper>
    </GameBlocksWrapper>
  );
};
