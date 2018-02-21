import React, { Component } from 'react';
import MapContainer from './components/MapContainer'
import ListContainer from './components/ListContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      animals: [],
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
    this.getShelterData(postalCode)
  }

  async getShelterData(postalCode) {
    var key = process.env.REACT_APP_PETFINDER_KEY

    const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?format=json&key=${key}&location=${postalCode}`)
    const json = await response.json()
    const data = json.petfinder.shelters.shelter
    this.setState({ data: data, loading: false})
  }

  handlePetData(data) {
    if (data) {
      console.log(data)
      this.setState({ animals: data })
    }
  }


  render() {
    return (
      <div style={style}>
        <MapContainer handlePetData={this.handlePetData.bind(this)} location={this.state.location} data={this.state.data}/>
        <ListContainer animals={this.state.animals}/>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px'
}

export default App;
