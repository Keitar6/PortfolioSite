import { AboutSection } from '../components/getToKnowMeSections/aboutSection/aboutSection.component';
import { EducationSectionText } from '../components/getToKnowMeSections/educationSection/educationSection.component';
import { ContactSection } from '../components/getToKnowMeSections/contactSection/contactSection.component';
import { ProjectsSection } from '../components/getToKnowMeSections/projectsSection/projectsSection.component';
import { StartSection } from '../components/getToKnowMeSections/startSection/startSection.component';
import { WorkSection } from '../components/workSection/workSection.component';

export const getGameBlockContent = (index: number) => {
  switch (index) {
    case 0:
      return {
        title: 'LITTLE BIT ABOUT ME',
        content: <StartSection />,
      };
    case 1:
      return {
        title: 'EDUCATION',
        content: (
          <>
            {/* <WorkSection /> */}
            <EducationSectionText />
          </>
        ),
      };
    case 2:
      return { title: 'PROJECTS', content: <ProjectsSection /> };
    case 3:
      return { title: 'CONTACT', content: <ContactSection /> };
    default:
      return { title: 'DEFAULT', content: <div>Some Error i occured.</div> };
  }
};
