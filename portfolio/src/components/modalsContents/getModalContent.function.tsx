import { AboutSection } from '../aboutSection/aboutSection.component';
import { EducationSectionText } from '../educationSection/educationSection.component';

export const GAME_BLOCK_BUTTONS_MODALS_CONTENT = {
  START_BUTTON: {
    title: 'Start',
    content: (index: number) => getGameBlockContent(index),
  },
  SECOND_BUTTON: {
    title: 'About / Education',
    content: (index: number) => getGameBlockContent(index),
  },
  THIRD_BUTTON: {
    title: 'Projects',
    content: (index: number) => getGameBlockContent(index),
  },
  END_BUTTON: {
    title: 'End',
    content: (index: number) => getGameBlockContent(index),
  },
};

const getGameBlockContent = (index: number) => {
  switch (index) {
    case 0:
      return <>start block content</>;
    case 1:
      return (
        <>
          <AboutSection />
          <EducationSectionText />
        </>
      );
    case 2:
      return <>third block content</>;
    case 3:
      return <>end block content</>;
    default:
      return <div>nufing</div>;
  }
};
