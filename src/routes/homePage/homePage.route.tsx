import { GameBlocksContainer } from '../../components/gameBlock/gameBlocks.component';
import {
  DescriptionHp,
  MyNameOnHp,
  HomePageWrapper,
  WelcomeContainer,
  HPClickableWrapper,
  WelcomeTitle,
} from './homePage.styles';

import { Footer } from '../../components/footer/footer.component';
import { HpClick } from '../../components/hpClickContent/hpClickContent.component';

export const HomePage = () => {
  return (
    <>
      <HomePageWrapper>
        <WelcomeContainer>
          <WelcomeTitle>
            {`<Greeting> `}
            <MyNameOnHp> Hello </MyNameOnHp>
            {`</Greeting>`}
          </WelcomeTitle>

          <DescriptionHp> i am a smooth creator of webapp's </DescriptionHp>
        </WelcomeContainer>
        <HPClickableWrapper>
          <GameBlocksContainer />
          <HpClick />
        </HPClickableWrapper>
        <Footer />
      </HomePageWrapper>
    </>
  );
};
