import styled from 'styled-components';
import {
  Colors,
  StandardFlexContainer,
  Typography,
} from '../../../global.styles';

export const GameBlockContainer = styled(StandardFlexContainer)<{
  width: number;
}>`
  background-color: ${Colors.primary};
  border: 1px solid ${Colors.primary};
  color: ${Colors.light};
  border-radius: ${Typography.buttonsRadius};
  cursor: pointer;
  width: ${(props) => props.width}rem;
  height: ${(props) => props.width}rem;
  transition: all 0.5s ease-out;
  &:hover {
    color: ${Colors.primary};
    background-color: ${Colors.light};
    border: 1px solid ${Colors.primary};
  }
`;
