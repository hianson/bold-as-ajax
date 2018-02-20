import React from 'react';
import ReactDOM from 'react-dom';
export class Map extends React.Component {

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate() {
    if (this.props.location.lat && this.props.location.lng) {
      this.map.panTo({lat: this.props.location.lat, lng: this.props.location.lng})
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = this.props.location.lat;
      let lng = this.props.location.lng;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return (
      <div style={style} ref='map'>
        Loading map...
      </div>
    )
  }
}

const style = {
  width: '75vw',
  height: '75vh',
  margin: '40px auto 20px auto'
}

export default Map;
