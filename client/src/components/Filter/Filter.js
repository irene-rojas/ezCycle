import React, { Component } from 'react'
// import React from 'react';
import ReactDOM from 'react-dom';
import { InstantSearch, 
    SearchBox, 
    Hits, 
    Highlight, 
    Stats, 
    SortBy, 
    Pagination,
    RefinementList
  } from 'react-instantsearch-dom';
import Search from '../Search';


const style = {
    width: "50px",
    height: "50px"
  };

const Hit = ({hit}) =>
<div className="hit">
{/* <div className="hit-image">
<img src={hit.image}/>
</div> */}
<div className="hit-content">
<div className="hit-lat">
{hit.name}
{hit.address}
{hit.crt}
</div>
<div className="hit-name">
<Highlight attributeName="name" hit={hit}/>

</div>
<div className="hit-description">
<Highlight attributeName="description" hit={hit}/>

</div>
</div>
</div>

const Sidebar = () =>
<div className="sidebar" style={style}>
<RefinementList attributeName="rechargeableBatteries"/>
{/* <RefinementList attributeName="categories"/> */}
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
    <InstantSearch
    appId="NVBKVUGOH5"
    apiKey="2c6162f5b4b1177a3ba0ac6f74508f03"
    indexName="recyclingTest"
  >
  <SearchBox translations={{placeholder:'Find a Center'}}/>
  <main>
      <Sidebar/>
      <Content />
      </main>
  {/* <Search /> */}

    {/* Search widgets will go there */}
  </InstantSearch>
        )}}

 export default Filter;
