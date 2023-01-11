import styled from 'styled-components';
import {
  Colors,
  HPName,
  StandardFlexContainer,
  Typography,
} from '../../global.styles';

export const HomePageContainer = styled(StandardFlexContainer)`
  flex-direction: row;
  // border: 1px solid green;
  height: 100%;
`;

export const WelcomeContainer = styled(StandardFlexContainer)`
  justify-content: start;
  align-items: start;
  flex-direction: column;
  // border: 1px solid green;
  flex: 1 1 70%;
  padding: 0rem 2rem;
  height: 100%;
`;

export const MyNameOnHp = styled(HPName)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionHp = styled.p`
  font-size: ${Typography.fontSizes.PBase};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecretButtonContainer = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: center;
`;
export const SecretButton = styled.button`
  display: flex;
  justify-content: center;
  width: 17%;
  padding: 0.6rem;
  margin-top: 1rem;
  cursor: pointer;
  color: ${Colors.light};
  background-color: ${Colors.pushTheButton};
  border-radius: ${Typography.buttonsRadius};
  border: 1px solid ${Colors.primary};

  transition: all 0.5s ease-out;

  &:hover {
    color: ${Colors.primary};
    background-color: ${Colors.light};
  }
`;
