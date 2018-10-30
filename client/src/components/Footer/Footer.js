import React from "react";
import "./Footer.css";

const Footer = () => (

    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-5" id="about-connect">
                    <h2>ezCycle</h2>
                    <p>ezCycle is an organization committed to helping users find recycling centers near them. We are constantly looking for new facilities and local events. Follow, like, and spread the word about exCycle!</p>

                </div>
                <div className="col-md-5 col-md-offset-1" id="contact-connect">
                    <h2>ADD A FACILITY OR EVENT</h2>
                    <p>We are always looking for new recycling facilities or events to add to our database. Please fill out this form to submit a new location.</p>
                    


                    <button className="btn">SUBMIT</button>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12" id="copyright">
                    <p>Copyright &copy; 2018</p>
                </div>
            </div>
        </div>

    </div> //footer end





);

export default Footer;