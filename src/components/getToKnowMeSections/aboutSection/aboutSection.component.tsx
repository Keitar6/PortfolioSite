import { useContext } from 'react';
import { Icon } from '@iconify/react';
import {
  AboutSectionImage,
  AboutSectionText,
  AboutSectionContainer,
  AboutSectionImageAndBadgeContainer,
  AboutSectionIconsContainer,
  AboutSectionWrapper,
} from './aboutSection.styles';
import { GlobalContext } from '../../../contexts/global.context';
import { RESPO_SCALES } from '../../../utils/mobileStyles/respoScales.utils';

export const AboutSection = () => {
  const { matches } = useContext(GlobalContext);

  const imagesWidth = !matches
    ? RESPO_SCALES.ABOUT_SECTION.regular
    : RESPO_SCALES.ABOUT_SECTION.mobile;

  return (
    <>
      <AboutSectionContainer>
        <AboutSectionWrapper matches={matches}>
          <AboutSectionImageAndBadgeContainer>
            <AboutSectionImage />
            <AboutSectionIconsContainer>
              <Icon icon='logos:react' width={imagesWidth} />
              <Icon icon='logos:redux' width={imagesWidth} />
              <Icon icon='logos:typescript-icon' width={imagesWidth} />
              <Icon icon='logos:javascript' width={imagesWidth} />
              <Icon icon='logos:angular-icon' width={imagesWidth} />
              <Icon icon='logos:firebase' width={imagesWidth} />
              <Icon icon='logos:figma' width={imagesWidth} />
              <Icon icon='vscode-icons:file-type-css' width={imagesWidth} />
              <Icon icon='vscode-icons:file-type-html' width={imagesWidth} />
              <Icon icon='mdi:git' width={imagesWidth} />
            </AboutSectionIconsContainer>
          </AboutSectionImageAndBadgeContainer>
          <AboutSectionText>
            I am a Front End developer with a React TS as my main technology but
            i am able to work with Angular TS as well. Make sure to check on my
            projects ! I see myself as a good coffee and a tennis player
            amateur. In the rest of my free time i do polish my pen spinning
            skills, folding origami and solving puzzles.
          </AboutSectionText>
        </AboutSectionWrapper>
      </AboutSectionContainer>
    </>
  );
};
