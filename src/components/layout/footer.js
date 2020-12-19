import React from "react";
import "./style.css";

function Footer() {
    let year = new Date().getFullYear();
  return (
    <div className="footer">
        <footer>
        &#169; ~ Real-tour ~ {year}
        </footer>
    </div>
  );
}
export default Footer;
