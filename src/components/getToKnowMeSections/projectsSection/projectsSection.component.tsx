import { ProjectsArray } from '../../../utils/projects/getTheProject.utils';
import { Project } from './projects/project.component';
import { ProjectsSectionContainer } from './projectsSection.styles';

export const ProjectsSection = () => {
  return (
    <ProjectsSectionContainer>
      {ProjectsArray.map((project) => {
        const { iconType, title, description, descriptionPoints, image } =
          project;
        return (
          <Project
            key={title}
            iconType={iconType}
            title={title}
            description={description}
            descriptionPoints={descriptionPoints}
            previewImage={image}
          />
        );
      })}
    </ProjectsSectionContainer>
  );
};
