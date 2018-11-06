import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import API from "../../utils/api";

class Carte extends Component {

    state = {
        lat: 38.815805,
        lng: -77.138255,
        zoom: 11,
        ezCycleSeedsArray: [], //API is saved in an Array here
    }

    //function that calls the Api
    componentDidMount() {
        this.findAll();

    }
    //call API data from ezCycleDB here
    findAll = () => {
        API.findAll()
            .then(data => {
                this.setState({ ezCycleSeedsArray: data.data });
                console.log("Response of API", this.state.ezCycleSeedsArray)
            })
            .catch(err => console.log(err));
    };


    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className="leaflet-container" style={{backgroundColor:"rgba(245, 245, 245, 0.966);"}}>
            <Map center={position} 
            zoom={this.state.zoom}
            style={{height: "300px",
            width: "100%",
           }}
            >

                <TileLayer
                    url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                    maxZoom="18"
                    id="mapbox.streets"
                    accessToken="pk.eyJ1Ijoibm9taW5iIiwiYSI6ImNqbTk4enhqdTBkazEzcG4xMnF2d2hhMHUifQ.FR4IlfSjVgCaXe4MtqsomQ"
                />
                {this.state.ezCycleSeedsArray.map(ezCycleData => (
                    <Marker
                        position={[ezCycleData.lat, ezCycleData.long]}
                    >
                        <Popup>
                            <div className="popupDiv" >
                                <b>Name:</b> {ezCycleData.name} <br></br>
                                <b>Address:</b> {ezCycleData.address}<br></br>
                                <b>Hours:</b> {ezCycleData.days}<br></br>
                                <b>Notes:</b> {ezCycleData.notes}<br></br>
                                <b>Recycles:</b> <br></br>
                                Rechargeable Batteries: {ezCycleData.rechargeableBatteries ? "Yes" : "No"}<br></br>
                                Phones + Tablets: {ezCycleData.tabletsPhones ? "Yes" : "No"}<br></br>
                                LCD Screens: {ezCycleData.tvLCD ? "Yes" : "No"}<br></br>
                                Computers: {ezCycleData.computers ? "Yes" : "No"}<br></br>
                                Wires: {ezCycleData.wires ? "Yes" : "No"}<br></br>
                                Cathode Ray Tubes: {ezCycleData.crt ? "Yes" : "No"}<br></br>
                                Home Appliances: {ezCycleData.homeAppliances ? "Yes" : "No"}<br></br>
                                <b><a href={ezCycleData.url} target="blank" >Visit site</a></b></div>
                        </Popup>
                    </Marker>))}

               
            </Map>
            </div>
        )
    }
}

export default Carte;