import styled from 'styled-components';
import { Colors, StandardFlexContainer } from '../../global.styles';

export const EducationalDatesContainer = styled(StandardFlexContainer)`
  border-right: 1px solid ${Colors.dark};
  // padding-right: 0.5rem;
  margin-right: 0.5rem;

  justify-content: space-between;
  flex-direction: column;
  flex: 1 1 20%;
`;

export const SchoolDate = styled.div`
  display: flex;
`;

export const EducationalSchoolsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EducationalSchoolDescription = styled(StandardFlexContainer)`
  flex: 1 1 80%;
  justify-content: start;
`;

export const EduSectionWrapper = styled.div``;

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
`;
