import styled from 'styled-components';
import { Colors, StandardFlexContainer } from '../../global.styles';

export const FooterContainer = styled(StandardFlexContainer)`
  // flex: 1 1 5%;
`;

export const IconsContainer = styled(StandardFlexContainer)`
  border-top: 1px solid ${Colors.tertiary};
  gap: 4rem;
  padding: 0rem 2rem;
  padding-top: 1rem;
`;
