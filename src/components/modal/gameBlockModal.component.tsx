import { useContext, useEffect, useRef } from 'react';
import { ModalsContext } from '../../contexts/modals.context';

import {
  CustomDialogTitle,
  CustomDialogStepper,
  CustomDialog,
  CustomDialogContent,
  DialogTitleContent,
} from './gameBlockModal.styles';

import { Button, DialogContentText, useTheme } from '@material-ui/core';
import {
  GAME_BLOCK_CONTENT_INDEXES,
  getGameBlockContent,
} from '../../utils/modal/getModalContent.utils';
import { Colors, H4 } from '../../global.styles';

import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import * as React from 'react';
import { LogoImage } from '../logo/logoImage/logoImage.component';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';

const Transition: any = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<any>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});
const KeyboardSwipeView = bindKeyboard(SwipeableViews);

export default function GameBlockModal() {
  const descriptionElementRef = useRef<HTMLElement>(null);
  const {
    isModalOpen,
    setIsModalOpen,
    clickedGameBlockIndex,
    setClickedGameBlockIndex,
  } = useContext(ModalsContext);
  const theme = useTheme();
  const maxSteps = Object.keys(GAME_BLOCK_CONTENT_INDEXES).length;

  const closeHandler = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setClickedGameBlockIndex(
      (prevclickedGameBlockIndex) => prevclickedGameBlockIndex + 1
    );
  };

  const handleBack = () => {
    setClickedGameBlockIndex(
      (prevclickedGameBlockIndex) => prevclickedGameBlockIndex - 1
    );
  };

  const handleStepChange = (step: number) => {
    setClickedGameBlockIndex(step);
  };

  useEffect(() => {
    if (isModalOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, []);
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
        <KeyboardSwipeView
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={clickedGameBlockIndex}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          resistance={true}
          // springConfig={{ tension: 300, friction: 30 }}
        >
          {Object.keys(GAME_BLOCK_CONTENT_INDEXES).map((key, index) => {
            const { title, content, imgURL } = getGameBlockContent(index);
            return (
              <div key={title}>
                <CustomDialogTitle>
                  <DialogTitleContent>
                    <H4 style={{ color: `${Colors.primary}` }}>{title}</H4>
                    <LogoImage />
                  </DialogTitleContent>
                </CustomDialogTitle>
                <CustomDialogContent>
                  <DialogContentText
                    id='scroll-dialog-description'
                    ref={descriptionElementRef}
                    tabIndex={-1}
                  >
                    {content}
                  </DialogContentText>
                </CustomDialogContent>
              </div>
            );
          })}
        </KeyboardSwipeView>

        <CustomDialogStepper
          steps={maxSteps}
          position='static'
          activeStep={clickedGameBlockIndex}
          nextButton={
            <Button
              size='small'
              onClick={handleNext}
              disabled={clickedGameBlockIndex === maxSteps - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size='small'
              onClick={handleBack}
              disabled={clickedGameBlockIndex === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </CustomDialog>
    </>
  );
}
