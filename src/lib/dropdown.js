import React from "react";
import "./dropdown.css";

// Création du dropdown-menu
const Dropdown = (props) => (
  // Dropdown et liste des éléments de la props.data
  <div className="dropdown">
    <select className="dropdown-state" name="state" id="state-select" onChange={props.onChange}>
        {props.data.map((el) => <option key={el.abbreviation} value={el.name}>{el.name}</option>)}
    </select>
  </div>
);

export default Dropdown;
