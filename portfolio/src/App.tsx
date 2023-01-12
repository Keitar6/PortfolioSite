import { AppContainer } from './App.style';
import GameBlockModal from './components/modal/gameBlockModal.component';

import { Routing } from './routing';

function App() {
  return (
    <AppContainer>
      <GameBlockModal/>
      <Routing />
    </AppContainer>
  );
}

export default App;

