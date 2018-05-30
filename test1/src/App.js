import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import data from './data/sampledata';


// Reading data from data file and Table Component to render data
class App extends Component {

    constructor (props) {
      super(props);
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">.
                <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Polymer Test 1</h1>
              </header>

              <p className="App-intro">
                Reading the data from the file
              </p>

              <Table data={data}/>

            </div>
        );
    }
}






export default App;
