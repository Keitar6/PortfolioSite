import { StylesProvider } from '@material-ui/core';
import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalProvider } from './contexts/global.context';
import { ModalsProvider } from './contexts/modals.context';
import { GlobalStyle } from './global.styles';
import reportWebVitals from './reportWebVitals';

export const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <ModalsProvider>
          <StylesProvider injectFirst>
            <GlobalStyle />
            <App />
          </StylesProvider>
        </ModalsProvider>
      </GlobalProvider>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

