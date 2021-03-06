import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg empNav" 
         style={{justifyContent: "center", backgroundColor: "#172367", borderBottom: "red",
         borderBottomWidth: "thick", borderBottomStyle: "solid"}}>
      <ul style={{listStyleType: "none", textAlign: "center",color: "#ffffff"}}>
       <li><a className="navbar-brand" href="/" style={{color: "#ffffff",  fontSize:"45px"}}>
        Real-Tour</a>
      </li>
      <li>
      <span style={{fontSize: "15px", fontFamily: 'Gotu'}}>Let us help you find your deam home.</span>
      </li>
      </ul>
    </nav>

    </div>
  );
}

export default Navbar;