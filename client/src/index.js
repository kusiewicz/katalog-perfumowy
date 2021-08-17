import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';

import GlobalStyle from './globalStyles';

ReactDOM.hydrate(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
