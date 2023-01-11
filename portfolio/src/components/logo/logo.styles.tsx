import styled from 'styled-components';
import { Colors, H2, StandardFlexContainer } from '../../global.styles';

export const LogoWrapper = styled(StandardFlexContainer)`
  flex-direction: row;
  gap: 0.5rem;
`;
export const LogName = styled(H2)`
  color: ${Colors.primary};
`;
