import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const Typography = {
  fontType: '"Playfair Display","Tapestry", "Dancing Script", cursive',
  fontSizes: {
    HPName: '6rem',
    H1: '3.05 rem',
    H2: '2.44 rem',
    H3: '1.95 rem',
    H4: '1.56 rem',
    H5: '1.25 rem',
    H6: '1 rem',
    PLarge: '1.5 rem',
    PBase: '1rem',
    PSmal: '0.75rem',
  },
  buttonsRadius: '0.7rem',
};

export enum Colors {
  primary = '#5F3495',
  primaryRGBA = '#5F3495e',
  secondary = '#FFFFFF',
  tertiary = '#F8BE0E',

  dark = '#000000',

  light = '#faeff0',
  lightBlue = '#54b3d6',

  pushTheButton = 'red',

  googleButtonBCKG = '#4285f4',
  googleButtonHover = '#357ae8',
}

export const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
#root{
  display: flex;
  flex-direction: column;
  height: 100%;
}
body {
  height: 100vh;
	font-family: ${Typography.fontType};
	color: ${Colors.dark};
  background-color: ${Colors.primary};
  padding: 5rem;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

    // @media screen and (max-width: 800px){
    //     padding: 10px;
    // }

}
`;

export const HPName = styled.h1`
  font-size: ${Typography.fontSizes.HPName};
  color: ${Colors.primary};
`;

export const H1 = styled.h1`
  font-size: ${Typography.fontSizes.H1};
`;
export const H2 = styled.h2`
  font-size: ${Typography.fontSizes.H2};
`;

export const H3 = styled.h3`
  font-size: ${Typography.fontSizes.H3};
  color: ${Colors.primary};
`;

export const H4 = styled.h4`
  font-size: ${Typography.fontSizes.H4};
`;

export const H5 = styled.h5`
  font-size: ${Typography.fontSizes.H5};
`;

export const H6 = styled.h6`
  font-size: ${Typography.fontSizes.H6};
`;

export const PLarge = styled.p`
  font-size: ${Typography.fontSizes.PLarge};
`;

export const StandardFlexContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const Title = styled(H3)`
  border-bottom: 2px solid;
  border-image-slice: 1;

  border-image-source: linear-gradient(
    to left,
    ${Colors.primary},
    ${Colors.dark}
  );
  padding-bottom: 0.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-left: 0.2rem solid ${Colors.primary};
    border-top: 0.2rem solid ${Colors.dark};
    border-radius: 0.6rem 0 00rem;
    top: -0.5rem;
    left: -1rem;
  }
`;

export const BareLink = styled(Link)`
  cursor: pointer;
  text-decoration: inherit;
  color: inherit;
`;

export const TextLink = styled(Link)`
  cursor: default;
  position: relative;
  color: inherit;
  text-decoration: inherit;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #18272f;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
