import { AboutSection } from '../aboutSection/aboutSection.component';
import { EducationSectionText } from '../educationSection/educationSection.component';

export const getGameBlockContent = (index: number) => {
  switch (index) {
    case 0:
      return {
        title: 'Start',
        content: <>start block content</>,
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
      return { title: 'Projects', content: <>third block content</> };
    case 3:
      return { title: 'End', content: <>end block content</> };
    default:
      return { title: 'Default', content: <div>default block content</div> };
  }
};
