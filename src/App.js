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
    // this.apiPostalCode();
    // this.apiPetfinder();
  }

  getCoordinates() {
    navigator.geolocation.getCurrentPosition((position) => {
      var location = {lat: position.coords.latitude, lng: position.coords.longitude}
      // this.setState({ location })
      this.apiPostalCode(location)
    })
  }

  async apiPostalCode(location) {
    var key = process.env.REACT_APP_GOOGLE_KEY
    var latlng = `${location.lat},${location.lng}`

    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&result_type=postal_code&key=${key}`)
    const data = await response.json()
    const postalCode = data.results[0].address_components[0].long_name
    this.apiPetfinder(postalCode)
  }

  async apiPetfinder(postalCode) {
    var key = process.env.REACT_APP_PETFINDER_KEY

    const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?format=json&key=${key}&location=${postalCode}`)
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
