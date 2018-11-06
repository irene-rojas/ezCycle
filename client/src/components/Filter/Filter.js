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
    indexName="recyclingTest"
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