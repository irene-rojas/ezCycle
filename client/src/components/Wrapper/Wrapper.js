import React, { Component } from "react";
import "./Wrapper.css";
// import ScrollableAnchor from 'react-scrollable-anchor'

class Wrapper extends Component {
    render() {
        return (

        <div className="jumbotron">
        
        <h1 className="text-center" id="wrapper-heading">ezCycle</h1>
        <h2 id="wrapper-subheading">eRECYCLING DONE EASY IN YOUR NEIGHBORHOOD</h2>
        <a href="#searchBar"><button className="btn">RECYCLE NOW</button></a>
    
        </div>
        )
    }
}



// const Wrapper = () => (

//     <div className="jumbotron">
        
//                 <h1 className="text-center" id="wrapper-heading">ezCycle</h1>
//                 <h2 id="wrapper-subheading">eRECYCLING DONE EASY IN YOUR NEIGHBORHOOD</h2>
//                 <button className="btn">RECYCLE NOW</button>
            
//     </div>

// )

export default Wrapper;