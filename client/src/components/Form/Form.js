import React from "react";
import "./Form.css";
import Input from "../Input";
import Button from "../Button";
// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Form = props => (


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
                    <Input
                    name="name"
                    placeholder="Your Name"
                    />
                    <br></br>
                     <Input
                    email="email"
                    placeholder="Your Email Address"
                    />
                    <br></br>
                     <Input
                    address="address"
                    placeholder="New Location Street"
                    />
                    <br></br>
                     <Input
                    zip="zip"
                    placeholder="New Location Zip Code"
                    />
                    <br></br>
                    <Button
                        // onClick={this.handleFormSubmit}
                        type="success"
                        className="btn"
                      >
                      SUBMIT
                    </Button>

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