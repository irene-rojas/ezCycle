import React from "react";
import "./Facts.css";
// import world from "./world.png";
import world2 from "./world2.png";
import icon10 from "./icon10.png";
import icon11 from "./icon11.png";
import icon12 from "./icon12.png";
import icon13 from "./icon13.png";

const Facts = () => (

    <div className="facts">
        <div className="container">
            <div className="row">
                <div className="col-md-7" id="facts-section">
                    <h2 id="facts-heading">DID YOU KNOW...</h2>
                    <div className="row">
                    <div className="col-md-2">
                    <img className="icons" src={icon10} alt="garbage truck"></img>
                    </div>
                    <div className="col-md-10">
                    <p id="facts-list">Only <span className="orangeText">12.5</span> percent of e-waste is recycled. That's <span className="orangeText">20 to 50 million</span> metric tons of e-waste discarded every year.</p>
                    </div>
                    </div>
                    <br></br>
                    <div className="row">
                    <div className="col-md-2">
                    <img className="icons" src={icon12} alt="leaf in house"></img>
                    </div>
                    <div className="col-md-10">
                    <p id="facts-list">Recycling one million laptops saves the energy equivalent to the electricity used by <span className="orangeText">3,657</span> U.S. homes in a year.</p>
                    </div>
                    </div>
                    <br></br>
                    <div className="row">
                    <div className="col-md-2">
                    <img className="icons" src={icon11} alt="electric vine"></img>
                    </div>
                    <div className="col-md-10">
                    <p id="facts-list">Americans throw out phones containing over <span className="orangeText">$60 million</span> in gold and/or silver every year.</p>
                    </div>
                    </div>
                    <br></br>
                    <div className="row">
                    <div className="col-md-2">
                    <img className="icons" src={icon13} alt="globe cone"></img>
                    </div>
                    <div className="col-md-10">
                    <p id="facts-list">In 2014, <span className="orangeText">41.8</span> million metric tons of e-waste was shipped to developing countries, creating a dumping epidemic in these areas.</p>
                    </div>
                    </div>
                    <br></br>
                    <p id="source">*Facts sourced from Earth911.com</p>

                </div>
                <div className="col-md-5" id="facts-image">
                <img className="world img-responsive" src={world2} alt="big globe"></img>
                    


                    
                </div>

            </div>
        </div>

    </div> //footer end





);

export default Facts;