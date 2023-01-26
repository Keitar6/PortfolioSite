import styled from 'styled-components';

export const LogoImageContainer = styled.img<{logoWidth:number}>`
  width: ${props=>props.logoWidth}rem;
  margin-right: 0.5rem;
`;
