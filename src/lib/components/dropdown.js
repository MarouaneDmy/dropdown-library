import React from "react";
import data from "../../data/data"
import "./dropdown.css";

const Dropdown = () => (
  <div className="dropdown">
     <label className="label-dropdown-state" for="state-select">State</label>
    <select className="dropdown-state" name="state" id="state-select">
        <option value="">-- Please select an state --</option>
        {data.map((el) => <option key={el.abbreviation} value={el.name}>{el.name}</option>)}
    </select>
  </div>
);

export default Dropdown;
