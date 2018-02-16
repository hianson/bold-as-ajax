import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      loading: true
    }
  }

  async componentDidMount() {
    this.apiPetfinder();
  }

  async apiPetfinder() {
    const KEY = process.env.REACT_APP_PETFINDER_KEY
    // var dd;

    const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?format=json&key=${KEY}&location=94530`)
    const data = await response.json()
    this.setState({ data: data.petfinder.pets.pet, loading: false})
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;
