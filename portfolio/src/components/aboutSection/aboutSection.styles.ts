import styled from 'styled-components';

export const AboutSectionContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

export const AboutSectionImage = styled.img.attrs({
  src: '/resources/selfPhoto.jpg',
  alt: 'Author Photo',
})`
  width: 12rem;
  border-radius: 1rem;
`;
export const AboutSectionText = styled.p`
  transform: rotate(0deg);
  padding: 0.5rem 0.5rem;
  margin: 0.8rem 0rem;
`;
