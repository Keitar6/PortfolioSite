import { Icon } from '@iconify/react';
import { FC, PropsWithChildren } from 'react';

import { H4, PBase } from '../../../../global.styles';
import {
  ProjectContent,
  ProjectPreviewContainer,
  ProjectDescription,
  DescriptionPoints,
} from './project.styles';

type ProjectProps = {
  iconType: string;
  title: string;
  description: string;
  descriptionPoints: string[];
};

export const Project: FC<PropsWithChildren<ProjectProps>> = ({
  iconType,
  title,
  description,
  descriptionPoints,
}) => {
  return (
    <ProjectContent>
      <ProjectPreviewContainer>
        <Icon icon={`${iconType}`} width='48' />
      </ProjectPreviewContainer>
      <ProjectDescription>
        <H4>{title}</H4>
        <PBase>{description}</PBase>
        <DescriptionPoints>
          {descriptionPoints.map((descriptionPoint) => {
            return <li>{descriptionPoint}</li>;
          })}
        </DescriptionPoints>
      </ProjectDescription>
    </ProjectContent>
  );
};
