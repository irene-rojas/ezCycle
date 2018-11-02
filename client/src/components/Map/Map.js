import React, { Component } from 'react'
// import { Map, TileLayer, Marker, Popup } from '../../src'
import L from 'leaflet';


// // import React from 'react';
// import React, { Component } from "react";

// import L from 'leaflet';


const style = {
    width: "100%",
    height: "700px"
  };

class Map extends Component {
  

  
    componentDidMount() {
    // create map, cred to Andrew Cherniavskii for helping me  https://medium.com/@cherniavskii/creating-leaflet-maps-in-react-apps-e2750372d6d6
    this.map = L.map('map', {
      center: [38.995719, -77.038405],
      zoom: 12,
      layers: [
        L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        // maxZoom: 18,
        id: "mapbox.streets",
        accessToken: "pk.eyJ1Ijoibm9taW5iIiwiYSI6ImNqbTk4enhqdTBkazEzcG4xMnF2d2hhMHUifQ.FR4IlfSjVgCaXe4MtqsomQ"
        }),
      ]
    });
    // add marker
//   this.marker = L.marker(this.props.markerPosition).addTo(this.map);
  }

//   componentDidUpdate({ markerPosition }) {
//     // check if position has changed
//     if (this.props.markerPosition !== markerPosition) {
//       this.marker.setLatLng(this.props.markerPosition);
//     }
//   }
  render() {
    return <div id="map" style={style} />;

  }
}
export default Map;

