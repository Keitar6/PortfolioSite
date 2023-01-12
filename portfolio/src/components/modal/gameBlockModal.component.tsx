import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useContext } from 'react';
import { ModalsContext } from '../../contexts/modals.context';
import parse from 'html-react-parser';
import {
  Band,
  BandText,
  ModalContentContainer,
  ModuleContentText,
  SecondBand,
} from './gameBlockModal.styles';
import { H2 } from '../../global.styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));

export default function GameBlockModal() {
  const classes = useStyles();

  const { isModalOpen, setIsModalOpen, modalContent } =
    useContext(ModalsContext);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <ModalContentContainer className={classes.paper}>
          <Band>
            <BandText>
              <H2>About</H2>
            </BandText>
          </Band>
          <ModuleContentText>{parse(modalContent)}</ModuleContentText>
          <SecondBand>
            <BandText>
              <H2>Education</H2>
            </BandText>
          </SecondBand>
          <ModuleContentText>{parse(modalContent)}</ModuleContentText>
        </ModalContentContainer>
      </Modal>
    </>
  );
}
