import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

// type State = {
//   lat: number,
//   lng: number,
//   zoom: number,
// }

export default class Carte extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
        // <div className="leaflet-container">
      <Map center={position} 
      zoom={this.state.zoom}
      style={{height: "700px"}}
      >
        <TileLayer
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            maxZoom="18"
            id= "mapbox.streets"
            accessToken="pk.eyJ1Ijoibm9taW5iIiwiYSI6ImNqbTk4enhqdTBkazEzcG4xMnF2d2hhMHUifQ.FR4IlfSjVgCaXe4MtqsomQ"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    //   </div>
    )
  }
}