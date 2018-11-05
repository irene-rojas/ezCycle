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

import API from "../../utils/api";



// import './Page.css';

class Page extends Component {
// state ={
//   listings: []
//   // test: 1
// };
 
  
// //  increaseTest() {
// //    this.setState({test: this.state.test + 1});
// //  };

//   findAll = () => {
//     API.findAll()
//     .then(res => 
//       this.setState({ listings: res}),
//       console.log("Response of API", this.state.listings)
//     )
//     .catch(err => console.log(err));
//   };

//    //function that calls the Api
//    componentDidMount() {
//     this.findAll();
//     // this.increaseTest();
//   }

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