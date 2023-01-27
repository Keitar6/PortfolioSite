import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MobileStepper,
} from '@material-ui/core';
import styled from 'styled-components';
import { Colors, StandardFlexContainer, Typography } from '../../global.styles';
const CustomDialogAttrs = {
  height: '35rem',
  borderRadius: '1.5rem',
  // border: '2px solid red',
};

export const CustomDialog = styled(Dialog).attrs({
  PaperProps: {
    style: CustomDialogAttrs,
  },
})``;

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
  padding: 0rem 0rem;
  margin: 0.8rem 0rem;
`;

export const CustomDialogTitle = styled(DialogTitle).attrs({
  id: 'scroll-dialog-title',
})`
  border-bottom: 1px solid ${Colors.primary};
  margin: 0rem 1rem;
`;

export const DialogTitleContent = styled(StandardFlexContainer)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const CustomDialogStepper = styled(MobileStepper)`
  margin: 0rem 1rem;
  background-color: transparent;
`;

export const StepperButton = styled(MobileStepper)`
  &:hover {
    border: 1px solid ${Colors.primary};
  }
`;

export const CustomDialogContent = styled(DialogContent)`
  position: relative;
`;

export const DialogImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 13rem;
  margin: auto;
  border-right: 1px solid ${Colors.dark};
`;
