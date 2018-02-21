import React from 'react';
import Map from './Map';
import {GoogleApiWrapper, Marker} from 'google-maps-react';

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  renderMarkers() {
    return this.props.data.map((marker) => {
      return(
        <Marker
          onClick={(e) => this.onMarkerClick(e)}
          key={marker.id.$t}
          id={marker.id.$t}
          name={marker.name.$t}
          position={{lat: marker.latitude.$t, lng: marker.longitude.$t }}
        />
      )
    })
  }

  onMarkerClick(e) {
    this.getPetData(e.id)
  }

  async getPetData(shelterId) {
    var key = process.env.REACT_APP_PETFINDER_KEY

    const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.getPets?format=json&key=${key}&id=${shelterId}`)
    const json = await response.json()
    const data = json.petfinder.pets.pet
    // console.log(json)
    // if (data) {
    //   console.log(data)
    // }
    this.props.handlePetData(data);
    // // map over results and return array with necessary info
    //
    //
    // this.setState({ data: data, loading: false})
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Map
          google={this.props.google}
          location={this.props.location}
          data={this.props.data}
        >
        {this.renderMarkers()}

        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY
})(Container)
