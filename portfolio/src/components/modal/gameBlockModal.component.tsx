import { useContext, useEffect, useRef } from 'react';
import { ModalsContext } from '../../contexts/modals.context';
import parse from 'html-react-parser';
import {
  Band,
  BandText,
  ModuleContent,
  SecondBand,
  SecondBandText,
  DialogContentHiddenScrollbar,
  DialogTitleCustom,
  DialogActionsCustom,
} from './gameBlockModal.styles';
import { EducationSectionText } from '../educationSection/educationSection.component';
import { Button, Dialog, DialogContentText } from '@material-ui/core';
import { AboutSection } from '../aboutSection/aboutSection.component';

export default function GameBlockModal() {
  const { isModalOpen, setIsModalOpen, modalContent } =
    useContext(ModalsContext);

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
  }, [isModalOpen]);

  return (
    <>
      {/* parse(modalContent) */}

      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
      >
        <DialogTitleCustom> About / Education</DialogTitleCustom>

        <DialogContentHiddenScrollbar>
          <DialogContentText
            id='scroll-dialog-description'
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <ModuleContent>
              <AboutSection />
            </ModuleContent>

            <EducationSectionText />
          </DialogContentText>
        </DialogContentHiddenScrollbar>
        <DialogActionsCustom>
          <Button onClick={handleClose}>Back</Button>
          <Button onClick={handleClose}>Forth</Button>
        </DialogActionsCustom>
      </Dialog>
    </>
  );
}
