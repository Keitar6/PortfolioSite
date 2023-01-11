import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './App.style';
import { GlobalStyle } from './global.styles';
import { Routing } from './routing';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />

      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;

