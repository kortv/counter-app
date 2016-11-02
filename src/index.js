import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import appStore from './appStore';
import './index.css';

ReactDOM.render(
  <App {...{appStore}} />,
  document.getElementById('root')
);
