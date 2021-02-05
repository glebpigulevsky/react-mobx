import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';
import en from './lang/en.json';

const messages = {
  en: en,
};

ReactDOM.render(

  <IntlProvider locale={'en'} messages={messages.en}>
    <App />
  </IntlProvider>
  ,
  document.getElementById('root'),
);
