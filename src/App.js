import React, { Component } from 'react';
import MapContainer from './components/MapContainer'
import ListContainer from './components/ListContainer'
import DisplayContainer from './components/DisplayContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      animals: [],
      display: null,
      location: {
        lat: null,
        lng: null
      }
    }
    this.handleDisplayData = this.handleDisplayData.bind(this);
  }

  componentDidMount() {
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
    // console.log(data)
    this.setState({ data: data })
  }

  handlePetData(data) {
    if (data) {
      this.setState({ animals: data })
    }
  }

  handleDisplayData(data) {
    this.setState({ display: data })
  }


  render() {
    return (
      <div style={style}>
        <MapContainer handlePetData={this.handlePetData.bind(this)} location={this.state.location} data={this.state.data} />
        <div>
          <ListContainer
            animals={this.state.animals}
            handleDisplayData={this.handleDisplayData}/>
          <DisplayContainer display={this.state.display}/>
        </div>
      </div>
    );
  }
}

const style = {
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'center',
  margin: '20px'
}

export default App;
