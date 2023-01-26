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
          {/* <WelcomeTitle>
            <MyNameOnHp> Hello </MyNameOnHp>
          </WelcomeTitle>

          <DescriptionHp> i am a smooth creator of webapp's </DescriptionHp> */}
          <HpClick />
        </WelcomeContainer>
        <HPClickableWrapper>
          <GameBlocksContainer />
        </HPClickableWrapper>
      </HomePageWrapper>
      <Footer />
    </>
  );
};
