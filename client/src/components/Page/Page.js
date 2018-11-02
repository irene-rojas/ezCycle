//import React 
import React, { Component } from 'react';
//import wrapper section
import Wrapper from "../Wrapper";
// //import cards section
import Cards from "../Cards";
// //import container section
// import Map from "../Map";
// //import facts section
import Facts from "../Facts";
//import Form section
import Form from "../Form";


// import './Page.css';

class Page extends Component {

  
  // handleFormSubmit(event) {
  //   alert('New location submitted!');
  //   event.preventDefault();
  // }


  render() {
    return (
      <div>
        <Wrapper />
        <Cards />
        <Facts />
        {/* <Map /> */}
        <Form 
        
        />

      </div>
    );
  }
};



export default Page;