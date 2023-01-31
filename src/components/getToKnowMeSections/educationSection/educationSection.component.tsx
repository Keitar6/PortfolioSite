import { H5, PBase } from '../../../global.styles';
import {
  EducationalDatesContainer,
  EducationalSchoolsContainer,
  EduSectionWrapper,
  EducationContainer,
  SchoolDate,
  EducationalSchoolDescription,
  UniImage,
} from './educationSection.styles';

export const EducationSectionText = () => {
  return (
    <EduSectionWrapper>
      <UniImage
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
            <SchoolDate>Present</SchoolDate>
          </EducationalDatesContainer>
          <EducationalSchoolDescription>
            <PBase>University of Science and Technology in Wroclaw</PBase>
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
            <SchoolDate>2020/02</SchoolDate>
          </EducationalDatesContainer>
          <EducationalSchoolDescription>
            <PBase>University of Science and Technology in Wroclaw</PBase>
          </EducationalSchoolDescription>
        </EducationalSchoolsContainer>
      </EducationContainer>
    </EduSectionWrapper>
  );
};
