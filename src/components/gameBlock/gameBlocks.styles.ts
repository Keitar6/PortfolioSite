import styled from 'styled-components';
import { Colors, StandardFlexContainer } from '../../global.styles';

export const GameBlocksWrapper = styled(StandardFlexContainer)`
  flex-direction: column;
  // border: 1px solid ${Colors.dark};
  width: 100%;
  // padding: 2rem;
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
