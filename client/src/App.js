import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dbService from './db-service';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  };

  componentWillMount() {
    dbService.foo()
      .then(data => {
        this.setState({ data: data.data });
      });

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="list-div">
        <ul>
          {
            this.state.data.map(data=> {
              return <li key={data.key} >{data.str}</li>
            })
          }
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
