import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "./langs/en.json";
import ar from "./langs/ar.json";
import fr from "./langs/fr.json";
import { BrowserRouter } from 'react-router-dom';
import { createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core';
import Provider from './utils/provider';
import DocsLayout from './components/layout/DocsLayout';
import AppRouterIndex from './components/AppRouterIndex';

const locales = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  fr: {
    translation: fr,
  },
};
i18n.use(initReactI18next).init({
  resources: locales,
  lng: 'fr',

  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const myColor: MantineColorsTuple = [
  '#feebeb',
  '#f7d3d3',
  '#f4a3a3',
  '#f2706f',
  '#f04743',
  '#f03027',
  '#f0251a',
  '#d61b10',
  '#be140d',
  '#a60707'
];

const theme = createTheme({
  primaryColor: 'myColor',
  colors: {
    myColor,
  }
});
root.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <DocsLayout>
            <AppRouterIndex />
            <App />
          </DocsLayout>
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
