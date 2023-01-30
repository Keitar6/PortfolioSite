import { EducationSectionText } from '../../components/getToKnowMeSections/educationSection/educationSection.component';
import { ContactSection } from '../../components/getToKnowMeSections/contactSection/contactSection.component';
import { ProjectsSection } from '../../components/getToKnowMeSections/projectsSection/projectsSection.component';
import { StartSection } from '../../components/getToKnowMeSections/startSection/startSection.component';

export const GAME_BLOCK_CONTENT_INDEXES = {
  ABOUT: 0,
  EDUCATION: 1,
  PROJECTS: 2,
  CONTACT: 3,
};

export const getGameBlockContent = (index: number) => {
  switch (index) {
    case GAME_BLOCK_CONTENT_INDEXES.ABOUT:
      return {
        title: 'ABOUT ME',
        content: <StartSection />,
      };
    case GAME_BLOCK_CONTENT_INDEXES.EDUCATION:
      return {
        title: 'EDUCATION',
        content: (
          <>
            <EducationSectionText />
          </>
        ),
      };
    case GAME_BLOCK_CONTENT_INDEXES.PROJECTS:
      return { title: 'PROJECTS', content: <ProjectsSection /> };
    case GAME_BLOCK_CONTENT_INDEXES.CONTACT:
      return {
        title: 'CONTACT',
        content: <ContactSection />,
        imgURL: '/resources/CONTACT_BUSINESSMANLEANING.png',
      };
    default:
      return { title: 'DEFAULT', content: <div>Some Error i occured.</div> };
  }
};
