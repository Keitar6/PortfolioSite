import { H1, H4 } from '../../../global.styles';
import {
  EducationalDatesContainer,
  EducationalSchoolsContainer,
  EduSectionWrapper,
  EducationContainer,
  SchoolDate,
  EducationalSchoolDescription,
} from './educationSection.styles';

export const EducationSectionText = () => {
  return (
    <EduSectionWrapper>
      <H1>Education</H1>
      <EducationContainer>
        <EducationalSchoolsContainer>
          <EducationalDatesContainer>
            <SchoolDate>2020/10</SchoolDate>
          </EducationalDatesContainer>

          <EducationalSchoolDescription>
            <H4>Mechanics, Master degree</H4>
          </EducationalSchoolDescription>
        </EducationalSchoolsContainer>
        <EducationalSchoolsContainer>
          <EducationalDatesContainer>
            <SchoolDate>- Present</SchoolDate>
          </EducationalDatesContainer>
          <EducationalSchoolDescription>
            <div>University of Science and Technology in Wroclaw</div>
          </EducationalSchoolDescription>
        </EducationalSchoolsContainer>
      </EducationContainer>
      <EducationContainer>
        <EducationalSchoolsContainer>
          <EducationalDatesContainer>
            <SchoolDate>2016/10</SchoolDate>
          </EducationalDatesContainer>

          <EducationalSchoolDescription>
            <H4>Automatic Control and Robotics, Bachelor of Engineering</H4>
          </EducationalSchoolDescription>
        </EducationalSchoolsContainer>
        <EducationalSchoolsContainer>
          <EducationalDatesContainer>
            <SchoolDate>- 2020/02</SchoolDate>
          </EducationalDatesContainer>
          <EducationalSchoolDescription>
            <div>University of Science and Technology in Wroclaw</div>
          </EducationalSchoolDescription>
        </EducationalSchoolsContainer>
      </EducationContainer>
    </EduSectionWrapper>
  );
};
