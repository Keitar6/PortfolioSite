import styled from 'styled-components';
import { Colors, StandardFlexContainer } from '../../global.styles';

export const NaviWrapper = styled(StandardFlexContainer)`
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.tertiary};
  padding-bottom: 0.5rem;
`;

export const NaviLinksMobile = styled(StandardFlexContainer)`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding-top: 0.5rem;
`;
