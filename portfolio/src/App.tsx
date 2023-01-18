import { AppContainer, HPBCKGImage } from './App.style';
import GameBlockModal from './components/modal/gameBlockModal.component';

import { Routing } from './routing';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Colors } from './global.styles';

function App() {
  return (
    <AppContainer>
      <GlobalStyles
        styles={{
          '*::-webkit-scrollbar': {
            width: '.5rem',
          },
          '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: `${Colors.primary}`,
            visibility: 'hidden',
            borderRadius: '5rem',
            transition: 'all 0.5s ease-out',
          },

          '*::-webkit-scrollbar-thumb:hover': {
            visibility: 'visible',
            transition: 'all 0.5s ease-out',
          },
        }}
      />
      <GameBlockModal />
      <Routing />

      <HPBCKGImage src='/resources/HP_meditation.png' />
    </AppContainer>
  );
}

export default App;

