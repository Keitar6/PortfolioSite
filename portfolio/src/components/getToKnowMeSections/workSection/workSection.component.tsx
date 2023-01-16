import { PLarge, H4 } from '../../../global.styles';
import {
  WorkSectionContainer,
  ResponsibilitiesContainer,
  ExperienceContainer,
  DatesContainer,
  ExperienceText,
} from './workSection.styles';

export const WorkSection = () => {
  return (
    <WorkSectionContainer>
      <ExperienceContainer>
        <DatesContainer>2018/02 - 2018/10</DatesContainer>
        <ExperienceText>
          <H4>Software / embedded engineer</H4>
          <PLarge>Science club "Robocik", Wrocław, Polska</PLarge>
          <ResponsibilitiesContainer></ResponsibilitiesContainer>
        </ExperienceText>
      </ExperienceContainer>
    </WorkSectionContainer>
  );
};
