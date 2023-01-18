import { GameBlocksContainer } from '../../components/gameBlock/gameBlocks.component';
import {
  DescriptionHp,
  MyNameOnHp,
  HomePageContainer,
  WelcomeContainer,
} from './homePage.styles';

import { Footer } from '../../components/footer/footer.component';

export const HomePage = () => {
  return (
    <>
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
        </WelcomeContainer>
      </HomePageContainer>
      <Footer />
    </>
  );
};
