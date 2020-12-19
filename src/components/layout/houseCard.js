import React from "react";
import "./style.css";

function HouseCard(props) {
  return (
    <div className="card">
      
      <div className="img-container">
        <img alt={props.name} src={props.image} 
            onClick={props.showDetails}
            value={props.id}/>
      </div>
      
      <div className="content">
        <ul>
          <li>
            <strong>{props.bed}</strong> Bed&nbsp;&nbsp;&nbsp;
            <strong>{props.bath}</strong> Bath&nbsp;&nbsp;&nbsp;
            <strong>{props.sq}</strong> sqft
          </li> 
          <li> 
            {props.address} <br/> {props.city}, {props.state} {props.zip}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default HouseCard;
