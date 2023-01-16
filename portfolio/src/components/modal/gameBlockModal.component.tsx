import { useContext, useEffect, useRef } from 'react';
import { ModalsContext } from '../../contexts/modals.context';

import {
  DialogTitleCustom,
  DialogActionsCustom,
} from './gameBlockModal.styles';

import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { getGameBlockContent } from '../../functions/getModalContent.function';
import { Title } from '../../global.styles';
export default function GameBlockModal() {
  const {
    isModalOpen,
    setIsModalOpen,
    modalContent,
    setModalContent,
    modalContentTitle,
    setModalContentTitle,
    clickedGameBlockIndex,
  } = useContext(ModalsContext);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (isModalOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
    const { title, content } = getGameBlockContent(clickedGameBlockIndex);
    setModalContentTitle(title);
    setModalContent(content);
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
        <DialogTitleCustom>
          <Title>{modalContentTitle}</Title>{' '}
        </DialogTitleCustom>

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
