import { useContext, useEffect, useRef } from 'react';
import { ModalsContext } from '../../contexts/modals.context';

import {
  Band,
  BandText,
  ModuleContent,
  SecondBand,
  SecondBandText,
  DialogTitleCustom,
  DialogActionsCustom,
} from './gameBlockModal.styles';

import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { GAME_BLOCK_BUTTONS_MODALS_CONTENT } from '../modalsContents/getModalContent.function';

import Parser from 'html-react-parser';

import { AboutSection } from '../aboutSection/aboutSection.component';

export default function GameBlockModal() {
  const {
    isModalOpen,
    setIsModalOpen,
    modalContent,
    setModalContent,
    modalContentTitle,
    setModalContentTitle,
    clickedGameBlockIndex,
    setClickedGameBlockIndex,
  } = useContext(ModalsContext);
  console.log(modalContent);
  const handleClose = () => {
    setIsModalOpen(false);
    setClickedGameBlockIndex(-1);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (isModalOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
    switch (clickedGameBlockIndex) {
      case 0:
        setModalContentTitle(
          GAME_BLOCK_BUTTONS_MODALS_CONTENT.START_BUTTON.title
        );
        setModalContent(
          GAME_BLOCK_BUTTONS_MODALS_CONTENT.START_BUTTON.content(
            clickedGameBlockIndex
          )
        );
        break;
      case 1:
        setModalContentTitle(
          GAME_BLOCK_BUTTONS_MODALS_CONTENT.SECOND_BUTTON.title
        );
        setModalContent(
          GAME_BLOCK_BUTTONS_MODALS_CONTENT.SECOND_BUTTON.content(
            clickedGameBlockIndex
          )
        );
        break;

      case 2:
        setModalContentTitle(
          GAME_BLOCK_BUTTONS_MODALS_CONTENT.THIRD_BUTTON.title
        );
        setModalContent(
          GAME_BLOCK_BUTTONS_MODALS_CONTENT.THIRD_BUTTON.content(
            clickedGameBlockIndex
          )
        );
        break;
      case 3:
        setModalContentTitle(
          GAME_BLOCK_BUTTONS_MODALS_CONTENT.END_BUTTON.title
        );
        setModalContent(
          GAME_BLOCK_BUTTONS_MODALS_CONTENT.END_BUTTON.content(
            clickedGameBlockIndex
          )
        );
        break;
      default:
        return;
    }
  }, [isModalOpen]);
  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
      >
        <DialogTitleCustom> {modalContentTitle}</DialogTitleCustom>

        <DialogContent>
          <DialogContentText
            id='scroll-dialog-description'
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {modalContent}
          </DialogContentText>
        </DialogContent>
        <DialogActionsCustom>
          <Button onClick={handleClose}>Back</Button>
          <Button onClick={handleClose}>Forth</Button>
        </DialogActionsCustom>
      </Dialog>
    </>
  );
}
