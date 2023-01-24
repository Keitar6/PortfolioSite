import styled from 'styled-components';
import { StandardFlexContainer } from '../../../global.styles';

export const AboutSectionContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

export const AboutSectionWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
`;

export const AboutSectionImageAndBadgeContainer = styled(StandardFlexContainer)`
  justify-content: start;
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const AboutSectionIconsContainer = styled(StandardFlexContainer)`
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const AboutSectionImage = styled.img.attrs({
  src: '/resources/selfPhoto.jpg',
  alt: 'Author Photo',
})`
  width: 14rem;
  border-radius: 1rem;
`;
export const AboutSectionText = styled.p`
  transform: rotate(0deg);
  padding: 0.5rem 0.5rem;
  margin: 0.8rem 0rem;
`;
