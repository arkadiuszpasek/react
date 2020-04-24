import React from 'react';
import GeoDisplay from './GeoDisplay';
import Loader from './Loader';

class Geo extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, err: '' };
  // }
  state = { lat: null, err: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.longitude }),
      (err) => this.setState({ err: err.message }),
    );
  }

  renderContent() {
    const { err, lat } = this.state;

    if (lat != null) return <GeoDisplay lat={lat} />;
    if (err !== '') return <div>{err}</div>;
    return <Loader text="Please allow location access in your browser" />;
  }

  render() {
    return this.renderContent();
  }
}

export default Geo;
