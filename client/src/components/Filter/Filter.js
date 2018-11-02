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
// =======
// import React from 'react';

// // the UI component for filtering the subway entrances by subway line
// export default (props) => {
//   const { centers, filterCenters } = props;

//   // this is the JSX that will become the Filter UI in the DOM, notice it looks pretty similar to HTML
//   // notice in the select element onChange is set to the updateFilter method
//   // thus when a user selects a new subway line to view, the component passes the new filter value
//   // to the parent component, Map, which reloads the GeoJSON data with the current filter value
//   return (
//     <div className="filterRecyclingCenters">
//       <hr/>
//       <h3>Find a Recycling Center Near You</h3>
//       <p>Filter by Zip Code</p>
//       <select defaultValue="*"
//         type="select"
//         name="filterCenters"
//         onChange={(e) => filterCenters(e)}>
//           { /* We render the select's option elements by maping each of the values of subwayLines array to option elements */ }
//           {
//             centers.map((center, i) => {
//               return (
//                   <option value={center} key={i}>{center}</option>
//                 );
//             }, this)
//           }
//       </select>
//     </div>
//   );
// };


// // // the UI component for filtering the subway entrances by subway line
// // export default (props) => {
// //   const { lines, filterLines } = props;

// //   // this is the JSX that will become the Filter UI in the DOM, notice it looks pretty similar to HTML
// //   // notice in the select element onChange is set to the updateFilter method
// //   // thus when a user selects a new subway line to view, the component passes the new filter value
// //   // to the parent component, Map, which reloads the GeoJSON data with the current filter value
// //   return (
// //     <div className="filterSubwayLines">
// //       <hr/>
// //       <h3>Brooklyn Subway Entrances</h3>
// //       <p>A <a href="http://leafletjs.com/">Leaflet</a> &amp; <a href="https://facebook.github.io/react/">React</a> demo</p>
// //       <p>Filter Entrances by Subway Line</p>
// //       <select defaultValue="*"
// //         type="select"
// //         name="filterlines"
// //         onChange={(e) => filterLines(e)}>
// //           { /* We render the select's option elements by maping each of the values of subwayLines array to option elements */ }
// //           {
// //             lines.map((line, i) => {
// //               return (
// //                   <option value={line} key={i}>{line}</option>
// //                 );
// //             }, this)
// //           }
// //       </select>
// //     </div>
// //   );
// // };

