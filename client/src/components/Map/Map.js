// import React from 'react';
import React, { Component } from "react";

import L from 'leaflet';


const style = {
    width: "100%",
    height: "300px"
  };

class Map extends Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [38.995719, -77.038405],
      zoom: 16,
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
  render() {
    return <div id="map" style={style} />;

  }
}
export default Map;



// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

// const Map = ReactMapboxGl({
//     accessToken: 'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A'
//   });
//   class App extends React.Component {
//     render() {
//       return (
//         <Map
//           style="mapbox://styles/username/hash"
//           containerStyle={{ width: '100vw', height: '100vh'}}
//         />
//       );
//     }
//   }

// export default Map;
