import React, { Component } from 'react';
import MapContainer from './components/MapContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      loading: true,
      location: {
        lat: null,
        lng: null
      }
    }
  }

  componentDidMount() {
    // api stuff
    this.getCoordinates();
  }

  getCoordinates() {
    navigator.geolocation.getCurrentPosition((position) => {
      var location = {lat: position.coords.latitude, lng: position.coords.longitude}
      this.setState({ location }, () => this.getPostalCode(location))
      this.getPostalCode(location)
    })
  }

  async getPostalCode(location) {
    var key = process.env.REACT_APP_GOOGLE_KEY
    var latlng = `${location.lat},${location.lng}`

    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&result_type=postal_code&key=${key}`)
    const data = await response.json()
    const postalCode = data.results[0].address_components[0].long_name
    this.getPetData(postalCode)
  }

  async getPetData(postalCode) {
    var key = process.env.REACT_APP_PETFINDER_KEY

    const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?format=json&key=${key}&location=${postalCode}`)
    const json = await response.json()
    const data = json.petfinder.shelters.shelter
    // console.log(data)
    // map over results and return array with necessary info


    this.setState({ data: data, loading: false})
  }


  render() {
    // console.log('app', this.state.data)
    return (
      <div className="App">
        <MapContainer location={this.state.location} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
