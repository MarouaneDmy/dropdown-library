import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "./lib/dropdown";
import "./index.css";
const data =  [
    {
        "name": "Paris",
        "abbreviation": "PS"
    },
    {
        "name": "Montpellier",
        "abbreviation": "MTP"
    },
    {
        "name": "Nice",
        "abbreviation": "NC"
    }
]


ReactDOM.render(<Dropdown data={data} onChange={(event)=>console.log(event.target.value)}/>, document.getElementById("root"));

export { Dropdown }