import { H5 } from '../../../global.styles';
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
      <img
        src='/resources/LOGO_PWR.png'
        alt='Wroclaw University of Science and Technology Logo'
      />
      <EducationContainer>
        <EducationalSchoolsContainer>
          <EducationalDatesContainer>
            <SchoolDate>2020/10</SchoolDate>
          </EducationalDatesContainer>

          <EducationalSchoolDescription>
            <H5>Mechanics, Master degree</H5>
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
            <H5>Automatic Control and Robotics, Bachelor of Engineering</H5>
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
