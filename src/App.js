import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    //fetch
  }

  render() {
    console.log(process.env.REACT_APP_API)
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;
