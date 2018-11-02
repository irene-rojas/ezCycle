import React from "react";
import "./Form.css";
import Input from "../Input";
import Button from "../Button";
import recycleicon from "./recycleicon.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const handleFormSubmit = event => {
    alert('New location submitted!');
    event.preventDefault();
}


const Form = props => (

    // onClick = {props.handleFormSubmit};

    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-5" id="about-connect">
                <h2><img className="social" src={recycleicon}></img>&nbsp;ezCycle</h2>
                    <p>ezCycle is an organization committed to helping users find recycling centers near them. We are constantly looking for new facilities and local events. Follow, like, and spread the word about ezCycle!</p>
                    <hr></hr>
                    <p><img className="social" src={facebook}></img><img className="social" src={instagram}></img><img className="social" src={twitter}></img><img className="social" src={youtube}></img></p>
                </div>
                <div className="col-md-5 col-md-offset-1" id="contact-connect">
                    <h2>ADD A FACILITY OR EVENT</h2>
                    <p>We are always looking for new recycling facilities or events to add to our database. Please fill out this form to submit a new location.</p>
                    <br></br>
                <div className="form">
                    <Input
                    address="address"
                    placeholder="New Location Street"
                    />
                    <br></br>
                     <Input
                    zip="zip"
                    placeholder="New Location Zip"
                    />
                    <br></br>
                     <Input
                    days="days"
                    placeholder="Days of Week"
                    />
                    <br></br>
                     <Input
                    time="time"
                    placeholder="Time of Day"
                    />
                    <br></br>
                    <Button
                        onClick={handleFormSubmit}
                        type="light"
                        className="btn"
                      >
                      SUBMIT
                    </Button>
                    </div>
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

export default Form;