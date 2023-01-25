import styled from 'styled-components';
import { Colors } from './global.styles';

export const AppContainer = styled.div`
  // border: 1px solid ${Colors.primary};
  max-width: 60rem;
  max-height: 35rem;
  background-color: ${Colors.light};
  border-radius: 3.75rem;
  box-shadow: 20px 30px 50px ${Colors.dark};
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height: 100%;

  position: relative;
`;

export const HPBCKGImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 4.5rem;
  width: 13rem;
`;
