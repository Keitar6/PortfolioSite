import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
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

export const ModalContentContainer = styled.div`
  padding: 1rem 0rem 0.5rem 0rem;
  border: 1px solid ${Colors.dark};
  border-radius: ${Typography.modalRadius};

  overflow: hidden;
`;

export const Band = styled(StandardFlexContainer)`
  justify-content: start;
  color: ${Colors.light};
  background-color: ${Colors.primary};
  width: 110%;
  padding: 0.8rem;
  padding-left: 2.5rem;
  margin: 1rem -2rem 0rem -2rem;
  transform: rotate(-3deg);
`;
export const BandText = styled.p`
  transform: rotate(3deg);
`;
export const SecondBand = styled(Band)`
  transform: rotate(3deg);
`;

export const SecondBandText = styled.p`
  transform: rotate(-3deg);
`;

export const ModuleContent = styled(StandardFlexContainer)`
  transform: rotate(0deg);
  padding: 0.5rem 0.5rem;
  margin: 0.8rem 0rem;
`;





export const DialogContentHiddenScrollbar = styled(DialogContent)``;
export const DialogTitleCustom = styled(DialogTitle).attrs({
  id: 'scroll-dialog-title',
})`
  border-bottom: 1px solid ${Colors.primary};
`;
export const DialogActionsCustom = styled(DialogActions)`
  border-top: 1px solid ${Colors.primary};
`;
