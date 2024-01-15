import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import display from './display';
import App from './App';
import { ThemeProvider } from '@ui5/webcomponents-react';
import './index.css';



const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={display}>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);