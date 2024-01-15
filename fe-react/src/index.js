import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import display from './display';
import App from './App';
import { ShellBar, ShellBarItem, ThemeProvider, Button, List, StandardListItem } from '@ui5/webcomponents-react';
import './index.css';



const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={display}>
    <ThemeProvider>
      <React.StrictMode>
        <ShellBar
          primaryTitle="search bar"
          startContent={<ShellBarItem src="sap-icon://menu2" />}
          endContent={<ShellBarItem text="User" />}
        />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);