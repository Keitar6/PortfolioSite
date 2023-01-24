import styled from 'styled-components';
import { Colors, StandardFlexContainer } from '../../global.styles';

export const GameBlocksWrapper = styled(StandardFlexContainer)`
  flex-direction: column;
  justify-content: center;
  flex: 1 1 30%;
  // border: 1px solid ${Colors.dark};

  height: 100%;
`;

export const GameBlockWrapper = styled(StandardFlexContainer)<{
  whichEndToJustify: string;
}>`
  width: 100%;
  padding: 0 1rem;
  justify-content: ${(props) =>
    props.whichEndToJustify ? props.whichEndToJustify : ''};
  max-width: 15rem;
  min-width: 11rem;
`;
