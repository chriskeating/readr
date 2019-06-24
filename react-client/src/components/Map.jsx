import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 14,
      center: {
        lat: 40.7484405,
        lng: -73.9856644
      }
    }
    // this.returnComments = this.returnComments.bind(this)
    // this.addComment = this.addComment.bind(this)
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDmEUaDYd4AXZQewwf7i4mbdSHg3CN9KcA' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent/>
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;