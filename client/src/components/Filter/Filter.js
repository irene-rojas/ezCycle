import React, { Component } from 'react'
// import React from 'react';
// import ReactDOM from 'react-dom';
import { InstantSearch, 
    SearchBox, 
    Hits, 
    Highlight, 
    Stats, 
    SortBy, 
    Pagination,
    RefinementList
  } from 'react-instantsearch-dom';
  import "./Filter.css";
  import { Map, TileLayer, Marker, Popup } from 'react-leaflet'



import ScrollableAnchor from 'react-scrollable-anchor'


const Hit = ({hit}) =>
<div className="hit">
{/* <div className="hit-image">
<img src={hit.image}/>
</div> */}
<div className="hit-content">
<a href={hit.url} target="blank" ></a>
<div className="hit-item">
<b>{hit.name}</b><br></br>
{hit.address}<br></br>

{/*{hit.url}<br></br>*/}
<b><a href={hit.url} target="blank" >Visit site</a></b>
<div className="leaflet-container" style={{backgroundColor:"rgba(245, 245, 245, 0.966);"}}>
            <Map center={[hit._geoloc.lat, hit._geoloc.lng]} 
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
  
    render(){
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
      </main>
  </InstantSearch>
   </ScrollableAnchor>
  
        )}}

 export default Filter;