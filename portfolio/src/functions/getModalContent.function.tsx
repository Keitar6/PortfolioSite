import { AboutSection } from '../components/getToKnowMeSections/aboutSection/aboutSection.component';
import { EducationSectionText } from '../components/getToKnowMeSections/educationSection/educationSection.component';
import { ContactSection } from '../components/getToKnowMeSections/contactSection/contactSection.component';
import { ProjectsSection } from '../components/getToKnowMeSections/projectsSection/projectsSection.component';
import { StartSection } from '../components/getToKnowMeSections/startSection/startSection.component';

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
      return { title: 'Contact', content: <ContactSection /> };
    default:
      return { title: 'Default', content: <div>Some Error i occured.</div> };
  }
};
