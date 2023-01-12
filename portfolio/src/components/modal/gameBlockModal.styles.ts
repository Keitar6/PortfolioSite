import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Colors, StandardFlexContainer, Typography } from '../../global.styles';

export const ButtonGameBlockModal = styled(Button)`
  background-color: transparent;
  filter: none;
  border: none;
  &:hover{
    none
  }
`;

export const ModalContentContainer = styled(StandardFlexContainer)`
  flex-direction: column;
  top: ${50}%;
  left: ${50}%;
  transform: translate(-${50}%, -${50}%);
  padding: 1rem 0rem 0.5rem 0rem;
  border: 1px solid ${Colors.dark};
  border-radius: ${Typography.modalRadius};

  overflow: clip;
`;

export const Band = styled(StandardFlexContainer)`
  justify-content: start;
  color: ${Colors.light};
  background-color: ${Colors.primary};
  width: 110%;
  padding: 0.5rem;
  padding-left: 2.5rem;
  margin: 0rem -2rem;

  transform: rotate(-3deg);
`;
export const SecondBand = styled(Band)`
  transform: rotate(3deg);
`;

export const BandText = styled.p`
  transform: rotate(0deg);
`;

export const ModuleContentText = styled.p`
  transform: rotate(0deg);
  padding: 0.5rem 0.5rem;
  margin: 0.8rem 0rem;
`;
