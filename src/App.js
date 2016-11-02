import React, { Component } from 'react';
import {observer} from 'mobx-react';

import logo from './logo.svg';
import './App.css';

@observer
export default class App extends Component {
  render() {
    const { appStore } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <button onClick={appStore.decrement}>decrement</button>
          &nbsp;
          counter: {appStore.counter}
          &nbsp;
          <button onClick={appStore.increment}>increment</button>
        </p>
      </div>
    );
  }
}
