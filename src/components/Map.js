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

      let zoom = 12;
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

  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.props.currentLocation
      });
    })
  }

  render() {
    return (
      <div style={style} ref='map'>
        Loading map...
        {this.renderChildren()}
      </div>
    )
  }
}

const style = {
  width: '55vw',
  height: '75vh',
  // margin: '40px auto 20px auto'
}

export default Map;
