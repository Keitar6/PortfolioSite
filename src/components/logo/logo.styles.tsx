import styled from 'styled-components';
import { Colors, H3, StandardFlexContainer } from '../../global.styles';

export const LogoWrapper = styled(StandardFlexContainer)`
  flex-direction: row;
  gap: 0.5rem;
`;
export const LogName = styled(H3)`
  color: ${Colors.primary};
`;
