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
import { motion } from 'framer-motion';
import { ProjectsVariant } from '../../../utils/framer-motion/variants.utils';

export const AboutSection = () => {
  const { matches } = useContext(GlobalContext);

  const imagesWidth = !matches
    ? RESPO_SCALES.ABOUT_SECTION.regular
    : RESPO_SCALES.ABOUT_SECTION.mobile;

  return (
  <motion.div
    variants={ProjectsVariant}
    initial='enter'
    whileInView='visible' >
      <AboutSectionContainer>
        <AboutSectionWrapper matches={matches}>
          <AboutSectionImageAndBadgeContainer>
            <AboutSectionImage />
            <AboutSectionIconsContainer>
              <Icon icon='logos:react' width={imagesWidth} />
              <Icon icon='simple-icons:nextdotjs' width={imagesWidth} />
              <Icon icon='logos:typescript-icon' width={imagesWidth} />
              <Icon icon='logos:javascript' width={imagesWidth} />
              <Icon icon='logos:tailwindcss-icon' width={imagesWidth} />
              <Icon icon='skill-icons:styledcomponents' width={imagesWidth} />
              <Icon icon='logos:msw-icon' width={imagesWidth} />
              <Icon icon='logos:jest' width={imagesWidth} />
              <Icon icon='file-icons:chartjs' width={imagesWidth} />
              <Icon icon='logos:redux' width={imagesWidth} />
              <Icon icon='vscode-icons:file-type-css' width={imagesWidth} />
              <Icon icon='vscode-icons:file-type-html' width={imagesWidth} />
              <Icon icon='mdi:git' width={imagesWidth} />
              <Icon icon='logos:vitejs' width={imagesWidth} />
              <Icon icon='logos:figma' width={imagesWidth} />
            </AboutSectionIconsContainer>
          </AboutSectionImageAndBadgeContainer>
          <AboutSectionText>
         I am a React Front End developer at Capgemini.
         I work in the same position at CoderCrew,
         where I develop applications for non-profit organizations to polish
         my skills and gain knowledge (currently I work with NEXT JS and tailwind).
         In my free time I like to climb and play tennis (I also love taking a sip of good coffee). 
          </AboutSectionText>
        </AboutSectionWrapper>
      </AboutSectionContainer>
  </motion.div>
  );
};
