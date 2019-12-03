import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModelProvider } from '@jbknowledge/react-models';
import 'core-js/stable';

import App from './App';
import './styles/index.scss';

ReactDOM.render(
  <ModelProvider>
    <Router>
      <App />
    </Router>
  </ModelProvider>,
  document.getElementById('root')
);
