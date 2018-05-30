import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from './component/Grid';
// imported and rendered grid component

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Polymer Test 2</h1>
        </header>
        <p className="App-intro">
            <Grid/>
        </p>
      </div>
    );
  }
}

export default App;
