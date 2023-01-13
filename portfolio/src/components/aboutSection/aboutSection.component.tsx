import { H1 } from '../../global.styles';
import {
  AboutSectionImage,
  AboutSectionText,
  AboutSectionContainer,
} from './aboutSection.styles';

export const AboutSection = () => {
  return (
    <>
      <AboutSectionContainer>
        <H1>Little bit about me</H1>
        <AboutSectionImage />
        <AboutSectionText>
          I am a Front End developer with a React TS as my main technology but i
          am able to work with Angular TS as well. Make sure to check on my
          projects ! I see myself as a good coffee and a tennis player amateur.
          In the rest of my free time i do polish my pen spinning skills,
          folding origami and solving puzzles.
        </AboutSectionText>
      </AboutSectionContainer>
    </>
  );
};
