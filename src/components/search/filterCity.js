import React from "react";

function FilterCity(props) {
  return (
    <form>
      <div className="form-group" style={{width: "175px",display:"inline !important"}}>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by city.."
          id="search"
          Style={"width: 170px;display:inline !important"}
        />
           &nbsp;&nbsp;&nbsp;
      </div> 
    </form>
    
  );
}

export default FilterCity;