import styled from 'styled-components';
import {
  Colors,
  StandardFlexContainer,
  StandardFlexContainerMixing,
} from '../../../../global.styles';

export const ProjectContent = styled(StandardFlexContainer)``;

export const ProjectPreviewContainer = styled.a.attrs({
  href: 'https://www.pszczeli-plaster.statkiewiczmateusz.pl/',
  target: '_blank',
})`
  ${StandardFlexContainerMixing}
  // border: 1px solid red;

  flex-basis: 30%;
`;

export const ProjectDescription = styled(StandardFlexContainer)`
  flex-basis: 60%;
  border-left: 1px solid ${Colors.tertiary};
  padding-left: 1rem;
  margin-left: 1rem;
`;

export const DescriptionPoints = styled.ul`
  flex-direction: column;
  padding-left: 1rem;
  padding-top: 1rem;
`;

export const PreviewImage = styled.img`
  width: 100%;
`;
