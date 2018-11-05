import { Component } from 'react';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

// Add the Hits component to our import
import { Hits } from 'react-instantsearch-dom';


class Search extends Component {

    createLeafletElement() {
      return GeoSearchControl({
        provider: new OpenStreetMapProvider(),
        style: 'bar',
        showMarker: true,
        showPopup: false,
        autoClose: true,
        retainZoomLevel: false,
        animateZoom: true,
        keepResult: false,
        searchLabel: 'search'
      });
    }
  }
  
  export default Search;