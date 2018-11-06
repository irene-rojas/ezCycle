//import React 
import React, { Component } from 'react';
//import wrapper section
import Wrapper from "../Wrapper";
//import cards section
import Cards from "../Cards";
//import filter
import Filter from "../Filter";
//import Form
import Form from "../Form";
//import MapCarte section
import Carte from "../Carte";
//import facts section
import Facts from "../Facts";
// import './Page.css';

class Page extends Component {

  render() {
    return (
      <div>
        <Wrapper />
        <Cards />
        <Facts />
        <Filter/>
        <Carte />
        <Form />
      </div>
    );
  }
}



export default Page;