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
//import footer section
import Footer from "../Footer";
import API from "../../utils/api";


// import './Page.css';

class Page extends Component {
state ={
  listings: []
};
  //function that calls the Api
  componentDidMount() {
    this.findAll();
  }
  
  findAll = () => {
    API.findAll()
    .then(res =>
      this.setState({ listings: res}),
      console.log(this.state.listings)
    )
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Wrapper />
        <Cards />
        <Facts />
        {/* <Map /> */}
        <Footer />

      </div>
    );
  }
}



export default Page;