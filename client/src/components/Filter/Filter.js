import React, { Component } from 'react'
// import React from 'react';
// import ReactDOM from 'react-dom';
import { InstantSearch, 
    SearchBox, 
    Hits, 
    Highlight, 
    Stats, 
    // SortBy, 
    Pagination,
    RefinementList
  } from 'react-instantsearch-dom';
  import "./Filter.css";

  import { Map, TileLayer, Marker, Popup } from 'react-leaflet'



import ScrollableAnchor from 'react-scrollable-anchor'


let geoloc = [];


const Hit = ({hit}) =>
//state {}
<div className="hit">
{/* <div className="hit-image">
<img src={hit.image}/>
</div> */}
<div className="hit-content">
<a href={hit.url} target="blank" ></a>
<div className="hit-item">
<b>{hit.name}</b><br></br>
{hit.address}<br></br>
{/* {this.setState({ geoloc: hit._geoloc})}*/}
{/*{hit.url}<br></br>*/}
<b><a href={hit.url} target="blank" >Visit site</a></b>
<div className="leaflet-container" style={{backgroundColor:"rgba(245, 245, 245, 0.966);"}}>
            <Map center={hit._geoloc} 
            zoom="11"
            style={{height: "400px",
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
                 <Marker
                        position={[hit._geoloc.lat, hit._geoloc.lng]}>
                        <Popup>
                            <div className="popupDiv" >
                                <b>Name:</b> {hit.name} <br></br>
                                <b>Address:</b> {hit.address}<br></br>
                                <b>Hours:</b> {hit.days}<br></br>
                                <b>Notes:</b> {hit.notes}<br></br>
                                <b>Recycles:</b> <br></br>
                                Rechargeable Batteries: {hit.rechargeableBatteries ? "✅" : "🚫"}<br></br>
                                Phones + Tablets: {hit.tabletsPhones ? "✅" : "🚫"}<br></br>
                                LCD Screens: {hit.tvLCD ?  "✅" : "🚫"}<br></br>
                                Computers: {hit.computers ?  "✅" : "🚫"}<br></br>
                                Wires: {hit.wires ? "✅" : "🚫"}<br></br>
                                Cathode Ray Tubes: {hit.crt ?  "✅" : "🚫"}<br></br>
                                Home Appliances: {hit.homeAppliances ?  "✅" : "🚫"}<br></br>
                                <b><a href={hit.url} target="blank" >Visit site</a></b></div>
                        </Popup>
                    </Marker>
                 </Map></div>
</div>
{/* <div className="hit-name">
<Highlight attribute="name" hit={hit}/>
</div>
<div className="hit-description">
<Highlight attribute="categories" hit={hit}/>

</div>*/}
</div> 
</div>

const Sidebar = () =>
<div className="sidebar">
<RefinementList attribute="categories"/>
</div>

const Content = () =>
<div className="content">
<div className="info">
<Stats />

</div>
<Hits hitComponent={Hit}/>
<div className="pagination">
<Pagination showLast/>
</div>
</div>



class Filter extends Component {

//   state = {
//     lat: 38.815805,
//     lng: -77.138255,
//     zoom: 11,
//     geoloc: [] 
// }
    render(){
      // const position = [this.state.lat, this.state.lng]

      return (
        <ScrollableAnchor id={'searchBar'}>
    <InstantSearch
    appId="NVBKVUGOH5"
    apiKey="2c6162f5b4b1177a3ba0ac6f74508f03"

    indexName="dev_recycling"
    >
  <SearchBox translations={{placeholder:'Find a Center'}}/>
  


      <Sidebar/>
  <main>
      <Content />
      {/* {console.log(geoloc)}
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
                 {this.state.geoloc.map(geolocData => (
                    <Marker
                        position={[geolocData[0].lat,geolocData[0].lng] }
                    >
                        {/* <Popup>
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
                    </Marker>))} </Map> */}
      </main>
  </InstantSearch>
   </ScrollableAnchor>
  
        )}}

 export default Filter;