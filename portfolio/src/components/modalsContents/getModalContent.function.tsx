import { AboutSection } from '../getToKnowMeSections/aboutSection/aboutSection.component';
import { EducationSectionText } from '../getToKnowMeSections/educationSection/educationSection.component';
import { EndSection } from '../getToKnowMeSections/endSection/endSection.component';
import { ProjectsSection } from '../getToKnowMeSections/projectsSection/projectsSection.component';
import { StartSection } from '../getToKnowMeSections/startSection/startSection.component';

export const getGameBlockContent = (index: number) => {
  switch (index) {
    case 0:
      return {
        title: 'Start',
        content: <StartSection />,
      };
    case 1:
      return {
        title: 'About / Education',
        content: (
          <>
            <AboutSection />
            <EducationSectionText />
          </>
        ),
      };
    case 2:
      return { title: 'Projects', content: <ProjectsSection /> };
    case 3:
      return { title: 'End', content: <EndSection /> };
    default:
      return { title: 'Default', content: <div>Some Error i occured.</div> };
  }
};
