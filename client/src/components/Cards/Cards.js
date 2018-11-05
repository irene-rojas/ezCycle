import React from "react";
import "./Cards.css";
import icon3 from "./icon3.png";
import icon2 from "./icon2.png";
import icon1 from "./icon1.png";

const Cards = () => (

    <div className="imageCards">
        <div className="container">
            <div className="row">
                <div className="col-md-4" >
                    <img className="icons" src={icon3} alt="battery"></img>
                    <h3>BATTERIES</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>

                <div className="col-md-4">
                <img className="icons" src={icon2} alt="electronics"></img>
                    <h3>ELECTRONICS</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>

                <div className="col-md-4">
                <img className="icons" src={icon1} alt="appliances"></img>
                    <h3>APPLIANCES</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>

            </div>
        </div>
    </div>



);

export default Cards;