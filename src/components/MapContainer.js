import React from 'react';
// import ReactDOM from 'react-dom';
import Map from './Map';
import {GoogleApiWrapper} from 'google-maps-react';
import Marker from './Marker'

export class Container extends React.Component {

  renderMarkers() {
    return this.props.data.map((marker) => {
      return(
        <Marker
          key={marker.id.$t}
          name={marker.name.$t}
          position={{lat: marker.latitude.$t, lng: marker.longitude.$t }}
        />
      )
    })
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Map
          style={style}
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

const style = {
  width: '75vw',
  height: '75vh',
  margin: '40px auto 20px auto'
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY
})(Container)
