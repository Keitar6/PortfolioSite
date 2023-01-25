import styled from 'styled-components';
import { Colors, StandardFlexContainer } from '../../global.styles';

export const NaviWrapper = styled(StandardFlexContainer)`
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.tertiary};
  min-width: 43rem;
  padding-bottom: 0.5rem;
`;
