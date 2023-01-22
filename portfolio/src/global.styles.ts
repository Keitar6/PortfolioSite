import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
export const Colors = {
	primary: "#5F3495",
	primaryRGBA: "#5F3495e",
	secondary: "#734080",
	tertiary: "#0000008a",

	dark: "#000000",

	light: "#faeff0",
	lightBlue: "#54b3d6",

	pushTheButton: "red",

	arrowsColor: "#000000",
	arrowsColor2: "#32CD32",

	googleButtonBCKG: "#4285f4",
	googleButtonHover: "#357ae8",
	logo_colors: {
		outer: "#916128",
		inner: "#e8db9b",
	},
};
export const Typography = {
	fontType: '"Roboto", "Helvetica", "Arial", sans-serif',
	fontSizes: {
		HPName: "6rem",
		H1: "3.05 rem",
		H2: "2.44 rem",
		H3: "1.95 rem",
		H4: "1.56 rem",
		H5: "1.25 rem",
		H6: "1 rem",
		PLarge: "1.5 rem",
		PBase: "1rem",
		PSmall: "0.75rem",
	},
	buttonsRadius: "0.7rem",
	modalRadius: "1rem",
	fontColor: "#000000",
};

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
	color: ${Typography.fontColor};
  background-color: ${Colors.light};
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
	font-weight: bold;
`;
export const H2 = styled.h2`
	font-size: ${Typography.fontSizes.H2};
`;

export const H3 = styled.h3`
	font-size: ${Typography.fontSizes.H3};
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
export const PBase = styled.p`
	font-size: ${Typography.fontSizes.PBase};
`;
export const PSmall = styled.p`
	font-size: ${Typography.fontSizes.PSmall};
`;

export const StandardFlexContainer = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;
export const Title = styled(H3)`
	// border-bottom: 2px solid;
	// border-image-slice: 1;

	// border-image-source: linear-gradient(
	//   to left,
	//   ${Colors.primary},
	//   ${Colors.dark}
	// );
	
	padding-bottom: 0.5rem;
	position: relative;

	&::before {
		content: "";
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
	cursor: pointer;
	position: relative;
	color: inherit;
	text-decoration: inherit;
	padding: 0.4rem;
	&::before {
		content: "";
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
