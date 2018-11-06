//import React 
import React, { Component } from 'react';
//import wrapper section
import Wrapper from "../Wrapper";
// //import cards section
import Cards from "../Cards";
// //import container section
// import Map from "../Map";
import Carte from "../Carte";
// //import facts section
import Facts from "../Facts";
//import footer section
// import Footer from "../Footer";
import Form from "../Form";
// import Filter from "../Filter";

// import './Page.css';

class Page extends Component {



  render() {
    return (
      <div>
        <Wrapper />
        <Cards />
        <Facts />
        {/* <Filter/> */}
        <Carte />
        <Form />
      </div>
    );
  }
}



export default Page;