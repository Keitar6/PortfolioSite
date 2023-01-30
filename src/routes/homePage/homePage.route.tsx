import { GameBlocksContainer } from '../../components/gameBlock/gameBlocks.component';
import {
  HomePageWrapper,
  WelcomeContainer,
  HPClickableWrapper,
} from './homePage.styles';

import { Footer } from '../../components/footer/footer.component';
import { HpClick } from '../../components/hpClickContent/hpClickContent.component';

export const HomePage = () => {
  return (
    <>
      <HomePageWrapper>
        <WelcomeContainer>
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
