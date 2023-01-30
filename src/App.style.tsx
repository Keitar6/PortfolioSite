import styled from 'styled-components';
import { Colors } from './global.styles';
import { HP_mobileUnder600 } from './utils/mobileStyles/mobileStyles.utils';

export const AppContainer = styled.div`
  max-width: 60rem;
  min-width: 43rem;
  max-height: 35rem;
  background-color: ${Colors.light};
  border-radius: 3.75rem;
  box-shadow: 20px 30px 50px ${Colors.dark};
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height: 100%;

  ${HP_mobileUnder600}
  position: relative;
`;

export const HPBCKGImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 4.5rem;
  width: 13rem;
`;
