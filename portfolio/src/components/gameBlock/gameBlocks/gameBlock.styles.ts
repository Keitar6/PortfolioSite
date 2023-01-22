import styled from "styled-components";
import {
	Colors,
	goldenFontColor,
	StandardFlexContainer,
	Typography,
} from "../../../global.styles";

export const GameBlockContainer = styled(StandardFlexContainer)`

	background-color: ${Colors.primary};
	border: 1px solid ${Colors.primary};
	border-radius: ${Typography.buttonsRadius};
	cursor: pointer;
	width: 3rem;
	height: 3rem;
	transition: all 0.5s ease-out;
	&:hover {
		color: ${Colors.primary};
		background-color: ${Colors.light};
		border: 1px solid ${Colors.primary};
	}
`;