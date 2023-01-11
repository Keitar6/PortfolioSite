import { GameBlocksContainer } from '../../components/gameBlock/gameBlocks.component';
import {
  DescriptionHp,
  MyNameOnHp,
  HomePageContainer,
  WelcomeContainer,
  SecretButton,
  SecretButtonContainer,
} from './homePage.styles';
import ScratchOff from 'react-card-scratch-off';

export const HomePage = () => {
  return (
    <HomePageContainer>
      <GameBlocksContainer />

      <WelcomeContainer>
        <MyNameOnHp>
          <em>Hi, hello!</em>
        </MyNameOnHp>
        <DescriptionHp>
          {' '}
          i am a FrontEnd Developer , coffe lover and a secrets lover?{' '}
        </DescriptionHp>
        <SecretButtonContainer>
          
          <SecretButton>Don't push me!</SecretButton>

        </SecretButtonContainer>
      </WelcomeContainer>
    </HomePageContainer>
  );
};
