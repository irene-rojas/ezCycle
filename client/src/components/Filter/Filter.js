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
<div className="hit-image">
<img src={hit.image}/>
</div>
<div className="hit-content">
<div className="hit-price">
${hit.price}
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
<RefinementList attributeName="categories"/>
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
    appId="latency"
    apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
    indexName="bestbuy"
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