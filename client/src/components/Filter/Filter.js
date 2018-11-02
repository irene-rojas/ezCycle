// import React, { Component } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import { InstantSearch } from 'react-instantsearch-dom';
import Search from '../Search';


 const Filter = () => (
    
    <InstantSearch
    appId="latency"
    apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
    indexName="bestbuy"
  >
  <Search />
    {/* Search widgets will go there */}
  </InstantSearch>
 );

 export default Filter;