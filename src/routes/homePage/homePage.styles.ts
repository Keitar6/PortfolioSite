import styled from 'styled-components';
import { StandardFlexContainer } from '../../global.styles';

export const HomePageWrapper = styled(StandardFlexContainer)`
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 100%;
`;

export const WelcomeContainer = styled(StandardFlexContainer)`
  flex-direction: column;
  width: 100%;
`;

export const HPClickableWrapper = styled(StandardFlexContainer)`
  flex-direction: row;
  flex-wrap: nowrap;
  // border: 1px solid red;
  width: 100%;
  height: 100%;
`;
