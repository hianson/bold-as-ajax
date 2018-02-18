import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: {
        lat: null,
        lng: null
      },
      data: [],
      loading: true
    }
  }

  componentDidMount() {
    // get coords
    this.getCoordinates();
    // reverse geocode coords into postal code
    this.apiPostalCode();
    this.apiPetfinder();
  }

  getCoordinates() {
    navigator.geolocation.getCurrentPosition((position) => {
      var location = {lat: position.coords.latitude, lng: position.coords.longitude}
      this.setState({ location })
    })
  }

  async apiPostalCode() {
    var key = process.env.REACT_APP_GOOGLE_KEY
    var lat = this.state.location.lat
    var lng = this.state.location.lng
    console.log(lat, lng)

    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${key}`)
    const data = await response.json()
    // console.log(data)
    // this.setState({})
  }

  async apiPetfinder() {
    var key = process.env.REACT_APP_PETFINDER_KEY

    const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?format=json&key=${key}&location=94530`)
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
