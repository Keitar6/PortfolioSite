import styled from 'styled-components';
import {
  Colors,
  PLarge,
  StandardFlexContainer,
  StandardFlexContainerMixing,
} from '../../global.styles';

export const LogoWrapper = styled(StandardFlexContainer)`
  flex-direction: row;
  justify-content: start;
  gap: 0.5rem;
  flex: 1 1 30%;
`;
export const LogName = styled(PLarge)`
  color: ${Colors.primary};
  ${StandardFlexContainerMixing}
  justify-content: center;
  flex: 1 1 40%;
`;
