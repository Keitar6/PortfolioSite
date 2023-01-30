import { ProjectsArray } from '../../../utils/projects/getTheProject.utils';
import { Project } from './projects/project.component';
import { ProjectsSectionContainer } from './projectsSection.styles';

import { motion } from 'framer-motion';
import { ProjectsVariant } from '../../../utils/framer-motion/variants.utils';

export const ProjectsSection = () => {
  return (
    <ProjectsSectionContainer>
      {ProjectsArray.map((project) => {
        const { iconType, title, description, descriptionPoints, image, url } =
          project;
        return (
          <motion.div
            variants={ProjectsVariant}
            initial='enter'
            whileInView='visible'
          >
            <Project
              key={title}
              iconType={iconType}
              title={title}
              description={description}
              descriptionPoints={descriptionPoints}
              previewImage={image}
              projectUrl={url}
            />
          </motion.div>
        );
      })}
    </ProjectsSectionContainer>
  );
};
