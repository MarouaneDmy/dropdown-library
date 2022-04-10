import React from "react";
import "./dropdown.css";

/**
 * It's a function that takes in a props object and returns a div with a select element that has an
 * onChange event listener that calls the onChange function passed in as a prop. 
 * 
 * The select element has a list of options that are created by mapping over the data array passed in
 * as a prop. 
 * 
 * The key for each option is the abbreviation and the value is the name. 
 * 
 * The text for each option is the name.
 * @param props - an object that contains the properties that were passed to the component.
 */
const Dropdown = (props) => (
  <div className="dropdown">
    <select className="dropdown-state" name="state" id="state-select" onChange={props.onChange}>
        {props.data.map((el) => <option key={el.abbreviation} value={el.name}>{el.name}</option>)}
    </select>
  </div>
);

export default Dropdown;
