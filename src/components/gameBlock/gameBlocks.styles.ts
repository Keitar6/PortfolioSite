import styled from 'styled-components';
import { StandardFlexContainer } from '../../global.styles';
import {
  gameBlockWrapperUnder600,
  gameBlocksWrapperUnder600,
} from '../../utils/mobileStyles/mobileStyles.utils';

export const GameBlocksWrapper = styled(StandardFlexContainer)`
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  ${gameBlocksWrapperUnder600}
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
  ${gameBlockWrapperUnder600}
`;
