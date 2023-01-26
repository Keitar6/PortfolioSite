import styled from 'styled-components';
import {
  Colors,
  HPName,
  StandardFlexContainer,
  Typography,
} from '../../global.styles';

export const HomePageWrapper = styled(StandardFlexContainer)`
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 100%;
`;

export const WelcomeContainer = styled(StandardFlexContainer)`
  flex-direction: column;
  width: 100%;
`;

export const HPClickableWrapper = styled(StandardFlexContainer)`
  flex-direction: row;
  flex-wrap: nowrap;
  // border: 1px solid red;
  width: 100%;
  height: 100%;
`;

export const MyNameOnHp = styled(HPName)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WelcomeTitle = styled.div`
  display: flex;
  font-size: ${Typography.fontSizes.PLarge};
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
