import { useContext, useEffect, useRef } from 'react';
import { ModalsContext } from '../../contexts/modals.context';

import {
  CustomDialogTitle,
  CustomDialogActions,
  CustomDialog,
  CustomDialogContent,
  DialogImage,
  DialogTitleContent,
} from './gameBlockModal.styles';

import { Button, DialogContentText } from '@material-ui/core';
import {
  GAME_BLOCK_CONTENT_INDEXES,
  getGameBlockContent,
} from '../../utils/modal/getModalContent.utils';
import { H3 } from '../../global.styles';

import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import * as React from 'react';
import { LogoImage } from '../logo/logoImage/logoImage.component';

const Transition: any = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<any>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function GameBlockModal() {
  const descriptionElementRef = useRef<HTMLElement>(null);
  const {
    isModalOpen,
    setIsModalOpen,

    modalContent,
    setModalContent,

    modalContentTitle,
    setModalContentTitle,

    modalContentImage,
    setModalContentImage,

    clickedGameBlockIndex,
    setClickedGameBlockIndex,
  } = useContext(ModalsContext);

  const ifPreviousButtonDisabled =
    clickedGameBlockIndex === GAME_BLOCK_CONTENT_INDEXES.LITTLE_BIT_ABOUT_ME
      ? true
      : false;

  const ifNextButtonDisabled =
    clickedGameBlockIndex === GAME_BLOCK_CONTENT_INDEXES.CONTACT ? true : false;

  const closeHandler = () => {
    setIsModalOpen(false);
  };

  const nextHandler = () => setClickedGameBlockIndex(clickedGameBlockIndex + 1);

  const previousHandler = () =>
    setClickedGameBlockIndex(clickedGameBlockIndex - 1);

  useEffect(() => {
    if (isModalOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
    const { title, content, imgURL } = getGameBlockContent(
      clickedGameBlockIndex
    );
    setModalContentTitle(title);
    setModalContent(content);
    setModalContentImage(imgURL ? imgURL : '/');
  }, [clickedGameBlockIndex]);
  return (
    <>
      <CustomDialog
        open={isModalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeHandler}
        scroll={'paper'}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
      >
        <CustomDialogTitle>
          <DialogTitleContent>
            <H3>{modalContentTitle}</H3>
            <LogoImage />
          </DialogTitleContent>
        </CustomDialogTitle>
        <CustomDialogContent>
          {modalContentImage !== '/' ? (
            <DialogImage src={modalContentImage} />
          ) : null}
          <DialogContentText
            id='scroll-dialog-description'
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {modalContent}
          </DialogContentText>
        </CustomDialogContent>
        <CustomDialogActions>
          <Button disabled={ifPreviousButtonDisabled} onClick={previousHandler}>
            Previous
          </Button>
          <Button disabled={ifNextButtonDisabled} onClick={nextHandler}>
            Next
          </Button>
        </CustomDialogActions>
      </CustomDialog>
    </>
  );
}
