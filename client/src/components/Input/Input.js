import React from "react";
import "./Input.css";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Input = props => (
  <div className="input-group input-group-md">
    <input className="form-control" type="text" {...props} />
  </div>
);

export default Input;