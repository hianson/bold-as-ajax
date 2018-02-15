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
    const KEY = process.env.REACT_APP_PETFINDER_KEY
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const location = '94530'
    const target = `http://api.petfinder.com/pet.find?format=json&key=${KEY}&location=${location}`

    fetch(proxy + target)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data;
    })
    .catch(error => {
      console.log(error)
      return error
    })
  }

  render() {
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;
